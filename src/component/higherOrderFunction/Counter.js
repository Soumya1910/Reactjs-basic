import React from 'react';

/*
Higher Order Function (HOC)
--------------------------------------
A pattern where a function takes a component as an argument and returns a new component.

const newComponent = higherOrderComponent(originalComponent)


*/

const Counter = (WrappedComponent) => {
    class newComponent extends React.Component {

        constructor(props) {
            super(props)

            this.state = {
                counter: 0
            }
        }

        counterHandler = () => {
            this.setState({ counter: this.state.counter + 1 });
        }

        render() {
            return <WrappedComponent 
                    counter={this.state.counter} 
                    counterFunction={this.counterHandler} 
                    {... this.props}
                    />
        }

    }

    return newComponent;
}

export default Counter;