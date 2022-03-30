import React from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/atsighi_bright.JPG";

const ProfilePix = () => (
  <NavLink to="/">
    <img
      className="profile-pix"
      style={{ width: "30px", height: "30px", borderRadius: "100%" }}
      src={img}
      alt="Atsighi Bright"
    />
  </NavLink>
);

export default ProfilePix;
