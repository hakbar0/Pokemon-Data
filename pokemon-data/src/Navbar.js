import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-inverse bg-inverse">
        <NavLink exact to='/'>Pokedex/</NavLink>
        <NavLink to='/Game'>Game</NavLink>
      </nav>
    </div>
  )
}

export default Navbar;