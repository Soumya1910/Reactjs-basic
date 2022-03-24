import React, { Component } from 'react'

class ClassCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    increment = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    incrementFive = () => {
        this.setState(prevCount => {
            return {
                count : prevCount.count + 5
            }
        });
    }

  render() {
    return (
      <>
        <button onClick={this.increment}>Count {this.state.count}</button>
        <button onClick={this.incrementFive}>Count {this.state.count}</button>
      </>
    )
  }
}

export default ClassCounter