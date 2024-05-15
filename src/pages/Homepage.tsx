import React, { useState, useEffect } from "react";
import { ProductCard } from "../shared";
import { Product } from "../types/productlist";
import { data, data2, data3 } from "../mock";
import { Link } from "react-router-dom";
//import Products from "./Products";

const Homepage: React.FC = () => {
  const [activeProducts, setActiveProducts] = useState<number>(1);
  // const [sampleProducts, setSampleProducts] = useState<any[]>([]);
  const api = "https://dummyjson.com/products";
  console.log(sampleProducts)
  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      // .then((data) => setSampleProducts(data.products));
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

  let productList = null;
  if (activeProducts === 1) {
    productList = (
      <div id="products">
        {data.map((product: Product, index: number) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    );
  } else if (activeProducts === 2) {
    productList = (
      <div id="products2">
        {data2.map((product: Product, index: number) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    );
  } else if (activeProducts === 3) {
    productList = (
      <div id="products3">
        {data3.map((product: Product, index: number) => (
          // <div className="productdiv" key={index}>
          //   <img src={product.image} alt={product.name} id="product-img" />
          //   <Link id="productLinks" to={"/products/" + Products}>
          //     <h4>{product.name}</h4>
          //     <h3>Rs. {product.price}</h3>
          //   </Link>
          // </div>
          <ProductCard key={index} {...product} />
        ))}
      </div>
    );
  }

  return (
    <>
      <main>
        {sampleProducts.length > 0 && (
          <div className={`products${activeProducts}`}>
            {sampleProducts.map((product) => (
              <div className="productdiv" key={product.id}>
                <img src={product.images[0]} alt={product.title} className="product-img" />
                <Link id="productLinks" to={`/products/${product.id}`}>
                  <h4>{product.title}</h4>
                  <h3>Rs. {product.price}</h3>
                </Link>
              </div>
              // <ProductCard key={index} {...product} />
            ))}
          </div>
        )}
      </main>
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
