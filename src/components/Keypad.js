import React from 'react';

export default class Keypad extends React.Component {
  render() {
    return(
      <div className="keypad">
        <input type="password" onKeyUp={this.enterPassword}/>
      </div>
    )
  }

  enterPassword = () => {
    console.log('Entering password...')
  }
}
