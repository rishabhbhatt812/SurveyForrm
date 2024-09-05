import React from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Survey from './components/Survey';
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom';



const App = () => {
 
   const navigate = useNavigate();
  const handleStart = () => {
     navigate('/survey');
      
  };


  return (
    
    <div className="App">
      <Routes> 
      <Route path='/survey' element={<Survey  />}/>
      <Route path='/' element={       
            <WelcomeScreen onStart={handleStart} />
        } />


      </Routes>
    </div>
    
  );
};

export default App;
