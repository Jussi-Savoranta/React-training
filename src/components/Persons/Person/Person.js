import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                < p onClick={this.props.click} > 
                I'm a {this.props.name} 
                and I am {this.props.age} 
                years old! {this.props.children}</p>
                < p > {this.props.children}</p >
                <input 
                //ref={(inputEl) => {this.inputElement = inputEl}}
                ref={this.inputElementRef}
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} />
            </Aux>
            
        );
    }
}

// this determines the type of data each input is for (string, int, function..)
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);