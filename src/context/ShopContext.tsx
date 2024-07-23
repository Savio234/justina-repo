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
  cartUpdated: number; // Change to number to keep track of product additions
  addToCart: (productId: number, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  addItem: (productId: number) => void;
  deleteFromCart: (productId: number) => void;
  getDefaultCart: () => { [key: number]: number };
  getTotalCartAmount: () => number;
  getTotalItems: () => number;
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
  const [cartUpdated, setCartUpdated] = useState(0); // Initialize with 0

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
    const savedCartItems = localStorage.getItem("productData");
    if (savedCartItems) {
      setProductData(JSON.parse(savedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    localStorage.setItem("productData", JSON.stringify(productData));
  }, [productData]);

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

  const addToCart = (productId: number, quantity: number) => {
    if (!cartItems[productId]) {
      setCartItems((prevCart) => ({
        ...prevCart,
        [productId]: quantity,
      }));
      setCartUpdated((prev) => prev + 1);
    } else {
      setCartItems((prevCart) => ({
        ...prevCart,
        [productId]: prevCart[productId] + quantity,
      }));
    }
  };


// const addToCart = () => {
// 		const productData = { ...data, cartProductQuantity: 1 };

// 		setCart((prevCart: any[]) => {
// 			const itemIndex = prevCart.findIndex((item: any) => item.id === data.id);
// 			if (itemIndex !== -1) {
// 				// If the item is already in the cart, create a new array with the updated item
// 				toast.success(One more ${productData.name} has been added to cart);
// 				return [
// 					...prevCart.slice(0, itemIndex),
// 					{
// 						...prevCart[itemIndex],
// 						cartProductQuantity: prevCart[itemIndex].cartProductQuantity + 1,
// 					},
// 					...prevCart.slice(itemIndex + 1),
// 				];
// 			} else {
// 				// If the item is not in the cart, create a new array with the added item
// 				toast.success(${productData.name} was added to cart)
// 				return [...prevCart, productData];
// 			}
// 		});
// 	};



  const removeFromCart = (productId: number) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [productId]: Math.max((prevCart[productId] || 0) - 1, 0),
    }));
  };

  const addItem = (productId: number) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [productId]: Math.max((prevCart[productId] || 0) + 1, 0),
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

  const getTotalItems = () => {
    return Object.values(cartItems).reduce(
      (acc, itemCount) => acc + itemCount,
      0
    );
  };

  const contextValue: ShopContextValue = {
    productData,
    searchResults,
    cartItems,
    cartUpdated,
    addToCart,
    addItem,
    removeFromCart,
    getDefaultCart,
    getTotalCartAmount,
    getTotalItems,
    setSearchResults,
    setCartItems,
    deleteFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
