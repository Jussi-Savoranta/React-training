import React, { Component, Fragment } from 'react';

import Aux from '../../../hoc/Auxiliary';
import classes from './Person.css';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            // <Reac.Fragment> if you didn't import Fragment from React package
            <Fragment> 
                < p onClick={this.props.click} > I'm a {this.props.name} and I am {this.props.age} years old! {this.props.children}</p>
                < p > {this.props.children}</p >
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment>
            
        );
    }
}

export default Person;