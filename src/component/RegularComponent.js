import React, { Component } from 'react'
/*
    shortcut: rce
*/


class RegularComponent extends Component {
    
  render() {
    console.log("Regular component render method.");
    return (
      <div>Regular Component {this.props.name}</div>
    )
  }
}

export default RegularComponent