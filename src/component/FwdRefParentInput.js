import React, { Component } from 'react'
import FrwdRefInput from './FrwdRefInput'

class FwdRefParentInput extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }
  render() {
    return (
      <>
        <FrwdRefInput ref = {this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    )
  }
}

export default FwdRefParentInput