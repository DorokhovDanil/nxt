import React from 'react';
import { MenuItem, FormControl, Select, InputLabel } from '@mui/material';

function CustomSelect({ handleChange, formData }) {

    return (
        <FormControl 
            sx={{
                width: "50%",
            }}
        >
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.depositTerm}
                label="Выбрать"
                name="depositTerm"
                onChange={handleChange}
                sx={{
                    borderRadius: "0",
                    border: "1px solid #000000",
                    p: "0",
                    '& .MuiSelect-select': {
                        p: "3px",
                    },
                    fontFamily: 'Stolzl',
                }}
            >
                <MenuItem
                    value={1}
                    sx={{
                        fontFamily: 'Stolzl',
                    }}
                >1 год</MenuItem>
                <MenuItem
                    value={2}
                    sx={{
                        fontFamily: 'Stolzl',
                    }}
                >2 года</MenuItem>
                <MenuItem
                    value={3}
                    sx={{
                        fontFamily: 'Stolzl',
                    }}
                >3 года</MenuItem>
                <MenuItem
                    value={4}
                    sx={{
                        fontFamily: 'Stolzl',
                    }}
                >4 года</MenuItem>
                <MenuItem
                    value={5}
                    sx={{
                        fontFamily: 'Stolzl',
                    }}
                >5 года</MenuItem>
            </Select>
        </FormControl>
    );
}

export default CustomSelect;
