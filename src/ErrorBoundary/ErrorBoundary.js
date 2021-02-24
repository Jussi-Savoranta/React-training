import ThenPromise from "promise";
import React, { Component } from "react";

// This is a way to handle errors when you know that some of your app might fail.
// It is not needed if you use "normal" React code. If you get any errors ThenPromise,
// there's something wrong with the code.
// Use this when for example you have some element that might not migrate to your app 
// or you have remote data that might not always be on the use or something like that.

class ErrorBoundary extends Component {
state = {
    hasError: false,
    errorMessage: ''
}

componentDidCatch = (error, info) => {
    this.setState({hasError: true, errorMessage: error});
}

    render() {
        if (this.state.hasError) {
            // in development mode you don't see this, just when you ship it to real server
             return <h1>{this.state.errorMessage}</h1>
        } else {
            // this returns anything we wrap inside this error boundary
            return this.props.children;
        }


    }
}

export default ErrorBoundary;