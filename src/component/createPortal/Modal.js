import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends Component {
    constructor(props) {
      super(props)
        this.el = document.createElement('div');
    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }

  render() {
    return ReactDOM.createPortal(
      this.props.children, this.el
    )
  }
}

export default Modal