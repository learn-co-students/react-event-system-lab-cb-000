import React from 'react';

export default class Keypad extends React.Component {
  render () {
    return (
      <div>
        <button 
	  onFocus={()=>console.log('Good!')}  
	  onBlur={()=>console.log('Hey! Eyes on me!')}  
        >
	Look here! Please.
	</button>
      </div>
    );
  }
}
