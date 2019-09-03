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
        },
        isValid: false
    }

    //updating the formdata values in state
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState(prevState => ({
            ...prevState,
            formData: {
                ...prevState.formData,
                [name]: value
            }
        }))
    }
    validate = () => {
        let isValid = true;
        let formData = this.state.formData;
        let formError = this.state.formError;
        if (formData.firstName === "") {
            this.setState(prevState => ({
                ...prevState,
                formError: {
                    ...prevState.formError,
                    firstName: "enter a name"
                }
            }))
            isValid = false
        }
        if (formData.lastName === "") {
            this.setState(prevState => ({
                ...prevState,
                formError: {
                    ...prevState.formError,
                    lastName: "enter a name"
                }
            }))
            isValid = false
        }
        if (formData.email === "" || !formData.email.includes("@")) {
            this.setState(prevState => ({
                ...prevState,
                formError: {
                    ...prevState.formError,
                    email: "enter a valid email"
                }
            }))
            isValid = false
        }
        if (formData.password === "" && formData.password < 8) {
            this.setState(prevState => ({
                ...prevState,
                formError: {
                    ...prevState.formError,
                    password: "password must contain minimum 8 characters"
                }
            }))
            isValid = false
        }
        return isValid;
    }
    //submitting the form
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.validate()) {
            //Pushing form data to redux store
            this.props.showData(this.state.formData)
            //resetting the values to empty after submitting
            this.setState(prevState => ({
                ...prevState,
                formData: {
                    ...prevState.formData,
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                },
                formError: {
                    ...prevState.formError,
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                }
            }));
        } else {
            console.log("not submitted")
            return false
        }




    }


    render() {
        return (
            <div className="form-component">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            onChange={this.handleChange}
                            value={this.state.formData.firstName} />
                        <p>{this.state.formError.firstName}</p>
                    </div>
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.state.formData.lastName} />
                        <p>{this.state.formError.lastName}</p>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.formData.email} />
                        <p>{this.state.formError.email}</p>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.formData.password} />
                        <p>{this.state.formError.password}</p>
                    </div>
                    <input type="submit" value="Create" className="btn btn-primary" />
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