import React from 'react'

function Column() {
    return (
        /* <div>
            <td>Name</td>
            <td>Roll</td>
        </div> */

        // If we run the above segment it throws error in console that "<div> cannot appear as a child of <tr>"
        /*<React.Fragment>
            <td>Name</td>
            <td>Roll</td>
        </React.Fragment> */

        // both the equivalent
        <>
            <td>Name</td>
            <td>Roll</td>
        </>
    )
}

export default Column
