import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as dataType from '../store/action'
require('../css/form.css')
class FormComponent extends Component {
    state = {
        formData: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
        formError: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    }
    validate = (e) => {
        e.preventDefault();
        let formData = this.state.formData;
        let formError = this.state.formError;
        if (formData.firstName.length < 3) {
            this.setState(prevState => ({
                formError: {
                    ...prevState.formError,
                    firstName: "Minimum length is 3"
                }
            }))
        }
    }

    //updating first name value
    handleFirstNameChange = (e) => {
        const formData = { ...this.state.formData, firstName: e.target.value }
        this.setState({ formData })
    }
    //updating last name value
    handleLastNameChange = (e) => {
        const formData = { ...this.state.formData, lastName: e.target.value }
        this.setState({ formData })
    }
    //updating email value
    handleEmailChange = (e) => {
        const formData = { ...this.state.formData, email: e.target.value }
        this.setState({ formData })
    }
    //updating password value
    handlePasswordChange = (e) => {
        const formData = { ...this.state.formData, password: e.target.value }
        this.setState({ formData })
    }


    //submitting the form
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.formError)
        //Pushing form data to redux store
        this.props.showData(this.state.formData)

        //resetting the values to empty after submitting
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        }));
    }

    render() {
        return (
            <div className="form-component">
                <form onSubmit={this.validate}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleFirstNameChange}
                            required
                            value={this.state.formData.firstName} />
                        <p>{this.state.formError.firstName}</p>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleLastNameChange}
                            required
                            value={this.state.formData.lastName} />
                        <p>{this.state.formError.lastName}</p>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleEmailChange}
                            required
                            value={this.state.formData.email} />
                        <p>{this.state.formError.email}</p>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handlePasswordChange}
                            required
                            value={this.state.formData.password} />
                        <p>{this.state.formError.password}</p>
                    </div>
                    <input disabled={this.state.isTrue} type="submit" value="Create" className="btn btn-primary" />
                </form>
                {/* <ul>
                    {this.props.formDatas.map((form, id) => (
                        <li key={id}>
                            <h4>{form.firstName}</h4>
                            <h4>{form.lastName}</h4>
                            <h4>{form.email}</h4>
                            <h4>{form.password}</h4>
                        </li>
                    ))}
                </ul> */}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        formDatas: state.dummy //Recieving dummy from index.js 
    }
}

function mapDispatchToProps(dispatch) {
    return {
        showData: data => dispatch(dataType.showData(data)) //Calling showData() from action.js
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent) 