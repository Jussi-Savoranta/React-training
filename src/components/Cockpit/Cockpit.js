import React, {useEffect} from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // you can use this like componentDidMount+componentDidUpdate in one method
        // for http request and other stuff

        // timeout to mimic http request
        const timer = setTimeout(() => {
            alert('Saved data to cloud!');
        }, 2000);
        return () => {
            // clearing the timeout at page load
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []) 
    // useEffect runs every cycle that it gets rendered (ofc), 
    // second argument specifies to run only when that defined thing changes (like props.persons) 
    // if the [] is empty it will update only for the first cycle

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
            // this useEffect runs in every cycle, so this cleanup method can be used as often
            // and even if the component is not removed
        }
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working?</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
          </button>
        </div>
    );
};

export default cockpit;