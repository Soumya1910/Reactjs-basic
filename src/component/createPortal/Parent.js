import React, { Component } from 'react'
import Modal from './Modal';
import style from '../../css/style.css';

function Child(){
    return (
        <div className="modal">
          <button>Click</button>
        </div>
      );
}

class Parent extends Component {

    constructor(props) {
      super(props)
        this.state = {clicks: 0};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState(prevState => ({
        //     clicks : prevState + 1
        // }));
        this.setState({clicks: this.state.clicks+1})
    }
  render() {
    return (
      <>
        <div onClick={this.handleClick}>
            <p>Number of clicks : {this.state.clicks}</p>
            <p>Open up the browser DevTools to observe that the button is not a child of the div with the onClick handler.</p>
            <Modal>
                <Child/>
            </Modal>
        </div>
      </>
    )
  }
}

export default Parent