import React from "react";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
//import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div id="navigation-bar">
        <header>
          <nav>
            <ul className="navlinks">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop" id="shop">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" id="about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" id="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <NavLink to="" id="logo1">
                  <img src={Vector1} alt="" className="navIcons" />
                </NavLink>
              </li>
              <li>
                <NavLink to="" id="logo2">
                  <img src={Vector2} alt="" className="navIcons" />
                </NavLink>
              </li>
              <li>
                <NavLink to="" id="logo3">
                  <img src={Vector3} alt="" className="navIcons" />
                </NavLink>
              </li>
              <li>
                <NavLink to="" id="logo4">
                  <img src={Vector4} alt="" className="navIcons" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
