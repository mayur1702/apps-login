import { Box } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
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
        fieldType: "input",
        type: "password"
    }
];

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="login-container">
                <Box boxShadow={1} className="form-container">
                    <DynamicForm FormInputArray={FormInputArray} />
                    <Box component="div" className="margin-top-1 text-center-aligned" >
                        <Link to="/register">
                            <i>Not a user, register here</i>                 
                        </Link>
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Login;