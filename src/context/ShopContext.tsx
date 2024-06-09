import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

export interface ShopContextValue {
  productData: Product[] | null;
  searchResults: Product[] | null;
  cartItems: { [key: number]: number };
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  deleteFromCart: (productId: number) => void;
  getDefaultCart: () => { [key: number]: number };
  getTotalCartAmount: () => number;
  setSearchResults: (results: Product[] | null) => void;
  setCartItems: React.Dispatch<React.SetStateAction<{ [key: number]: number }>>;
}

export const ShopContext = createContext<ShopContextValue | undefined>(
  undefined
);

const ShopContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [productData, setProductData] = useState<Product[] | null>(null);
  const [searchResults, setSearchResults] = useState<Product[] | null>(null);
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProductData(data.products);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    // Load cart items from localStorage on mount
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
      setCartItems(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getDefaultCart = () => {
    let cart: { [key: number]: number } = {};
    if (productData) {
      productData.forEach((product) => {
        cart[product.id] = 0;
      });
    }
    return cart;
  };

  useEffect(() => {
    if (productData && Object.keys(cartItems).length === 0) {
      setCartItems(getDefaultCart());
    }
  }, [productData]);

  const addToCart = (productId: number) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [productId]: Math.max((prevCart[productId] || 0) - 1, 0),
    }));
  };

  const deleteFromCart = (productId: number) => {
    setCartItems((prevCart) => {
      const { [productId]: _, ...updatedCart } = prevCart;
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    if (!productData) return 0;

    return productData.reduce((total, product) => {
      const quantity = cartItems[product.id] || 0;
      return total + product.price * quantity;
    }, 0);
  };

  const contextValue: ShopContextValue = {
    productData,
    searchResults,
    cartItems,
    addToCart,
    removeFromCart,
    getDefaultCart,
    getTotalCartAmount,
    setSearchResults,
    setCartItems,
    deleteFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
