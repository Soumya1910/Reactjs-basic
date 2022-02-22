import React, { Component } from 'react'

/*
UseCases:
    1. Focus the text box in login form when page renders
    2. Fetch the input value
*/


class RefComponent extends Component {c

    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
      
    }

    componentDidMount(){
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </>
    )
  }
}

export default RefComponent