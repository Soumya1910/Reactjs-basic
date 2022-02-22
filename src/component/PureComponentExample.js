import React, { PureComponent } from 'react'

/*
shortcut : rpce
*/
/*
Till now we have created Class component by extending React Component class. 
Another way to create a class component is by extending PureComponent class of React.
*/
class PureComponentExample extends PureComponent {
  render() {
    console.log("Pure component render method.");
    return (
      <div>Pure Component Example {this.props.name}</div>
    )
  }
}

export default PureComponentExample