import React from 'react'

// By defining a normal function
// function Greet(){
//     return <h1>Hello Soumya</h1>
// }

// By using arrow function
const Greet = (props) => {
    return (
        <div>
            <h1>Hello {props.name}! This is example of functional component. You are {props.age} years old.</h1>
            {props.children}
        </div>
    );
}

export default Greet