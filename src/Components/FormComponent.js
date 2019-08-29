import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as dataType from '../store/action'
class FormComponent extends Component {

    state = {
        formData: {
            name: "",
            userName: "",
            email: "",
        }
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
        const name = { ...this.state.formData, name: '' };
        const userName = { ...this.state.formData, userName: '' };
        const email = { ...this.state.formData, email: '' };
        this.setState({
            name,
            userName,
            email
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleNameChange}
                            value={this.state.formData.name} />
                    </div>
                    <div className="form-group">
                        <label>Username:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleUserChange}
                            value={this.state.formData.username} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.handleEmailChange}
                            value={this.state.formData.email} />
                    </div>

                    <input type="submit" value="save" />
                </form>

                {this.props.formDatas.map((form, id) => (
                    <div key={id}>{form.name}</div>
                ))}


            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        formDatas: state.reducer
    }

}

function mapDispatchToProps(dispatch) {
    return {
        showData: data => dispatch(dataType.showData(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent) 