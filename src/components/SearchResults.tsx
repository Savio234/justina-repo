import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const SearchResults: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const { searchResults, setSearchResults } = useContext(ShopContext);

  useEffect(() => {
    if (query) {
      fetch(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => setSearchResults(data.products))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [query, setSearchResults]);

  return (
    <div>
      {searchResults ? (
        searchResults.map((product: any) => (
          <Link to="/products/:productId">
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>{product.title}</div>
              <div>Rs. {product.price}</div>
            </div>
          </Link>
        ))
      ) : (
        <div>No results found</div>
      )}
    </div>
  );
};

export default SearchResults;
