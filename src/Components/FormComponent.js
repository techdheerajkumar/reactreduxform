import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as dataType from '../store/action'
require('../css/form.css')
class FormComponent extends Component {
    state = {
        formData: {
            name: "",
            userName: "",
            email: ""
        },
        isTrue: false
    }
    handleNameChange = (e) => {
        const formData = { ...this.state.formData, name: e.target.value }
        this.setState({ formData })
    }
    handleEmailChange = (e) => {
        const formData = { ...this.state.formData, email: e.target.value }
        this.setState({ formData })
    }
    handleUserChange = (e) => {
        const formData = { ...this.state.formData, userName: e.target.value }
        this.setState({ formData })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.showData(this.state.formData)
        this.setState(prevState => ({
            formData: {
                ...prevState.formData,
                name: "",
                userName: "",
                email: ""
            }
        }))
    }
    render() {

        return (
            <div className="form-component">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleNameChange}
                            required
                            value={this.state.formData.name} />
                    </div>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleUserChange}
                            required
                            value={this.state.formData.userName} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleEmailChange}
                            required
                            value={this.state.formData.email} />
                    </div>
                    <input disabled={this.state.isTrue} type="submit" value="save" className="btn btn-primary" />
                </form>
                <ul>
                    {this.props.formDatas.map((form, id) => (
                        <li key={id}>
                            <h4>{form.name}</h4>
                            <h4>{form.userName}</h4>
                            <h4>{form.email}</h4>
                        </li>
                    ))}
                </ul>
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