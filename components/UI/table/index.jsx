import React from "react";
import "./style.css";
import {Button} from "@mui/material";
import { Link } from "react-router-dom";

function getValueByIndex(obj, index) {
    let keys = Object.keys(obj);
    let key = keys[index];
    return obj[key];
}

const UniversalTable = ({data, headers, columnTypes, onButtonClick, isClickableIndexes }) => {

    return (
        <table width="100%">
            <thead>
            <tr>
                {headers.map((header, index) => {
                    const type = columnTypes[index];
                    if (type == "twoLines")
                        return (
                            <th key={index}>
                                <p>{header[0]}</p>
                                <p>{header[1]}</p>
                            </th>
                        );
                    return <th key={index}>{header}</th>;
                })}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => {
                return (
                    <tr key={rowIndex}>
                        {headers.map((_, colIndex) => {
                            const currentValue = getValueByIndex(row, colIndex);
                            const type = columnTypes[colIndex];
                            const status = currentValue === "Обработка" ? "inactive" : "active";

                            switch (type) {
                                case "twoLines":
                                    return (
                                        <td key={colIndex}>
                                            <div>{currentValue[0]}</div>
                                            <div>{currentValue[1]}</div>
                                        </td>
                                    );
                                case "status":
                                    return (
                                        <td
                                            key={colIndex}
                                            className={`status ${status}`}
                                        >
                                            <p>{currentValue}</p>
                                        </td>
                                    );
                                case "button":
                                    return (
                                        <td key={colIndex}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                onClick={() => onButtonClick(row.id)}
                                                sx={{
                                                    bgcolor: "#2C84EC",
                                                    borderRadius: "2px",
                                                    fontFamily: "Stolzl",
                                                    fontSize: "10px",
                                                    fontWeight: 400
                                                }}
                                            >Изменить</Button>
                                        </td>
                                    );
                                default:
                                    return <td key={colIndex}>
                                        {isClickableIndexes?.includes(colIndex) ? (
                                            <Link to={`/profile/${currentValue}`}>{currentValue}</Link>
                                        ) : currentValue}
                                    </td>;
                            }
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default UniversalTable;
