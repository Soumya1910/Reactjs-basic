import React, { Component } from 'react'

class ClickMouseTwo extends Component {
    
  render() {
      const {counter, incrementHandler} = this.props;
    return (
      <div>
        <button onClick={incrementHandler}>Clicked {counter} times</button>
      </div>
    )
  }
}

export default ClickMouseTwo