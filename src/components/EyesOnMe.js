// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component{
  blurred=()=> {console.log('Hey! Eyes on me!')}
  focused=()=> {console.log('Good!')}

  render(){
    return(
      <div>
        <button onBlur= {this.blurred}
        onFocus={this.focused}> </button>
      </div>
    )
  }
}
