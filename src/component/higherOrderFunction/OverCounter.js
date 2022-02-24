import React, { Component } from 'react'
import Counter from './Counter';

class OverCounter extends Component {

  render() {
    const {counter, counterFunction} = this.props;

    return (
      <div>
        <h2 onMouseOver={counterFunction}>Hover {counter} times</h2>
      </div>
    )
  }
}

export default Counter(OverCounter)