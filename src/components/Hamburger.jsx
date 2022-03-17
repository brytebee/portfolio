import React, { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

const Hamburger = () => {
  const [state, setState] = useState(false);

  const handleHamburger = () => {
    setState(state ? false : true);
  };

  return (
    <div>
      {state && (
        <a
          style={{ color: "purple", fontSize: "25px", paddingTop: "10px" }}
          onClick={handleHamburger}
        >
          {<GrClose />}
        </a>
      )}
      {!state && (
        <a
          style={{ color: "purple", fontSize: "25px", paddingTop: "10px" }}
          onClick={handleHamburger}
        >
          {<GiHamburgerMenu />}
        </a>
      )}
    </div>
  );
};

export default Hamburger;
