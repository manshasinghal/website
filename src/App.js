import './App.css';
import React from 'react';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import Service from './components/Services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio'
import Career from './components/Career';
function App() {

  return (
    
    <BrowserRouter>
      <div className='overflow-x-hidden overflow-y-hidden'>
    <div>
  </div>
    <Routes>
    <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/career' element={<Career/>} />

          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Service/>} />          
         
      </Routes>
    </div>
       </BrowserRouter>
  );
}

export default App;
