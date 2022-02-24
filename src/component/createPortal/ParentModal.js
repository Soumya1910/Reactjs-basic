import React, { Component } from 'react'
import ChildPopUp from './ChildPopUp'

class ParentModal extends Component {
    state = { showModal: false }
    handleShowMessage = () => { this.setState({ showModal: true }) }
    handleCloseMessage = () => { this.setState({ showModal: false }) }
    render() {
        return (
            <>
            <div className='parentClassModal'>
            <div id='modalPopUp'>
                    <h1>My App</h1>
                    <p>
                        This is an example of how you might use React.createPortal. I think
                        it is a pretty neat API that is yet another awesome escape hatch
                        that React provides for practical reasons. Sometimes you just need
                        to render something completely outside the React Tree.
                    </p>
                    <button onClick={this.handleShowMessage}>Show Secret Modal</button>
                    {
                        this.state.showModal ? (
                            <ChildPopUp onClose={this.handleCloseMessage}>
                                This is a secret Modal Message!
                            </ChildPopUp>
                        ) : null
                    }
                </div>
            </div>
                
            </>
        )
    }
}

export default ParentModal