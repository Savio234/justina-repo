import React, { useState } from "react";
import { ProductCard } from "../shared";
import { Product } from "../types/productlist";
import { data, data2, data3 } from "../mock";

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
