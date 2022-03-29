import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0);
    /**
     * When we are defining useEffect,  basically we are requesting react to execute this 
     * function when component renders i.e. ComponentDidMount & ComponentDidUpdate
     */
    useEffect(()=> {
        document.title = `Clicked ${count} times`;
    })
  return (
    <>
        <button onClick={()=> setCount(prevCount => prevCount+1)}>Click {count} times</button>
    </>
  )
}

export default HookCounterOne