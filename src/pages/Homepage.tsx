import React, { useState } from "react";
import { Link } from "react-router-dom";
import { sampleProducts } from "../data";
import { sampleProducts2 } from "../data2";
import { sampleProducts3 } from "../data3";
import Products from "./Products";

const Homepage: React.FC = () => {
  const [activeProducts, setActiveProducts] = useState<number>(1);

  const handleNextClick = () => {
    setActiveProducts((prevActiveProducts) => {
      if (prevActiveProducts === 3) {
        return 1;
      } else {
        return prevActiveProducts + 1;
      }
    });
  };

  let productList = null;
  if (activeProducts === 1) {
    productList = (
      <div id="products">
        {sampleProducts.map((product, index) => (
          <div className="productdiv" key={index}>
            <img src={product.image} alt={product.name} id="product-img" />
            <Link id="productLinks" to={"/products/" + Products}>
              <h4>{product.name}</h4>
              <h3>Rs. {product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  } else if (activeProducts === 2) {
    productList = (
      <div id="products2">
        {sampleProducts2.map((product, index) => (
          <div className="productdiv" key={index}>
            <img src={product.image} alt={product.name} id="product-img" />
            <Link id="productLinks" to={"/products/" + Products}>
              <h4>{product.name}</h4>
              <h3>Rs. {product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  } else if (activeProducts === 3) {
    productList = (
      <div id="products3">
        {sampleProducts3.map((product, index) => (
          <div className="productdiv" key={index}>
            <img src={product.image} alt={product.name} id="product-img" />
            <Link id="productLinks" to={"/products/" + Products}>
              <h4>{product.name}</h4>
              <h3>Rs. {product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      <main>{productList}</main>
      <div className="numbers">
        <button className="numberDesign" onClick={() => setActiveProducts(1)}>
          1
        </button>
        <button className="numberDesign" onClick={() => setActiveProducts(2)}>
          2
        </button>
        <button className="numberDesign" onClick={() => setActiveProducts(3)}>
          3
        </button>
        <button className="numberDesign" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default Homepage;
