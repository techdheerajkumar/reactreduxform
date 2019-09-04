import React, { Component } from 'react'
import { connect } from 'react-redux';
require('../css/home.css')

class HomeComponent extends Component {
    constructor() {
        super();
    }

    test = () => {
        console.log(this.props.formData)
    }
    render() {
        return (
            <div className="home-component">
                <div className="container">
                    <h1>List of Registered Users</h1>
                    <ul>
                        {this.props.formData.map((data, id) => {
                            return (
                                <li key={id}>
                                    <h2>{data.firstName} {data.lastName}</h2>
                                    <h3>{data.email}</h3>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        formData: state.dummy
    }
}
export default connect(mapStateToProps)(HomeComponent) 