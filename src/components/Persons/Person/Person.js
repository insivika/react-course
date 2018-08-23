import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../HOC/WithClass';
import PropTypes from 'prop-types';


import './Person.css';

class Person extends Component {
  constructor(props){
    super(props)
    console.log('[Person.js] Inside Constructor', props)
    this.inputElement = React.createRef();

  }

  componentWillMount(){
    console.log('[Person.js] Inside componentWillMount() ')
  }

  componentDidMount(){
    console.log('[Person.js] inside componentDidMount')
    if(this.props.position === 0) {
      this.inputElement.current.focus()
    };
  }

  focus(){
    this.inputElement.current.focus();
  }

  render(){
    console.log('[Person.js] inside render')
    return (
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}/>
      </WithClass>
  )
  }

}

Person.propTypes = {
   click: PropTypes.func,
   name: PropTypes.string,
   age: PropTypes.number,
   changed: PropTypes.func
}

export default Person;