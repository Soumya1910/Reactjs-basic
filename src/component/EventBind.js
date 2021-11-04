import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    
    clickHandler(){
        this.setState({
            message: "Good Bye"
        })
        console.log(this)
    }

    render() {
        return (
            <div>
                {this.state.message}<br/>
                <button onClick = {this.clickHandler.bind(this)}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
