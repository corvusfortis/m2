import React, { useState } from "react";
import dog from "./dog.jpeg";
import "./styles.css";

const ImageComponent = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <img
      src={dog}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      className={hovered ? "active" : "image"}
      alt="dog"
    />
  );
};

export default ImageComponent;
