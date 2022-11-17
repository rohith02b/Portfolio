import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Contact/>
    </>
  );
}

export default App;
