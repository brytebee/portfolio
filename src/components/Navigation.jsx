import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav className="navigations">
    <ul className="d-flex">
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
