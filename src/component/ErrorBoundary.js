import React, { Component } from 'react'

/*
static getDerivedStateFromError(error) - static method is used to render a fallback UI after an error in thrown.

componentDidCatch(error, info) - is used to log the error information.

Error Boundary:
A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.

Error boundaries are React components that catch Javascript error in their child component tree, log those errors and display a fall-back UI.
A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch lifecycle methods.
The placement of the Error Boundaries also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem.
*/

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log('Error :', error);
        console.log('Info : ', info);
    }
    render() {
        if (this.state.hasError) {
            return (<h1>Something went wrong</h1>)
        }
        return this.props.children;
    }
}

export default ErrorBoundary