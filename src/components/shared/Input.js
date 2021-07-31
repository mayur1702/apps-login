import { TextField } from '@material-ui/core';
import React from 'react';

const style = {
    maxWidth: '520px',
    width: '100%'
};

/**
 * 
 * @param {*} props 
 * @param {string} props.value
 * @returns 
 */
const Input = (props) => {

    const {
        value,
        label,
        type = "text",
        onInput = () => {}
    } = props;
    return (
        <TextField
            type={type}
            label={label}
            value={value}
            variant='outlined'
            style={style}
            onInput={onInput}
        />
    );
};

export default Input;