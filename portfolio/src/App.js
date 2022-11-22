import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/AboutMe' element = {<AboutMe />}/>
      </Routes>
    </>
  );
}

export default App;
