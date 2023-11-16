import './App.css';
import React, { useState } from 'react';
import Form from './components/Form'
import Box from './components/Box';

function App() {


  const [boxArray, setBoxArray] = useState([]);

  
  return (
    <div className="App">

      <Form boxArray={boxArray} setBoxArray={setBoxArray}></Form>
     <Box boxArray={boxArray} ></Box> 
      
    </div>
  );
}

export default App;
