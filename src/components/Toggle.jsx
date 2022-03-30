import React, { useState } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const Toggle = () => {
  const [state, setState] = useState(false);

  const handleToggle = () => {
    setState(state ? false : true);
  };

  return (
    <div>
      {state && (
        <a
          style={{ color: "purple", fontSize: "25px", paddingTop: "10px" }}
          onClick={handleToggle}
        >
          {<FaToggleOn />}
        </a>
      )}
      {!state && (
        <a
          style={{ color: "purple", fontSize: "25px", paddingTop: "10px" }}
          onClick={handleToggle}
        >
          {<FaToggleOff />}
        </a>
      )}
    </div>
  );
};

export default Toggle;
