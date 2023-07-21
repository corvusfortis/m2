import React, { useState } from "react";
import dog from "./dog.jpeg";
import "./styles.css";

const ImageComponent = () => {
  const [playAnimation, setPlayAnimation] = useState("kf-image");

  const handlePlayAnimation = () => {
    setPlayAnimation("kf-image kf-image_anim");
  };

  const handlePlayAnimationReversed = () => {
    setPlayAnimation("kf-image kf-image_anim-reverse");
  };

  return (
    <img
      src={dog}
      alt="dog"
      onMouseEnter={handlePlayAnimation}
      onMouseLeave={handlePlayAnimationReversed}
      className={playAnimation}
    />
  );
};

export default ImageComponent;
