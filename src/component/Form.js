import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : "",
             comments : "",
             topic : "Angular"
        }
    }

    eventChangeUser = (event) => {this.setState({username : event.target.value})}
    handleCommentsChange = (event) => {this.setState({comments: event.target.value})}
    handleTopic = (event) => {this.setState({topic : event.target.value})}
    handleSubmit = (event) => {
        alert(`Username: ${this.state.username}\nComments : ${this.state.comments}\nTopic : ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, topic, comments} = this.state
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type = "text" value = {username} onChange = {this.eventChangeUser}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value = {comments} onChange = {this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value = {topic} onChange = {this.handleTopic}>
                        <option value = "React">React</option>
                        <option value= "Angular">Angular</option>
                        <option value = "Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
