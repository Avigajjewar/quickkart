import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { priceConverter, ProductContext } from "../context/ProductContext";

const CartPage = ({ additems }) => {
  const { cart } = useContext(ProductContext);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const taxRate = 0.05; // 5% tax

  const convenienceCharge = 18;
  const shippingCharge = 20;

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const total = tax + convenienceCharge + shippingCharge;

  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-gray-100 p-6 max-w-4xl mx-auto  ">
      <div className="container lg:pl-52  mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        {cartItems.length !== 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-1 rounded-lg shadow mb-4 flex items-start gap-4"
                >
                  <img
                    src={item.images ? item.images[0] : item.image}
                    alt={item.title}
                    className="w-[15%] object-cover rounded"
                  />
                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">
                      {item.warrantyInformation
                        ? item.warrantyInformation
                        : item.details}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded text-sm"
                      >
                        -
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="bg-gray-200 px-3 py-1 rounded text-sm"
                      >
                        +
                      </button>
                      <span className="ml-4 text-lg font-semibold">
                        ₹
                        {Math.floor(priceConverter(item.price)) * item.quantity}
                      </span>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 text-sm mt-2"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              ))}

              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-2">
                  Subtotal ({cartItems.length} items): ₹
                  {Math.floor(priceConverter(subtotal.toFixed(2)))}
                </h3>
                <div className="text-sm flex justify-between items-center text-gray-600 gap-2">
                  <span>Tax:</span>
                  <span>₹{tax.toFixed(2)}</span>
                </div>
                <div className="text-sm flex justify-between items-center text-gray-600 gap-2">
                  <span>Convenience Charge:</span>
                  <span>₹{cart !== 0 ? convenienceCharge.toFixed(2) : 0}</span>
                </div>
                <div className="text-sm flex justify-between items-center text-gray-600 gap-2">
                  <span>Shipping Charge:</span>
                  <span>₹{cart !== 0 ? shippingCharge.toFixed(2) : 0}</span>
                </div>
                <h3 className="text-xl font-bold mt-4">
                  Total: ₹{Math.floor(priceConverter(subtotal) + total)} /-
                </h3>
                <button
                  onClick={() => additems(cartItems)}
                  className="bg-yellow-500 text-white px-6 py-2 rounded-lg mt-4"
                >
                  <Link to={"/checkout"}> Proceed to Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <h2 className="text-lg font-semibold">
              Your cart is empty.{" "}
              <Link to="/" className="text-blue-500">
                Continue Shopping
              </Link>
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
