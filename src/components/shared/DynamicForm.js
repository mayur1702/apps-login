import { Box, Button } from '@material-ui/core';
import React from 'react';
import Input from './Input';

const hiddenInputStyle = {
    position: 'absolute',
    width: '1px',
    height: '1px',
    top: '0px',
    border: 'none',
    outline: 'none',
    opacity: '0'
};

class DynamicForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    renderFields(field) {

        switch (field.fieldType) {
            case "input":
                return (
                    <Box component="div" className="margin-bottom" key={field.key}>
                        <Input 
                            type={this.state[field.key]}
                            {...field}
                            onInput = {(event) => this.setState({[field.key]: event.target.value})}
                        />
                    </Box>
                )     
            case "dropdown":
                return "dropdown component"
            case "checkbox":
                return "checkbox component"   
            default:
                break;
        }

    }

    renderForm() {
        const {
            FormInputArray
        } = this.props;
        return FormInputArray.map(field => this.renderFields(field));
    }

    submitForm() {
        const formValue = {};
        const {
            FormInputArray,
            onFormSubmit
        } = this.props;
        FormInputArray.forEach(field => {
            if (field.requiredInApi) {
                formValue[field.key] = this.state[field.key];
            }
        });
        onFormSubmit(formValue);
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.submitForm();
    }

    render() {
        return (
            <div className="dynamic-form-container">

                <form onSubmit={this.handleFormSubmit.bind(this)}>
                    <input type="submit" tabIndex="-1" style={hiddenInputStyle} />
                    {this.renderForm()}
                </form>
                

                <Button variant="contained" color="primary" className="submit-button" onClick={this.submitForm.bind(this)}>
                    SUBMIT
                </Button>
            </div>
        );
    }
}

export default DynamicForm;