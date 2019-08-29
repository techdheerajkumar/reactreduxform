import React, { Component } from 'react'
import { connect } from 'react-redux'
import TestComponent from '../Components/TestComponent'
class TestContainer extends Component {
    render() {
        return (
            <TestComponent coun={this.props.val}></TestComponent>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        val: state.counter
    }
}

export default connect(mapStateToProps)(TestContainer)