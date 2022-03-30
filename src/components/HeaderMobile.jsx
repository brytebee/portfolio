import React from "react";
import Toggle from "./Toggle";
import ProfilePix from "./ProfilePix";
import Hamburger from "./Hamburger";

const HeaderMobile = () => (
  <>
    <div className="navigate d-flex gen-padding nav-mobile">
      <ProfilePix />
      <Toggle />
      <Hamburger />
    </div>
  </>
);

export default HeaderMobile;
