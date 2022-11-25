import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/AboutMe' element = {<AboutMe />}/>
        <Route path = '/Projects' element = {<Projects />}/>
      </Routes>
    </>
  );
}

export default App;
