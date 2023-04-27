import React, { useState } from "react";
import { Icon } from "@material-ui/core";
import { Dehaze, Close } from "@material-ui/icons";
// import DehazeIcon from "@material-ui/icons/Dehaze";

const NavButton = () => {
  const navToggle = () => {
    document.querySelector(".aside").classList.toggle("active");
  };

  const [isLiked, setIsLiked] = useState(true);
  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <span className="navbutton" style={{ display: "none" }} onClick={navToggle}>
      <Icon onClick={handleClick} className="material-icon">
        {isLiked ? <Dehaze /> : <Close />}
      </Icon>
    </span>
  );
};

export default NavButton;
