// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {
  notFocused = () => {
    console.log("Hey! Eyes on me!")
  }
  focused = () => {
    console.log("Good!")
  }

  render() {
    return(
      <button onBlur={this.notFocused} onFocus={this.focused}>Do you see me?</button>
    )
  }
}
