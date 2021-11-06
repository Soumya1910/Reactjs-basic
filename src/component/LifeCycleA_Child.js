import React, { Component } from 'react'

class LifeCycleA_Child extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : "Soumya"
        }
        console.log('LifeCycleA_Child constructor called')
    }

    static getDerivedStateFromProps(props, state) {
        console.log(`LifeCycleA_Child getDerivedStateFromProps called`);
        return null;
    }

    componentDidMount(){
        console.log(`LifeCycleA_Child componentDidMount called`);
    }

    
    
    render() {
        console.log(`LifeCycleA_Child render method is called`);
        return (
            <div>
               LifeCycleA_Child called 
            </div>
        )
    }
}

export default LifeCycleA_Child
