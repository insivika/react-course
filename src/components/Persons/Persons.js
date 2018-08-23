import React, { PureComponent} from 'react'
import Person from './Person/Person'
import { ENGINE_METHOD_DIGESTS } from 'constants';


class Persons extends PureComponent {

  constructor(props){
    super(props)
    console.log('[Persons.js] Inside Constructor', props)

  }

  componentWillMount(){
    console.log('[Persons.js] Inside componentWillMount() ')
  }

  componentDidMount(){
    console.log('[Persons.js] inside componentDidMount')
  }

  componentWillReceiveProps( nextProps ){
    console.log('[UPDATE Person.js] inside componentWillReceiveProps')
  }

  // shouldComponentUpdate( nextProps, nextState ){
  //   console.log('[UPDATE Person.js] inside shouldComponentUpdate', nextProps, nextState)
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate( nextProps, nextState ){
    console.log('[UPDATE Person.js] inside componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate( ){
    console.log('[UPDATE Person.js] inside componentDidUpdate')
  }

    render(){
      console.log('[Persons.js] inside render')
      return this.props.persons.map((person, index) => {
        return <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => this.props.changed(event, person.id)}/>
      });
    }
}

export default Persons;