import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className="navbar">
      <NavLink to="/" style={link}>Home</NavLink> 
      <NavLink exact to="/movies" style={link}>Movies</NavLink> 
      <NavLink exact to="/actors" style={link}>Actors</NavLink> 
      <NavLink exact to="/directors" style={link}>Directors</NavLink>
    </div>
  );
};

export default NavBar;
