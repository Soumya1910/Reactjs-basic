import React from 'react'

/*
    shortcut : rfce
*/
function MemoComponent({ name }) {
    console.log("Memo component called..");
    return (
        <div>Memo Component -- {name}</div>
    )
}

export default React.memo(MemoComponent)