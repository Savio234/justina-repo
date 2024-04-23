import React from 'react';
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar: React.FC = () => {
  return (
    <div id="navigation-bar">
        <nav>
            <ul>
                <li>
                  {/* eslint-disable*/}
                  <a href="#" id="home">Home</a>
                </li>
                <li><a href="#" id="shop">Shop</a></li>
                <li><a href="#" id="about">About</a></li>
                <li><a href="#" id="contact">Contact</a></li>

                <li><a href="#" id="logo1"><CgProfile /></a></li>
                <li><a href="#" id="logo2"><CiSearch /></a></li>
                <li><a href="#" id="logo3"><CiHeart /></a></li>
                <li><a href="#" id="logo4"><FaCartPlus /></a></li>
            </ul>
        </nav>
    </div>
  )
}



export default Navbar;