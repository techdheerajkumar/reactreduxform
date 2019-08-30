import React, { Component } from 'react'
import FormComponent from '../Components/FormComponent'
require('../css/contact.css')
class FormController extends Component {
    render() {
        return (
            <div className="form-controller">
                <h1>Create Account React-Redux Form</h1>
                <FormComponent></FormComponent>
            </div>
        )
    }
}

export default FormController;