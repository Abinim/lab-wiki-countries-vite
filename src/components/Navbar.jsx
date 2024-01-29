// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          WikiCountries
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
