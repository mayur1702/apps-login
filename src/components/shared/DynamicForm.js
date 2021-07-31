import { Box, Button } from '@material-ui/core';
import React, { Fragment } from 'react';
import Input from './Input';

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

    render() {
        return (
            <div className="dynamic-form-container">
                
                {this.renderForm()}

                <Button variant="contained" color="primary" className="submit-button">
                    SUBMIT
                </Button>
            </div>
        );
    }
}

export default DynamicForm;