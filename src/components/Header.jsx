import React from "react";
import img from "../assets/atsighi_bright.JPG";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => (
  <>
    <div className="navigate d-flex gen-padding ">
      <img
        className="profile-pix"
        style={{ width: "30px", height: "30px", borderRadius: "100%" }}
        src={img}
        alt="Atsighi Bright"
      />
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
      <div className="handles">
        <FaLinkedin className="handle" />
        <FaGithub className="handle" />
        <FaMedium className="handle" />
        <FaTwitter className="handle" />
      </div>
    </div>
    <hr />
  </>
);

export default Header;
