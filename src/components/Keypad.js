// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

  handlePasswordInput = () => console.log('Entering password...');

  render() {
    return(
      <div>
        <input type="password" onKeyUp={this.handlePasswordInput} />
      </div>
    )
  }
}

export default Keypad;
