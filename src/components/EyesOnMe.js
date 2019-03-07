import React from 'react' ;

export default class EyesOnMe extends React.Component {
  logblur = () => {
    console.log("Hey! Eyes on me!")
  }
  logfocus = () => {
    console.log("Good!")
  }
  render() {
    return(
      <div>
        <button onFocus={this.logfocus} onBlur={this.logblur} />
      </div>
    )
  }
}
