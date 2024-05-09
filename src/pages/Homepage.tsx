import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import Products from "./Products";

const Homepage: React.FC = () => {
  const [activeProducts, setActiveProducts] = useState<number>(1);
  const [, setPreviousProducts] = useState<number>(-1)
  const [sampleProducts, setSampleProducts] = useState<any[]>([]);
  const api = "https://dummyjson.com/products";
console.log(sampleProducts)
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setSampleProducts(data.products));
  }, []);

  const handleNextClick = () => {
    setActiveProducts((prevActiveProducts) => {
      if (prevActiveProducts === 3) {
        return 1;
      } else {
        return prevActiveProducts + 1;
      }
    });
  };

  const handlePreviousClick = () => {
    setPreviousProducts((prevPreviousProducts) => {
      if (prevPreviousProducts === 1) {
        return 3;
      }
      else {
        return prevPreviousProducts - 1; 
      }
    })
  }

  return (
    <>
      <main>
        {sampleProducts.length > 0 && (
          <div className={`products${activeProducts}`} id="allProducts">
            {sampleProducts.map((product) => (
              <div className="productdiv" key={product.id}>
                <div className="img-container">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="product-img"
                  />
                </div>
                <Link id="productLinks" to={`/products/${product.id}`}>
                  <h4>{product.title}</h4>
                  <h3>Rs. {product.price}</h3>
                </Link>
              </div>
            ))}
          </div>
        )}
      </main>
      <div className="numbers">
        <button
          className="numberDesign"
          onClick={() => (setActiveProducts(1), setPreviousProducts(1))}
        >
          1
        </button>
        <button
          className="numberDesign"
          onClick={() => (setActiveProducts(2), setPreviousProducts(2))}
        >
          2
        </button>
        <button
          className="numberDesign"
          onClick={() => (setActiveProducts(3), setPreviousProducts(3))}
        >
          3
        </button>
        <button className="numberDesign" onClick={handlePreviousClick}>
          Previous
        </button>
        <button className="numberDesign" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default Homepage;
