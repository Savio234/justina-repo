import React, { useState } from "react";
import Vector1 from "../assets/Vector1.png";
import Vector2 from "../assets/Vector2.png";
import Vector3 from "../assets/Vector3.png";
import Vector4 from "../assets/Vector4.png";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search"; // Import the Search component

const Navbar: React.FC = () => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const MenuIcon = styled.div`
    display: none;

    @media (max-width: 480px) {
      display: block;
      cursor: pointer;
    }
  `;

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSearchResults(data.products);
      setLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  const handleSearchIconClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  return (
    <>
      <div id="navigation-bar">
        <header>
          <nav className="navbar-container">
            <div className="navFlex">
              <div>
                <MenuIcon onClick={() => setIsOpen(!isOpen)}>
                  <div>☰</div>
                </MenuIcon>
                {isOpen && (
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
                )}
              </div>
              <div className="navBlock">
                <ul className="icons">
                  <li>
                    <NavLink to="/" id="logo1">
                      <img src={Vector1} alt="Logo" className="navIcons" />
                    </NavLink>
                  </li>
                  <li>
                    <div id="logo2" onClick={handleSearchIconClick}>
                      <img src={Vector2} alt="Search" className="navIcons" />
                    </div>
                    {isSearchClicked && <Search onSearch={handleSearch} />}
                  </li>
                  <li>
                    <NavLink to="/" id="logo3">
                      <img src={Vector3} alt="Logo" className="navIcons" />
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" id="logo4">
                      <img src={Vector4} alt="Logo" className="navIcons" />
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
      {/* Display search results */}
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        <div className="searchResults">
          {searchResults.map((product: any, index: number) => (
            <div key={index}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="productImage"
              />
              <div>{product.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
