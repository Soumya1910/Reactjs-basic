import React, {useState} from 'react'

function IncrementDecrementCounter() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            //setCount(count+1); // whenever we need to increment value based on previous value, it's recommended to use a function which accepts previous Value and increment it.
            setCount(prevCount => prevCount+1);
        }
    }

  return (
    <>
        <h2>Count {count}</h2>
        <button onClick={()=>setCount(initialCount)}>Reset</button>&nbsp;
        <button onClick={()=>setCount(count+1)}>Increment</button>&nbsp;
        <button onClick={()=>setCount(count-1)}>Decrement</button>&nbsp;
        <button onClick={incrementFive}>Increment5</button>
    </>
  )
}

export default IncrementDecrementCounter