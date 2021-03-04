import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
    
  }

  state = {
    persons: [
      { id: 'oeri', name: 'Jussi', age: 39 },
      { id: 'vomo', name: 'Milla', age: 38 },
      { id: 'pfaioj', name: 'Netta', age: 16 },
      { id: 'avorn', name: 'Nooa', age: 11 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // UNSAFE-this method is being removed
  // componentWillMount() {
  //   console.log('{App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
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
    console.log('[App.js] render');
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

      <WithClass classes={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length} 
          clicked={this.togglePersonsHandler}
          /> : null}
        {persons}
      </WithClass>

    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
