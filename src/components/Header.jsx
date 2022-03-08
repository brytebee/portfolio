import React from "react";
import Toggle from "./Toggle";
import Navigation from "./Navigation";
import SocialHandles from "./SocialHandles";
import ProfilePix from "./ProfilePix";
import Hamburger from "./Hamburger";

const Header = () => (
  <>
    <div className="navigate d-flex gen-padding nav-desktop">
      <ProfilePix />
      <Toggle />
      <Navigation />
      <SocialHandles />
    </div>
  </>
);

export default Header;
