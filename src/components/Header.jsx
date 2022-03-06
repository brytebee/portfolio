import React from "react";
import img from "../assets/atsighi_bright.JPG";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Header = () => (
  <div className="navigate d-flex gen-padding ">
    <img
      style={{ width: "50px", height: "50px", borderRadius: "100%" }}
      src={img}
      alt="Atsighi Bright"
    />
    <nav>
      <ul className="d-flex">
        <li>Home</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <div>
      <FaLinkedin />
      <FaGithub />
      <FaMedium />
      <FaTwitter />
    </div>
  </div>
);

export default Header;
