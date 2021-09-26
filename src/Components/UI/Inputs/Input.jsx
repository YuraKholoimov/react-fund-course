import React from 'react';
import style from '../../../css/input.module.css'

const Input = (props) => {
    return(
        <input {...props} className={style.input}/>
    )
}


export default Input;
