import React from "react";
import "./Hero.scss";
import HeroLebron from "../../Assets/Images/png/hero-lebron.png";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${HeroLebron})` }}>
      <div className="hero__description">
        <h3>
          Los Angeles <br /> Lakers Fans
        </h3>
      </div>
    </div>
  );
};

export default Hero;
