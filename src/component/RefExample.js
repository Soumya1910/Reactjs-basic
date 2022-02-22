import React, { Component } from 'react'
import Input from './Input'

class RefExample extends Component {
    constructor(props) {
      super(props)
        this.componentFocusRef = React.createRef();
    }

    clickHandler = () =>{
        this.componentFocusRef.current.focusRef()
    }

  render() {
    return (
      <>
        <Input ref={this.componentFocusRef}/>
        <button onClick={this.clickHandler}>Focus Me</button>
      </>
    )
  }
}

export default RefExample