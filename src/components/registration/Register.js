import { Box, Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import DynamicForm from '../shared/DynamicForm';
import "./Register.scss";

const FormInputArray = [
        {
            label: "Username",
            key: "username",
            placeholder: "Enter username",
            helperText: "",
            validations: {
                minLength: 3
            },
            errors: {},
            fieldType: "input",
            type: "text"
        },
        {
            label: "Email",
            key: "email",
            placeholder: "Enter email",
            helperText: "",
            validations: {
                email: true
            },
            errors: {},
            fieldType: "input",
            type: "email"
        },
        {
            label: "Phone number",
            key: "phoneNumber",
            placeholder: "Enter phonenumber",
            helperText: "",
            validations: {
                length: 10
            },
            errors: {},
            fieldType: "input",
            type: "number"
        },
        {
            label: "Password",
            key: "password",
            placeholder: "Enter password",
            helperText: "",
            validations: {
                minLength: 8,
                maxLength: 16
            },
            errors: {},
            fieldType: "input",
            type: "password"
        },
        {
            label: "Confirm Password",
            key: "confirmPassword",
            placeholder: "Re-enter password",
            helperText: "",
            validations: {
                minLength: 8,
                maxLength: 16
            },
            errors: {},
            fieldType: "input",
            type: "password"
        },
    ];

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            phoneNumber: ""
        };
    }

    render() {

        return (
            <div className="registration-container">
                <Box boxShadow={1} component="div" className="form-container">
                        <DynamicForm FormInputArray={FormInputArray} />
                        <Box component="div" className="margin-top-1 text-center-aligned" >
                            <Link to="/login">
                                <i>Already a user, login!</i>                 
                            </Link>
                        </Box>
                </Box>
            </div>
        )
    }

}

export default Register;