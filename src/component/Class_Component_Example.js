import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div>
                <h3>Hello Soumya! This is example of Class Component. You stay at {this.props.place}</h3>
            </div>
        )
    }
}

export default Welcome
