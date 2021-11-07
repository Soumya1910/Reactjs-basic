import React, { Component } from 'react'
import LifeCycleA_Child from './LifeCycleA_Child';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Soumya"
        }
        console.log('LifeCycleA constructor called')
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`LifeCycleA getDerivedStateFromProps called`);
        return null;
    }

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
