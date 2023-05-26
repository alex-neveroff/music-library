import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <NavLink className="menu" to="/">
          <p className="logo">Heavy and Power Metal</p>
        </NavLink>
        <NavLink className="menu" to="artists">
          Artists
        </NavLink>
        <NavLink className="menu" to="/collection">
          Collection
        </NavLink>
        <NavLink className="menu" to="/listened">
          Listened
        </NavLink>
        <NavLink className="menu" to="/pending">
          Pending
        </NavLink>
        <NavLink className="menu" to="/authorization">
          Authorization
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
