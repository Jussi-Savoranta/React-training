import React from 'react';

import classes from './Person.css';

// no need for props becaus the styled.div already returns React compnent


const person = (props) => {
    //this was for the Radium
    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    return (
        // <div className="Person" style={style}>
        <div className={classes.Person}>
            < p onClick={props.click} > I'm a {props.name} and I am {props.age} years old! {props.children}</p>
            < p > {props.children}</p >
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

}

export default person;