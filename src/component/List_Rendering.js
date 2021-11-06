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

    const names = ['Soumya', 'Avik', 'Dayan']
    const nameList = names.map(name => <div><h4>{name}</h4></div>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default List_Rendering;
