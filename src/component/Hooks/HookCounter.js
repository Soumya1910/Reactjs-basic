import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0);
    const increment = () => {setCount(count+1)}
  return (
    <>
        <button onClick={increment}>Count {count}</button>
    </>
  )
}

export default HookCounter


/**
 Rules of Hooks:

 Only call hooks at the top level.
        Don't call hooks inside loops, consitions or nested functions.
 Only call hooks from React Functions:
        Call them from within React functional components and not just any regular JavaScript function.
*/