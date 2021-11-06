import React from 'react'

function List_Rendering() {
    /*const names = ['Soumya', 'Sayan', 'Priyanka']
    return (
        <div>
        {
            names.map(name => <h3>{name}</h3>)
        }
        </div>
    ) */

    /*const names = ['Soumya', 'Avik', 'Dayan']
    const nameList = names.map(name => <div><h4>{name}</h4></div>)
    return (
        <div>
            {nameList}
        </div>
    )*/

    const persons = [{"id": 1, "name": "Soumya", "age": 10}, {"id": 1, "name": "Avik", "age": 20}, {"id": 2, "name": "Priyanka", "age": 30}]
    const personList = persons.map(person => (<div> <h4>I'm {person.name}. I am {person.age} years old.</h4></div>))
    return (
        <div>{personList}</div>
    )
}

export default List_Rendering;
