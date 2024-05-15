import React from "react";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <div id="navigation-bar">
        <header>
          <nav>
            <ul className="navlinks">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#" id="shop">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" id="about">
                  About
                </a>
              </li>
              <li>
                <a href="#" id="contact">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <a href="#" id="logo1">
                  <img src={Vector1} alt="" className="navIcons" />
                </a>
              </li>
              <li>
                <a href="#" id="logo2">
                  <img src={Vector2} alt="" className="navIcons" />
                </a>
              </li>
              <li>
                <a href="#" id="logo3">
                  <img src={Vector3} alt="" className="navIcons" />
                </a>
              </li>
              <li>
                <a href="#" id="logo4">
                  <img src={Vector4} alt="" className="navIcons" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
