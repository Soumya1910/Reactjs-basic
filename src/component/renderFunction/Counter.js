import React, { Component } from 'react'

/*
The term "render prop" refers to a technique for sharing code between React Components using a prop whose value is a function.
*/

class Counter extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           counter : 0
        }
      }
  
      incrementHandler = () => {
          this.setState({counter : this.state.counter + 1});
      }


  render() {
    return (
      <>
        {this.props.render(this.state.counter, this.incrementHandler)}
      </>
    )
  }
}

export default Counter