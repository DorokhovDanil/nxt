import React from 'react'
import './input.css'

const Input=({ setValue, value, type, style })=>{
    return(
        <input 
            style={style}
            onChange={(event) => setValue(event.target.value)} 
            className='input_'
            value={value} 
            type={type}
        />
    )
}

export default Input;