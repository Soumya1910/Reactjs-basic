import React from 'react'


const FrwdRefInput = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref = {ref}></input>
    </>
  );
})

export default FrwdRefInput