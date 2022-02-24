import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ChildPopUp extends Component {
  render() {
      return(
        ReactDOM.createPortal(
            <>
              <div id="childModal">
                  <div id="childModalPopUp">
                      {this.props.children}
                      <hr/>
                      <button onClick={this.props.onClose}>Close</button>
                  </div>
              </div>
            </>,
  
            document.getElementById('modal-root')
        )
      )
      
  }
}

export default ChildPopUp