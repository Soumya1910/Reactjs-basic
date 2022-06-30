import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x : 0,
         y : 0
      }
    }

    logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        });
    }
    componentDidMount(){
        window.addEventListener(`mousemove : `, this.logMousePosition);
    }
  render() {
    return (
      <>
        <h3>X: {this.state.x}</h3>
        <h3>Y: {this.state.y}</h3>
      </>
    )
  }
}

export default ClassMouse