import React from 'react'

class KeyPad extends React.Component {
  keyedup = () => console.log('Entering password...')
  
  render() {
    return(
        <input type="password" onKeyUp={this.keyedup}/>
    );
  }
}

export default KeyPad;