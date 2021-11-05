import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={ () => {props.greetHandler('Soumya')}}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
