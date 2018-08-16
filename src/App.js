import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ValidationComponent from './ValidationComponent';


class App extends Component {

  state = {
    persons: [
      {id: 'efse1', name: 'Max', age: 28},
      {id: 'vses2', name: 'Manue', age: 29},
      {id: 'dscc3', name: 'Stephanie', age: 26}
    ],
    userInputCounter: 0
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex  = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person

    this.setState( {persons: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  userInputHandler(event) {
    this.setState({userInputCounter: event.target.value.length})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons = null;

    if( this.state.showPersons ) {
      persons = (
        <div>
        {this.state.persons.map((person, index) => {
          return <Person
          click={() => this.deletePersonHandler(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.nameChangedHandler(event, person.id)}/>
        })}
        </div>
      );
      style.backgroundColor = 'red';

    }

    var assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push( classes.red )
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push( classes.bold )
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App!</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <input onChange={(event) => this.userInputHandler(event)}/>
        <p>{this.state.userInputCounter}</p>
        <ValidationComponent textLength={this.state.userInputCounter}/>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
