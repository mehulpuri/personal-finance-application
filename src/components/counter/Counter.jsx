import React from 'react';

function incrementCounterFunction(){
    console.log('clicked');
}

export const Counter = () => {
  return (
    <div className='Counter'>
        <span className='count'> 0</span>
        <button className='counterBtn' onClick={incrementCounterFunction}>+1</button>
    </div>
    
  )
}


