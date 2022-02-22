import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
      super(props)
        this.inputFocusRef = React.createRef()
    }

    focusRef(){
        this.inputFocusRef.current.focus();
    }


  render() {
    return (
      <>
        <input type="text" ref={this.inputFocusRef}/>
      </>
    )
  }
}

export default Input