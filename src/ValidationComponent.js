import React, { Component } from 'react';

class ValidationComponent extends React.Component {
  constructor(props){
    super(props)

  }
  render (){
    if(this.props.textLength > 5){
      return (
        <p>Text long enough</ p>
      )
    } else {
      return (
        <p>Text too short</ p>
      )
    }
  }

}

export default ValidationComponent;