import React from 'react'

function Person({personProps}) {
    return (
        <div>
            <div> <h4>I'm {personProps.name}. I am {personProps.age} years old.</h4></div>
        </div>
    )
}

export default Person;
