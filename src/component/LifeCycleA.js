import React, { Component } from 'react'
import LifeCycleA_Child from './LifeCycleA_Child';

class LifeCycleA extends Component {

    /*
    Mounting Functions :
    ---------------------------------------------------------
    Function Name               Order
    constructor(props)           1
    getDerivedStateFromProps(props, state)      2
    render                      3
    componentDidMount()         4
    */


    /*
    A special function that will be called whenever a new component is created.
    Use: 1. Initialize state
         2. Binding the event handlers.
    
    Precaustion: Never use any side effects like HTTP Requests

    super(props) --- first statement
    directly overwrite by this.state within constructor. In Other place, we should use setState().
    */
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Soumya"
        }
        console.log('LifeCycleA constructor called')
    }

    /*
    When the state of the component depends on the changes in props over the time.
    As it's a static method, this method can't have this keyword. So this.setState() method can't be called.
    Instead you need to return an object that represents new state of the component.
    
    Precaustion: Never use any side effects like HTTP Requests
    */
    static getDerivedStateFromProps(props, state) {
        console.log(`LifeCycleA getDerivedStateFromProps called`);
        return null;
    }

    /*
     Invoked immediately after a component and all its children components have been rendered to the DOM.
     Use: Cause side effects e.g. Interact with the DOM or perform any ajax calls to load data.

    */
    componentDidMount(){
        console.log(`LifeCycleA componentDidMount called`);
    }

    shouldComponentUpdate(){
        console.log(`LifeCycleA shouldComponentUpdate method called`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`LifeCycleA getSnapshotBeforeUpdate called`);
        return null;
    }

    componentDidUpdate(){
        console.log(`LifeCycleA componentDidUpdate called`);
    }

    changeState = ()=> {
        this.setState({
            name : "state is updated"
        });
    }
    
    /*
    Only required method in a class component.
    In this method, we simply read props and state and return JSX.
    It's a Pure function.
    Precaution: Don't change any state or interact with DOM or make any ajax calls.
    As it contains the children components, children components lifecycle methods are also executed.
    */
    render() {
        console.log(`LifeCycleA render method is called`);
        return (
            <div>
               <div>LifeCycleA called</div> 
               <LifeCycleA_Child />
               <button onClick= {this.changeState}>Change State</button>
            </div>
        )
    }
}

export default LifeCycleA
