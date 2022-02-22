import React, { Component, PureComponent } from 'react'
import MemoComponent from './MemoComponent'
import PureComponentExample from './PureComponentExample'
import RegularComponent from './RegularComponent'

/*
    shortcut: rce
*/

//class ParentComponentWithPureCompExample extends PureComponent {  // if parent method doesn't re-render then child method will also not re-render
class ParentComponentWithPureCompExample extends Component {

    /*
        shortcut: rconst
    */
    constructor(props) {
        super(props)

        this.state = {
            name: "Soumya"
        }
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name: "Soumya" // no change in the state value
                //name : "Soumya"+new Date() // Pure component will always re-render as it changes the state value
            })
        }, 2000)
    }


    render() {
        console.log("Parent component render method.");
        return (
            <div>
                Parent Component With Pure vs Regular Component Example
                {/* <RegularComponent name={this.state.name} />
                <PureComponentExample name={this.state.name} /> */}
                <MemoComponent name={this.state.name}/>

                {/*
                    Pure component can be applied for Class Component. Similar functionality can be achieved for Functional component with React.memo()
                    
                */}
            </div>
        )
    }
}

export default ParentComponentWithPureCompExample


/*

Regular Component                                       Pure Component
--------------------------------------------------------------------------------------------------------
A regular component doesn't implement the shouldComponentUpdate() method. It always returns true by default.

A pure component on the other hand implements shouldComponentUpdate() with a shallow props and state comparison.
SC of prevState and currentState
SC of prevProps and currentProps
        if there is any difference then it will re-render the component.

*/


/*
Shallow Comparison(Sc):
--------------------------------------------------------
Primitive Datatype (Number, String)
a(sc)b returns true if both the variable value is same and of same type.

Complex Datatype(Array, Object)
a(sc)b returns true iff a & b references the same exact object.

var a = [1,2,3]
var b = [4,2,5]
var c = a;

var a_b = (a == b) // false
var a_c = (a == c) // true
*/