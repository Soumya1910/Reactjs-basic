import React, { Component, useState } from 'react'
import Counter from './Counter'

class ClickCounter extends Component {
  render() {
    const {counter, counterFunction} = this.props

    return (
        <div>
            <button onClick={counterFunction}>Clicked {counter} times</button>  
        </div>
      
    )
  }
}

export default Counter(ClickCounter)