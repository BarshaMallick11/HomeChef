import React, {useState} from 'react';
import '../Style/Navbar.css';
import {Link} from 'react-router-dom';
import {FiMenu, FiX} from 'react-icons/fi';

const Navbar=()=> {
    const[isOpen, setIsOpen]=useState(false);

    const toggleMenu=()=> setIsOpen(!isOpen);
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <h2 className='logo'>
                <img src='/images/logo.png' alt='Logo'className='logo-img' />
                HomeChef</h2>
        </div>

        <div className='menu-icon' onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu/>}
        </div>
        <div className={`navbar-right ${isOpen ? 'active' : ''}`}>
            <Link to ="/home" onClick={()=> setIsOpen(false)}>Home</Link>
            <Link to="/favorites" onClick={()=> setIsOpen(false)}>Favorites</Link>
            <Link to="/profile" className="nav-link" onClick={()=> setIsOpen(false)}>Profile</Link>
            <Link to="/about" onClick={()=> setIsOpen(false)}>About us</Link>
        </div> 
    </nav>
  );
};

export default Navbar;

