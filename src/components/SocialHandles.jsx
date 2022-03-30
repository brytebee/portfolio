import React from "react";
import { FaGithub, FaTwitter, FaMedium, FaLinkedin } from "react-icons/fa";

const SocialHandles = () => {
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

  return (
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
  );
};

export default SocialHandles;
