import React, { Component } from 'react'

class HoverCounterTwo extends Component {
    
  render() {
      const {counter, incrementHandler} = this.props;
    return (
        <div>
            <h2 onMouseOver={incrementHandler}>Hovered {counter} times</h2>
        </div>
      
    )
  }
}

export default HoverCounterTwo