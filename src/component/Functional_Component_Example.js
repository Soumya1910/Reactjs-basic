import React from 'react'

// By defining a normal function
// function Greet(){
//     return <h1>Hello Soumya</h1>
// }

// By using arrow function
const Greet = (props)=> <h1>Hello {props.name}! This is example of functional component</h1>

export default Greet