import React, { useState } from 'react';
import './WelcomeScreen.css';
const WelcomeScreen = ({ onStart }) => {
    const [ Name , setName] = useState() 
    
   const handleName = (e)=>{
    setName(e.target.value);
    
   }

   const handleClick=()=>{
    onStart();
    localStorage.setItem('Custome Name' , Name);
     
   }
  return (
    <div className="welcome-screen">
      <h1>Welcome to the Customer Survey!</h1>
      <div className='name-form'>
        <div className='form'> 
          <div>
      <label>Please Enter your Name</label></div>
      <div>
      <input type='text' value={Name} onChange={handleName} placeholder='Name' />
      </div>
      <div>
      <button onClick={handleClick}  >Start</button>
      </div>
      </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
