import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  state = {
    persons: [
      { id: 'oeri', name: 'Jussi', age: 39 },
      { id: 'vomo', name: 'Milla', age: 38 },
      { id: 'pfaioj', name: 'Netta', age: 16 },
      { id: 'avorn', name: 'Nooa', age: 11 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // slice will create a copy of a list and stores it to the variable
    const persons = [...this.state.persons]; // same thing but using spread (...) operator
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doewsShow = this.state.showPersons;
    this.setState({ showPersons: !doewsShow }); //react merges only this value to the persons[]
  }

  render() {

    let persons = null;


    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler} />;
    }
    // one way of styling individual sections
    //let classes = ['red', 'bold'].join(' ');

    return (
      // two ways of making the click-functionality!!

      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>

    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
