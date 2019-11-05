// Code EyesOnMe Component Here
import React from 'react';
export default class EyesOnMe extends React.Component {

  hey = () => {
    console.log('Hey! Eyes on me!');
  }

  good = () => {
    console.log('Good!');
  }
  render(){
    return(
      <button onFocus={this.good} onBlur={this.hey}> </button>
    )
  }
}
