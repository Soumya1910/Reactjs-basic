import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    /**
     * When we are defining useEffect,  basically we are requesting react to execute this 
     * function when component renders i.e. ComponentDidMount & ComponentDidUpdate
     */
    useEffect(()=> {
        console.log(`useEffect - conditional run`);
        document.title = `Clicked ${count} times`;
    }, [count]);
    
  return (
    <>
        <input type="text" name="name" value={name} onChange={e=> setName(e.target.value)}></input>
        <button onClick={()=> setCount(prevCount => prevCount+1)}>Click {count} times</button>
    </>
  )
}

export default HookCounterOne