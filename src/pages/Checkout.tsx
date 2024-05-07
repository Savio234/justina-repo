import React from "react";
//import meubel from './src/assets/meubel.png'
import meubel from "/src/assets/meubel.png";
import { SlArrowRight } from "react-icons/sl";
// import heroimage from "/src/assets/heroimage.png";


const Checkout: React.FC = () => {
  return (
    <>
      <div className="herobg">
        <div className="hero">
          <img src={meubel} alt="meubel" />
          <h1>Checkout</h1>
          <div className="heroTexts">
            <a href="home">Home</a>
            <SlArrowRight />
            <a href="shop">Checkout</a>
          </div>
        </div>
      </div>
      <div>
        <h1>Billing Details</h1>
        <form action="">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Last Name</label>
            <input type="text" name="" id="" />
          </div>
          <label htmlFor="">Company Name(Optional)</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Street Address</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Town / City</label>
                  <input type="text" name="" id="" />
          <label htmlFor="">Zip Code</label>
                  <input type="text" name="" id="" />
          <label htmlFor="">Phone</label>
                  <input type="tel" name="" id="" />
          <label htmlFor="">Email address</label>
                  <input type="email" name="" id="" />
                  <input type="text" name="" id="" placeholder="Additional Information" />

                  
        </form>
      </div>
    </>
  );
};

export default Checkout;
