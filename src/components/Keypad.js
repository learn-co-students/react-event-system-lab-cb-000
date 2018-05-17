// Code Keypad Component Here
import React from 'react';

export default class Keypad extends React.Component{
  enterPass = ()=> {console.log('Entering password...')}
  render(){
    return(
      <div>
        <input type='password' onKeyUp={this.enterPass} />
      </div>
    )
  }
}
