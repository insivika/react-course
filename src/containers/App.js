import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import ValidationComponent from '../components/ValidationComponent';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../HOC/WithClass';


class App extends PureComponent {

  constructor(props){
    super(props)
    console.log('[App.js] Inside Constructor', props)
    this.state = {
      persons: [
        {id: 'efse1', name: 'Max', age: 28},
        {id: 'vses2', name: 'Manue', age: 29},
        {id: 'dscc3', name: 'Stephanie', age: 26}
      ],
      userInputCounter: 0
    }
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount() ')
  }

  componentDidMount(){
    console.log('[App.js] inside componentDidMount')
  }

  // shouldComponentUpdate( nextProps, nextState ){
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextState.persons !== this.state.persons ||
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate( nextProps, nextState ){
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate( ){
    console.log('[UPDATE App.js] inside componentDidUpdate')
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
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;

      style.backgroundColor = 'red';

    }

    return (
      <WithClass classes = {classes.App}>

        <input onChange={(event) => this.userInputHandler(event)}/>
        <p>{this.state.userInputCounter}</p>
        <ValidationComponent textLength={this.state.userInputCounter}/>

        <button onClick={() => this.setState({showPersons: true})}>Show Persons</button>
        <Cockpit
        appTitle={this.props.title}
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePersonsHandler}/>

        {persons}

      </WithClass>
    );
  }
}

export default App;
