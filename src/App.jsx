import React from 'react';
import "./App.css"
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/services/Services';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
    </div>
  )
}

export default App