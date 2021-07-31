import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ErrorHandling from '../../ErrorHandling';
import Service from '../services/Service';
import DynamicForm from '../shared/DynamicForm';
import "./Login.scss";

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
    }
];

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    async submitForm(value) {
        try {
            const status = await Service.login(value);
            if (status) {
                alert("login successfull");
                return;
            }
            alert("login failed");   
            console.log(value);
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="login-container">
                <Box boxShadow={1} className="form-container">
                    <DynamicForm FormInputArray={FormInputArray} onFormSubmit={this.submitForm.bind(this)} />
                    <Box component="div" className="margin-top-1 text-center-aligned" >
                        <Link to="/register">
                            <i>No account, register here</i>                 
                        </Link>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Login;