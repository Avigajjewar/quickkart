import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Install 'lucide-react' for icons
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useState } from "react";

const CartIcon = () => {
  const { cart } = useContext(ProductContext);
  const [totalItems, settotalItems] = useState(null);

  // Calculate total items in cart
  useEffect(() => {
    if (cart.length > 0) {
      settotalItems(cart.reduce((sum, item) => sum + item.quantity, 0));
    }
   }, [cart]);

  return (
    <Link
      to="/cart"
      className="fixed bottom-6 right-6 z-50 bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-green-700 transition"
    >
      <div className="relative  ">
        {/* Shopping Cart Icon */}
        <ShoppingCart className="   w-8 h-8" />

        {/* Cart Count Badge */}
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CartIcon;
