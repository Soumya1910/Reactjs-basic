import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye"
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message : "GoodBye!"
        })
    }

    render() {
        return (
            <div>
                {this.state.message}<br/>
                {/* <button onClick = {this.clickHandler.bind(this)}>Click Me : Event Binding Approach 1</button>*/}
                {/* <button onClick={ () => {this.clickHandler()}}>Click Me : Event Binding Approach 2</button> */}
                {/* <button onClick = {this.clickHandler}>Click Me: Event Binding in class Constructor: Approach 3</button> */}
                <button onClick = {this.clickHandler}>Click Me: Event binding by defining arrow function : Approach 4</button>
            </div>
        )
    }
}

export default EventBind
