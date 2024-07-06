import Box from '@mui/material/Box';
import { Button, MenuItem, Modal, Select, Typography } from "@mui/material"
import Input from '../input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const TopUpModal = ({ onClose, open, changeStep, handleChange, formData }) => {
    return (
        <Modal className='modal_window'
            
            open={open}
            onClose={onClose}
        >
            <Box sx={style}>
                <Typography
                    sx={{
                        fontSize: "16px",
                        fontFamily: 'Stolzl'
                    }}
                >
                    Заявка на пополнение
                </Typography>
                <Typography
                    sx={{
                        mt: "15px",
                        fontSize: "11px",
                        fontFamily: 'Stolzl'
                    }}
                >
                    Выберите валюту пополнения
                </Typography>

                <Box
                    sx={{
                        mt: "21px",
                    }}
                >
                    <Button
                        variant={formData.currency === "USDT" ? 'contained' : "outlined"}
                        name={"currency"}
                        value={"USDT"}
                        onClick={handleChange}
                        sx={{
                            borderRadius: "30px",
                            fontFamily: 'Stolzl',
                            color: formData.currency === "USDT" ? "#ffffff" : "#000000",
                            px: "35px"
                        }}
                    >
                        USDT
                    </Button>
                    {/* <Button
                        variant={formData.currency === "RUB" ? 'contained' : "outlined"}
                        name={"currency"}
                        value={"RUB"}
                        onClick={handleChange}
                        sx={{
                            borderRadius: "30px",
                            fontFamily: 'Stolzl',
                            color: formData.currency === "RUB" ? "#ffffff" : "#000000",
                            px: "35px",
                            ml: "10px"
                        }}
                    >
                        RUB
                    </Button> */}
                </Box>
                <Box sx={{
                    display: "flex",
                    mt: "15px"
                }}>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            fontFamily: 'Stolzl',
                            width: "50%"
                        }}
                    >
                       Сумма пополнения
                    </Typography>
                    <Input
                        type="text"
                        value={formData.price}
                        setValue={(value) => handleChange({
                            target: {
                                value: value,
                                name: "price"
                            }
                        })}
                        style={{
                            width: "50%"
                        }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    mt: "20px"
                }}>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            fontFamily: 'Stolzl',
                            width: "50%"
                        }}
                    >
                       Кошелек для пополнения
                    </Typography>
                    <Input
                        type="text"
                        value={formData.address}
                        setValue={(value) => handleChange({
                            target: {
                                value: value,
                                name: "address"
                            }
                        })}
                        style={{
                            width: "50%"
                        }}
                    />
                </Box>
                <Box sx={{
                    display: "flex",
                    mt: "15px",
                    alignItems: "center"
                }}>
                    <Typography
                        sx={{
                            fontSize: "10px",
                            fontFamily: 'Stolzl',
                            width: "50%"
                        }}
                    >
                        Срок вклада
                    </Typography>
                    <CustomSelect handleChange={handleChange} formData={formData}/>
                </Box>

                <Box
                    sx={{
                        marginTop: "15px"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            background: "#2C84EC0D",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            Срок
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            % доходности, годовых
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            background: "#2C84EC0D",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            1 год
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            10.7%
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            background: "#2C84EC0D",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            2 года
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            15,7%
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            background: "#2C84EC0D",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            3 года
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            20.7%
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            background: "#2C84EC0D",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            4 года
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            25.7%
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            background: "#2C84EC0D",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            5 лет
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "10px",
                                fontFamily: 'Stolzl',
                                width: "50%",
                                padding: "6px 8px"
                            }}
                        >
                            30.7%
                        </Typography>
                    </Box>
                </Box>
                <Typography
                    sx={{
                        fontSize: "10px",
                        fontFamily: 'Stolzl',
                        width: "100%",
                        mt: "15px"
                    }}
                >
                    После открытия вклада, средства будут заморожены на выбранный период. Вы сможете снимать доход, полученный с вклада раз в 3 месяца, но сам вклад можно будет снять только после окончания срока вклада.
                </Typography>
                <Button
                    variant='contained'
                    onClick={changeStep}
                    sx={{
                        borderRadius: "30px",
                        fontFamily: 'Stolzl',
                        color: "#ffffff",
                        px: "35px",
                        mt: "15px",
                        fontSize: "11px"
                    }}
                >
                    Далее
                </Button>
            </Box>
        </Modal>
    );
}

export default TopUpModal;