import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigations">
    <ul className="d-flex">
      <li className="li-nav">
        {' '}
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="li-nav">
        {' '}
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li className="li-nav">
        {' '}
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="li-nav">
        {' '}
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="li-nav">
        {' '}
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
