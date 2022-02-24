import React from 'react'
import ReactDOM from 'react-dom'

function ReactPortalsDemo() {
    /*
    We have added aditional div tag in index.html.
    If you inspect the element, you will find that this is rendered under the root id. but we want to move it to other id i.e. react_portals
    <div id="root">
        <div class="App">
            <h1>React Portals Demo</h1>
            <p>It will redirect to the child DOM when child dom is not present in Parent hierarchy.</p>
        </div>
    </div>
    <div id="react-portals"></div>
    */

    //   return (
    //     <>
    //         <h1>React Portals Demo</h1>
    //         <p>It will redirect to the child DOM when child dom is not present in Parent hierarchy.</p>
    //     </>
    //   )


    return ReactDOM.createPortal(
        <>
            <h1>React Portals Demo</h1>
            <p>It will redirect to the child DOM when child dom is not present in Parent hierarchy.</p>
        </>,
        document.getElementById('react-portals')
    );

    /*
        ReacctDOM.createPortal() takes two arguments : 
            1. String, number, JSX, component
            2. The element tag name
    */
}

export default ReactPortalsDemo