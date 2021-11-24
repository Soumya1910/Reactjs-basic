import React from 'react'

function ReactFragment() {
    // return (
    //     <div>
    //         <h1>React Fragment demo</h1>
    //         <p>It describes the React Fragment demo component</p>
    //     </div>
    // );
    // if we inspect above element it will contain extra div tag
    /**
     * <div id="root">
     *  <div class = "App">
     *      <div>
     *          <h1>React Fragment demo</h1>
                <p>It describes the React Fragment demo component</p>
            </div>
        </div>
        </div>
     */

    // Now we will be using React-Fragment to avoid this extra div tag

    return (
        <React.Fragment>
            <h1>React Fragment demo</h1>
            <p>It describes the React Fragment demo component</p>
        </React.Fragment>
    );


}

export default ReactFragment
