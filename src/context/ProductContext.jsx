import React, { createContext, useState, useEffect } from "react";

// Create the Product Context
export const ProductContext = createContext();
// ==========================================================================================================
export function priceConverter(price) {
  return price * 86.77;
}
// ================================================================================================================
// Product Provider Component
export const ProductProvider = ({ children }) => {
  const [products, setproducts] = useState([]);
  const [groceries, setgroceries] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [cart, setcartItems] = useState([]);
 
  // =======================================================================================================================================

  // API endpoints
  const getSearchResult = async () => {
    try {
      const phones = await fetch(
        `https://dummyjson.com/products/category/smartphones`
      );
      const groceries = await fetch(
        `https://dummyjson.com/products/category/groceries`
      );
      const data1 = await phones.json();
      const data2 = await groceries.json();
      setproducts(data1.products);
      setgroceries(data2.products);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  // ==============================================================================================================================================

  const addtocart = (prd) => {
    prd.quantity = 1;
    setcartItems((prev) => [...prev, prd]);
  };

  // =====================================================================================================================================================

  useEffect(() => {
    getSearchResult();
  }, []);
  // ========================================================================================================================================================
  const contextValue = {
    addtocart,
    products,
    groceries,
    loading,
    error,
    cart,
  };
  // ======================================================================================================================================================
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
