import React, {useState} from 'react'

function StateWithObject() {
    const [name, setName] = useState({firstName: '', lastName : ''});
  return (
    <>
        <label>First Name : </label>
        <input type="text" value={name.firstName} name="fname" onChange={e=> setName({...name, firstName : e.target.value})}></input>
        <br/>
        <label>Last Name : </label>
        <input type="text" value = {name.lastName} name= "lname" onChange={e=> setName({...name, lastName: e.target.value})}></input>
        <p>Your first name : <b>{name.firstName}</b></p> 
        <p>Your last name : <b>{name.lastName}</b></p> 
        
    </>
  )
}

export default StateWithObject