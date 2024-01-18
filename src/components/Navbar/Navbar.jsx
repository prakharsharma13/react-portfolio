import React from 'react';
import "./Navbar.css";
import 'boxicons';

const Navbar = () => {
  return (
    <header className='header'>
      <a href="#" className='logo'>Portfolio</a>

      <i class='bx bx-menu' id='menu-icon'></i>

      <nav className='navbar'>
        <a href="#home" >Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

export default Navbar