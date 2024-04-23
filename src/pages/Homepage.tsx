import React from "react";

import { sampleProducts } from "../data";
import Products from "./Products";
import { Link } from "react-router-dom";

const Homepage: React.FC = () => {
  return (
    <main>
      <div className="products">
        {sampleProducts.map((product) => (
          <div className="productdiv">
            <img src={product.image} alt={product.name} id="product-img" />
            <Link id="productLinks" to={"/products/" + Products}>
              <h2>{product.name}</h2>
              <h3>Rs. {product.price}</h3>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Homepage;
