import React, {useState} from 'react'

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);
  return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter