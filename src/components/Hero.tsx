import React from "react";
import meubel from "/src/assets/meubel.png";
import { SlArrowRight } from "react-icons/sl";

const Hero: React.FC = () => {
  return (
    <>
      <div className="herobg">
        <div className="hero">
          <img src={meubel} alt="meubel" />
          <h1>Shop</h1>
          <div className="heroTexts">
            <a href="home">Home</a>
            <SlArrowRight   />
            <a href="shop">Shop</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
