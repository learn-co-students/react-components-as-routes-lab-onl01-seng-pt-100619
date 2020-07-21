import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink
      to="/"
      exact
      ></NavLink>
    </div>
  );
};

export default NavBar;
