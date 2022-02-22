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
    Updating Functions : 
    --------------------------------------------------------
    Function Name               Order
    getDerivedStateFromProps(props, state)      1
    shouldComponentUpdate(nextProps, nextState)     2
    render                      3
    getSnapshotBeforeUpdate(prevProps, prevState)   4
    componentDidUpdate(prevProps, prevState, snapShot)            5

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

    Method is called every time a component is re-rendered.
    
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

    /*
    Dictates if the component should re-render or not.
    By default, whenever there is a change in props or state, this method is being called. It can prevent by returning false.
    This is basically used for performance optimization.

    Precaustion: 1. Never use any side effects like HTTP Requests
                2. Calling the setState()
    */
    shouldComponentUpdate(){
        console.log(`LifeCycleA shouldComponentUpdate method called`);
        return true;
    }

    /*
    It accepts the prevProps and prevState and called before the changes from the virtual DOM to reflect to the DOM.
    Capture some information from the DOM like when user scrolls, it captures the position.
    Method will either return null or a value. Returned value will be passed as the third parameter of the componentDidUpdate() method.
    */
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log(`LifeCycleA getSnapshotBeforeUpdate called`);
        return null;
    }

    /*
    Called after the render is finished in the re-render cycles.
    It's called only once in each re-render cycle.
    Caused side effects i.e. Ajax call. Before calling you can compare prevProps and prevState and decide if it's required to call or not.
    */
    componentDidUpdate(prevProps, prevState, snapShot){
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
