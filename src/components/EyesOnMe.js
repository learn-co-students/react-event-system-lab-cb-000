// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  focused = () => {
    console.log("Good!");
  }
  
  blurred = () => {
    console.log("Hey! Eyes on me!");
  }
  
  render() {
    return (
      <button onFocus={this.focused} onBlur={this.blurred}></button>
      )
  }
}