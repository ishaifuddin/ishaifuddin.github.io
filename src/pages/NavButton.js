import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";

const NavButton = () => {
  const navToggle = () => {
    document.querySelector(".aside").classList.toggle("active");
  };

  return (
    <span className="navbutton" style={{ display: "none" }} onClick={navToggle}>
      <DehazeIcon />
    </span>
  );
};

export default NavButton;
