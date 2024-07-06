import Box from '@mui/material/Box';
import { Button, MenuItem, Modal, Select, Typography } from "@mui/material"
import Input from '../input/Input';
import CustomSelect from '../CustomSelect/CustomSelect';
import qrCode from '../../assets/images/photo_2024-06-16_01-15-27.jpg'

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

const TopUpModalConfirm = ({ onClose, open, changeStep, formData }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{

            }}
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
                    Переведите {formData.price} {formData.currency} TRC 20 на этот кошелек, после этого нажмите далее, скриншот подтвержденного перевода пришлите в службу поддержки @ncpsupport
                </Typography>
                <Box
                    sx={{
                        width: "104px",
                        height: "133px",
                        mt: "15px"
                    }}
                >
                    <img 
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                        src={qrCode} alt={""}
                    />
                </Box>
                {/* <Typography
                    sx={{
                        fontSize: "11px",
                        fontFamily: 'Stolzl',
                        width: "100%",
                        mt: "15px"
                    }}
                >
                    После перевода средств по реквизитам, указанным ниже, пожалуйста, прикрепите скриншот перевода / транзакции.
                </Typography> */}
                {/* <Box>
                    <Button
                        variant='outlined'
                        onChange={changeStep}
                        sx={{
                            borderRadius: "30px",
                            fontFamily: 'Stolzl',
                            color: "#000000",
                            px: "48px",
                            mt: "15px",
                            fontSize: "11px",
                        }}
                    >
                        Загрузить
                    </Button>
                </Box> */}
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

export default TopUpModalConfirm;