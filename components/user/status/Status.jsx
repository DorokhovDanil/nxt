import out_logo from "./../../../assets/images/output.png";
import in_logo from "./../../../assets/images/input.png";
import React, {useState, useEffect} from "react";
import moment from "moment";
import TopUpModal from "../../TopUpModal/TopUpModal";
import TopUpModalConfirm from "../../TopUpModalConfirm/TopUpModalConfirm";
import TopUpModalAccepted from "../../TopUpModalAccepted/TopUpModalAccepted";
import WithdrawModal from "../../WithdrawModal/WithdrawModal";
import ConfirmWithdrawModal from "../../WithdrawModal/ConfirmWithdrawModal";
import $host from "../../../http";
import "./style.css";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {AxiosError} from "axios";
import UniversalTable from "../../UI/table";

const output_but = "Вывести";
const input_but = "Пополнить";


const calculateDiffBetweenData = (dateString, numberOfYears) => {
    const startDate = new Date(dateString);
    const endDate = new Date(startDate);
    endDate.setFullYear(startDate.getFullYear() + numberOfYears);

    const diff = endDate - startDate;
    const days = diff / (1000 * 60 * 60 * 24);
    return days;
}

const calculateTotalIncomeForToday = (createdAtString, annualPercent, price, currency) => {
    if (currency === "RUB") {
        price = price / 90;
    }
    const today = new Date();
    const incomeForYear = price * annualPercent;
    const dailyIncome = incomeForYear / 365;

    const daysElapsed = moment(today).diff(
        moment(createdAtString),
        "days"
    );

    return dailyIncome * daysElapsed;
};


function getPercent(years) {
    switch (years) {
        case 1:
            return 0.107;
        case 2:
            return 0.157;
        case 3:
            return 0.207;
        case 4:
            return 0.257;
        case 5:
            return 0.307;
        default:
            return 0;
    }
}

const calculateIncome = (startDate, endDate, dailyRate) => {
    const diff = endDate - startDate;
    const days = diff / (1000 * 60 * 60 * 24);
    return days * dailyRate;
};


function transformStakingFormat(staking) {
    return staking.map((item) => ({
        ID: item._id,
        price: item.price + ` ${item.currency}`,
        date: [moment(item.createdAt).format("YYYY-MM-DD HH:mm"), calculateDiffBetweenData(item.createdAt, (item.depositTerm || 0))],
        percent: [(item.depositTerm || 0), `${getPercent(item.depositTerm) * 100}%`],
        income: [
            calculateTotalIncomeForToday(item.createdAt, getPercent(item.depositTerm), item.price, item.currency).toFixed(2) + ` ${"USDT"}`,
            item.price * (item.depositTerm || 0) * getPercent(item.depositTerm) + ` ${item.currency}`,
        ],
        status: item.status === "PROCESS" ? "Обработка" : "Зачислено",
    }));
}


const headers = [
    "ID",
    "Сумма вклада",
    ["Дата открытия", "/ дней до окончания"],
    ["Срок вклада", "% доходности (год)"],
    ["Доходность текущая", "Ожидаемая"],
    "Статус"
];

const columnTypes = [
    "default",
    "default",
    "twoLines",
    "twoLines",
    "twoLines",
    "status",
];


function calculateTotalBalance(stakings) {
    let totalSum = 0;

    stakings.forEach((staking) => {
        const summa = parseFloat(
            staking.summa.replace(" USDT", "").replace(",", "")
        );
        const income = parseFloat(
            staking.income[1].replace(" USDT", "").replace(",", "")
        );
        totalSum += summa + income;
    });

    return totalSum.toFixed(2);
}

function calculateTotalIncomePercentage(stakings) {
    let totalIncomePercentage = 0;
    const currentDate = new Date();

    stakings.forEach((staking) => {
        const summa = parseFloat(
            staking.summa.replace(" USDT", "").replace(",", "")
        );
        const procent = parseFloat(
            staking.procent[1].replace("%", "").replace(",", "")
        );
        if (!isNaN(summa) && !isNaN(procent)) {
            const daysElapsed = moment(currentDate).diff(
                moment(staking.date[0]),
                "days"
            );
            console.log(staking.date[0], currentDate);
            console.log(daysElapsed, "daysElapsed");
            const dailyPercentage = (1 + procent / 100) ** (1 / 365) - 1;
            const currentIncomePercentage =
                summa * ((1 + dailyPercentage) ** daysElapsed - 1);
            totalIncomePercentage += currentIncomePercentage;
        }
    });

    return totalIncomePercentage.toFixed(2);
}

function PartnerStatus() {
    const [stakingData, setStakingData] = useState([]);
    const [stepOfModals, setStepsOfModals] = useState(0);
    const [stepOfWithdraw, setStepOfWithdraw] = useState(0);
    const [loading, setLoading] = useState(true);
    const user = useSelector((state) => state.user?.currentUser?.user);
    const [formData, setFormData] = useState({
        price: 0,
        depositTerm: 0,
        address: "",
        operation: "WITHDRAW",
        currency: "USDT",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prev) => ({...prev, [name]: value}));
    }

    async function fetchStakingData() {
        try {
            const {data} = await $host.get("/api/deposit/transactions", {
                params: {
                    operation: "DEPOSIT"
                }
            });
            setStakingData(data);
        } catch (error) {
            console.error("There was a problem with your fetch operation:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleSubmit = async (type = "DEPOSIT") => {
        try {
            const response = await $host.post(`/api/deposit`, {...formData, operation: type});
            setStepOfWithdraw(2);
            toast.success("Заявка принята. Ждите подтвердения администраторов");
        } catch (e) {
            if (e instanceof AxiosError) {
                toast.error(e.response?.data?.message);
            } else {
                toast.error(e.message);
            }
        }
    }

    useEffect(() => {
        fetchStakingData();
    }, []);

    const onChangeStepWithdraw = async () => {
        await handleSubmit("WITHDRAW");
    }

    if (loading) {
        return null;
    }

    console.log(user);

    const bonusFromReferrals = user.referrals.reduce((acc, item) => acc + (item.balance * 0.1), 0);

    return (
        <>
            <TopUpModal
                open={stepOfModals === 1}
                onClose={() => setStepsOfModals(0)}
                changeStep={() => setStepsOfModals(2)}
                handleChange={handleChange}
                formData={formData}
            />
            <TopUpModalConfirm
                open={stepOfModals === 2}
                formData={formData}
                onClose={() => setStepsOfModals(0)}
                changeStep={() => {
                    handleSubmit();
                    setStepsOfModals(3)
                }}
            />
            <TopUpModalAccepted
                open={stepOfModals === 3}
                onClose={() => setStepsOfModals(0)}
                changeStep={() => setStepsOfModals(0)}
            />

            <WithdrawModal
                open={stepOfWithdraw === 1}
                onClose={() => setStepOfWithdraw(0)}
                changeStep={onChangeStepWithdraw}
                handleChange={handleChange}
                formData={formData}
            />

            <ConfirmWithdrawModal
                open={stepOfWithdraw === 2}
                onClose={() => setStepOfWithdraw(0)}
                changeStep={() => setStepOfWithdraw(0)}
            />
            <div className="container container_status">
                <div className="title">
                    {" "}
                    <span>Состояние счета</span>
                </div>
                <div className="main_con">
                    <div className="main_con_partn">
                        <div className="card">
                            <div className="title_card">Сумма всех счетов</div>

                            <div className="balance_card">
                                {user?.balance.toFixed(2) + " USDT"}
                            </div>

                            <div className="description_card">
                                Дата последнего пополнения: {moment(user.lastDepositTime).format("YYYY-MM-DD HH:mm")}
                            </div>

                            <div className="button_block">
                                <div
                                    style={{
                                        cursor: "pointer",
                                        opacity:'0.5'
                                    }}
                                    // onClick={() => setStepOfWithdraw(1)}
                                    className="output_button"
                                >
                                    <img src={out_logo} alt="text"/>
                                    {output_but}
                                </div>
                                <div
                                    style={{
                                        cursor: "pointer",
                                    }}
                                    onClick={() => setStepsOfModals(1)}
                                    className="input_button"
                                >
                                    <img src={in_logo} alt="text"/>
                                    {input_but}
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="title_card">Заработано, % с вложений</div>

                            <div className="balance_card">
                                {stakingData.reduce((acc, item) => acc + calculateTotalIncomeForToday(item.createdAt, getPercent(item.depositTerm), item.price, item.currency), 0).toFixed(2)} USDT
                                {/* {calculateTotalIncomePercentage(stakingData)} */}
                            </div>

                            <div className="description_card">
                                Ваш бонус – 10%. Как повысить уровень?
                            </div>

                            <div className="button_block">
                                <div style={{opacity:'0.5'}} className="output_button">
                                    <img src={out_logo} alt="text"/>
                                    {output_but}
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="title_card">Бонусы с реферальной программы</div>

                            <div className="balance_card">{bonusFromReferrals.toFixed(2)} USDT</div>

                            <div className="description_card">
                                Ваш бонус – 10%. Как повысить уровень?
                            </div>

                            <div className="button_block">
                                <div style={{opacity:'0.5'}} className="output_button">
                                    <img src={out_logo} alt="text"/>
                                    {output_but}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="title_balance">Стейкинг</div>

                <UniversalTable
                    data={transformStakingFormat(stakingData)}
                    headers={headers}
                    columnTypes={columnTypes}
                    isClickableIndexes={[]}
                />
                {/* <p style={{ fontSize: "10px", cursor: "pointer" }}>Показать все</p> */}
            </div>
        </>
    );
}

export default PartnerStatus;
