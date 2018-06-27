// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component{
  focusEvent = () => {
    console.log('Good!');
  }

  blurEvent = () => {
    console.log('Hey! Eyes on me!');
  }
  render(){
    return(
      <button onBlur={this.blurEvent} onFocus={this.focusEvent}>Click me!</button>
    )
  }
}

export default EyesOnMe;
