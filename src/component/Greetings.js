import React, { Component } from 'react'

class Greetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    
    // approach 1 : if/else
    /*render() {
        if(this.state.isLoggedIn){
            return <div>Welcome Soumya</div>
        }
        else{
            return <div>Welcome Guest</div>
        }
    } */

    // approach 2: Element variable
    /*render() {
        let message;
        if (this.state.isLoggedIn)
            message = <div>Welcome Soumya</div>
        else
            message = <div>Welcome Guest</div>

        return <div>{message}</div>
    }*/

    // approach 3: Ternary conditinal operator
    /*render(){
        return this.state.isLoggedIn ? <div>Welcome Soumya</div> : <div>Welcome Guest</div>
    }*/

    // approach 4: short circuit operator
    render(){
        return this.state.isLoggedIn && <div>Welcome Soumya</div> /** it will return once condition is satisfied */
    }
}

export default Greetings
