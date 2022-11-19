import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
      <Home />
    </>
  );
}

export default App;
