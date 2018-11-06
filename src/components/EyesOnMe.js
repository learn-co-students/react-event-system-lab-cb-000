// Code Keypad Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  buttonFocus = () => console.log("Good!")
  buttonBlur = () => console.log("Hey! Eyes on me!")

  render() {
    return (
      <div>
        <button onFocus={this.buttonFocus} onBlur={this.buttonBlur} />
      </div>
    );
  }

}

export default EyesOnMe;
