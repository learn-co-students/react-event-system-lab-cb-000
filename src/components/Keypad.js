// Code Keypad Component Here
import React from 'react';

class KeyPad extends React.Component{
  pwd = () => {
    console.log('Entering password...');
  }
  render(){
    return(
      <input type="password" onKeyUp={this.pwd}/>
    )
  }
}

export default KeyPad;
