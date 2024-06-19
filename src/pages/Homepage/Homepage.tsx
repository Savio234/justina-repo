import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setProducts } from "../../redux/actions/productActions";
import SearchResults from "../../components/SearchResults";
import { ShopContext } from "../../context/ShopContext";

//import { productReducer } from "../redux/reducers/productReducer";
// import ProductDetail from "./Products";

const Homepage: React.FC = () => {
  const [activePage, setActivePage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [productsPerPage] = useState<number>(16);
  const [displayedProducts, setDisplayedProducts] = useState<any[]>([]);
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const { searchResults }: any = useContext(ShopContext);
  const api = "https://dummyjson.com/products";
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let fetchedProducts = data.products;
        // Repeat some products to ensure enough for pagination
        const repetitionsNeeded = Math.ceil(
          productsPerPage / fetchedProducts.length
        );

        console.log(data);
        dispatch(setProducts(data));
        fetchedProducts = Array.from(
          { length: repetitionsNeeded },
          () => fetchedProducts
        ).flat();
        setAllProducts(fetchedProducts);
        setTotalPages(Math.ceil(fetchedProducts.length / productsPerPage));
        setDisplayedProducts(fetchedProducts.slice(0, productsPerPage));
      });
    console.log("Products: ", products);
  }, []);

  const handleNextPage = () => {
    if (activePage < totalPages) {
      const nextPage = activePage + 1;
      setActivePage(nextPage);
      const startIndex = (nextPage - 1) * productsPerPage;
      const nextPageProducts = allProducts.slice(
        startIndex,
        startIndex + productsPerPage
      );
      setDisplayedProducts(nextPageProducts);
    }
  };

  const handlePreviousPage = () => {
    if (activePage > 1) {
      const previousPage = activePage - 1;
      setActivePage(previousPage);
      const startIndex = (previousPage - 1) * productsPerPage;
      const previousPageProducts = allProducts.slice(
        startIndex,
        startIndex + productsPerPage
      );
      setDisplayedProducts(previousPageProducts);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setActivePage(pageNumber);
    const startIndex = (pageNumber - 1) * productsPerPage;
    const pageProducts = allProducts.slice(
      startIndex,
      startIndex + productsPerPage
    );
    setDisplayedProducts(pageProducts);
  };

  return (
    <>
      <main>
        {!searchResults ? (
          <div className="products" id="allProducts">
            {displayedProducts.map((product, index) => (
              <div className="productdiv" key={index}>
                <Link to={`/products/${product.id}`}>
                  <div className="img-container">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="product-img"
                    />
                  </div>
                  <div id="productLinks">
                    <h4 className="productTitle">{product.title}</h4>
                    <h3 className="productPrice">Rs. {product.price}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <SearchResults />
        )}
      </main>

      <div className="numbers">
        {[...Array(totalPages).keys()].map((pageNumber) => (
          <button
            key={pageNumber + 1}
            className="numberDesign"
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            {pageNumber + 1}
          </button>
        ))}
        {/* <button className="numberDesign" onClick={() => handlePageClick(3)}>
          3
        </button> */}
        <button
          className="numberDesign"
          disabled={activePage === 1}
          onClick={handlePreviousPage}
        >
          Previous
        </button>
        <button
          className="numberDesign"
          disabled={activePage === totalPages}
          onClick={handleNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Homepage;
