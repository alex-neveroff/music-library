import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderStyled } from './Header.styled';

const Header = () => {
  return (
    <HeaderStyled>
      <p className="logo">
        Rock & Metal
        <br />
        Library
      </p>
      <nav className="navigation">
        <NavLink className="menu" to="/">
          Home
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
          Log in
        </NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
