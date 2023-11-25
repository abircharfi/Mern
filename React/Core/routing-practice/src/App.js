import { Link, Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home';
import Hello from './components/Hello';
import Number from './components/Number';
import Color from './components/Color';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:number' element={<Number />} />
          <Route path='/:word' element ={<Hello/>}/>
          <Route path='/:word/:color1/:color2' element={<Color/>}/>
        </Routes>


      </BrowserRouter>

    </div>
  );
}

export default App;
