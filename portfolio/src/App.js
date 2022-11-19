import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Routes , Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home />}/>
      </Routes>
    </>
  );
}

export default App;
