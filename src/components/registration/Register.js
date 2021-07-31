import { Box, Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ErrorHandling from '../../ErrorHandling';
import Service from '../services/Service';
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
            requiredInApi: true,
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
            requiredInApi: true,
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
            requiredInApi: true,
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
            requiredInApi: true,
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
            requiredInApi: true,
            fieldType: "input",
            type: "password"
        },
    ];

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async submitForm(value) {
        try {
            console.log(value);
            const status = await Service.register(value);
            if (status) {
                alert("Registered successfully");
                return;
            }
            alert("failed");   
            console.log(value);
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <div className="registration-container">
                <Box boxShadow={1} component="div" className="form-container">
                        <DynamicForm FormInputArray={FormInputArray} onFormSubmit={this.submitForm.bind(this)} />
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