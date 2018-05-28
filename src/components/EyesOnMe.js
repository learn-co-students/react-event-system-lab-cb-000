import React from 'react';

export default class EyesOnMe extends React.Component {
  render() {
    return(
      <div className="clubEyes">
        <button onFocus={this.focus} onBlur={this.blur}/>
      </div>
    )
  }

  focus = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }
}
