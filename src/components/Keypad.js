import React from 'react';

class Keypad extends React.Component {

  keyedUp = () => console.log('Entering password...')

  render() {
    return (
      <input type='password' onKeyUp={this.keyedUp}/>
    )
  }
}
export default Keypad