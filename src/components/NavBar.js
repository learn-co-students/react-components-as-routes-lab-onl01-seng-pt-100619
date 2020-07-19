import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink
          to="/"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/movies"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Movies</NavLink>
        <NavLink
          to="/directors"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Directors</NavLink>
        <NavLink
          to="/actors"
          exact
          activeStyle={{
            background: 'darkblue'
          }}
        >Actors</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
