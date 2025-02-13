import {Box, Typography, Modal, TextField, Button, InputLabel} from "@mui/material";
import UniversalTable from "../../UI/table";
import {useEffect, useState} from "react";
import $http from "../../../http";
import toast from "react-hot-toast";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";
import Input from "../../input/Input";

function transformUsersFormat(users) {
    return users.map((item) => ({
        userId: item.user,
        id: item._id,
        createdAt: item.createdAt,
        price: item.price + ` ${item.currency}`,
        address: item.address || "",
        typeOfOperation: item.operation === "DEPOSIT" ? "Ввод" : "Вывод",
        status: item.status === "PROCESS" ? "Обработка" : "Зачислено"
    }));
}

const headers = [
    "Пользователь",
    "ID",
    "Дата и время",
    "Сумма",
    "Реквизиты вывода",
    "Статус",
    "Изменение статуса"
];

const columnTypes = [
    "default",
    "default",
    "default",
    "default",
    "default",
    "default",
    "button"
];

const isClickableIndexes = [];

const WithdrawRequests = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState({});
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const {data: depositData} = await $http.get(`/api/deposit/`);
            setData(depositData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    const onButtonClick = (id) => {
        const item = data.find((item) => item._id === id);
        if (!item) {
            return toast.error("Не существующий данный");
        }
        setPrice(item.price);
        setSelectedItem(item);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setPrice("");
        setSelectedItem({});
        setModalOpen(false);
    };

    const handleChangeStatus = async () => {
        const withdraw = selectedItem;
        if (!withdraw) {
            return toast.error("Не существующий данный");
        }
        const toastId = toast.loading("Loading...");
        const isWithdraw = withdraw.operation === "WITHDRAW";
        try {
            const {data} = await $http.post(`/api/deposit/change-status/${withdraw._id}`, {
                price: price
            });
            await fetchData();
            toast.success(
                isWithdraw ? "Деньги успешно выведены у пользователя" : "Деньги успешно пополнились у пользователя",
                {id: toastId},
            );
            handleModalClose();
        } catch (e) {
            if (e instanceof AxiosError) {
                toast.error(e.response?.data.message, {id: toastId});
            } else {
                toast.error(e.message, {id: toastId});
            }
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return null;
    }

    return (
        <Box className="container">
            <Box sx={{width: "100%"}}>
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{
                        fontSize: "35px",
                        fontFamily: 'Stolzl',
                        mt: "50px"
                    }}
                >
                    Заявки на ввод/вывод
                </Typography>

                <UniversalTable
                    onButtonClick={onButtonClick}
                    data={transformUsersFormat(data)}
                    headers={headers}
                    columnTypes={columnTypes}
                    isClickableIndexes={isClickableIndexes}
                />
            </Box>

            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: "10px"
                }}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                        style={{
                            fontFamily: "Stolzl"
                        }}
                    >
                        Изменить сумму и статус
                    </Typography>
                    <InputLabel
                        sx={{
                            mt: 2,
                            fontFamily: "Stolzl",
                            fontSize: "13px",
                            mb: 1
                        }}
                    >
                        Новая сумма
                    </InputLabel>
                    <Input
                        type="number"
                        value={price}
                        setValue={(value) => setPrice(value)}
                        style={{
                            width: "100%",
                        }}
                    />
                    <Button
                        onClick={handleChangeStatus}
                        variant="contained"
                        sx={{
                            mt: 3,
                            fontFamily: "Stolzl",
                            p: "4px"
                        }}
                    >
                        Изменить статус
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
}

export default WithdrawRequests;
