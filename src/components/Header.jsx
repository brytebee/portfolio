import React from "react";
import img from "../assets/atsighi_bright.JPG";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const handleTwitter = () => {
  window.open("http://twitter.com/brytebee");
};

const handleGithub = () => {
  window.open("https://github.com/brytebee");
};

const handleMedium = () => {
  window.open("https://medium.com/@brytebee");
};

const handleLinkedIn = () => {
  window.open("https://linkedin.com/in/brytebee");
};

const Header = () => (
  <>
    <div className="navigate d-flex gen-padding ">
      <NavLink to="/">
        <img
          className="profile-pix"
          style={{ width: "30px", height: "30px", borderRadius: "100%" }}
          src={img}
          alt="Atsighi Bright"
        />
      </NavLink>
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
        <a onClick={handleLinkedIn}>
          {<FaLinkedin style={{ color: "#0e76a8" }} className="handle" />}
        </a>
        <a onClick={handleGithub}>
          {<FaGithub style={{ color: "#171515" }} className="handle" />}
        </a>
        <a onClick={handleMedium}>
          {<FaMedium style={{ color: "#0000cd" }} className="handle" />}
        </a>
        <a onClick={handleTwitter}>
          {<FaTwitter style={{ color: "#00acee" }} className="handle" />}
        </a>
      </div>
    </div>
    <hr />
  </>
);

export default Header;
