import React, { useState, useContext } from "react";
import { priceConverter, ProductContext } from "../context/ProductContext";

const CheckoutPage = ({ cartItems }) => {
  // Using context to get cart items
  const [address, setAddress] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Charges
  const tax = subtotal * 0.1; // 10% tax
  const shipping = 50; // Flat shipping rate
  const convenienceFee = 30; // Flat convenience fee

  // Total
  const total = subtotal + tax + shipping + convenienceFee;

  // Handle address change
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleOrderPlacement = () => {
    alert("Order placed successfully!");
    console.log("Order Details:", { address, cartItems, paymentMethod, total });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Checkout </h1>

      {/* Address Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={address.name}
            onChange={handleAddressChange}
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={address.phone}
            onChange={handleAddressChange}
            className="p-3 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={address.street}
            onChange={handleAddressChange}
            className="p-3 border border-gray-300 rounded"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleAddressChange}
              className="p-3 border border-gray-300 rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleAddressChange}
              className="p-3 border border-gray-300 rounded"
            />
          </div>
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={address.zip}
            onChange={handleAddressChange}
            className="p-3 border border-gray-300 rounded"
          />
        </form>
      </div>

      {/* Cart Items */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-3">Item</th>
              <th className="text-center p-3">Price</th>
              <th className="text-center p-3">Quantity</th>
              <th className="text-right p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-t text-sm">
                <td className="p-3">{item.title}</td>
                <td className="text-center p-1">
                  ₹ {Math.floor(priceConverter(item.price))}/-
                </td>
                <td className="text-center p-1">{item.quantity}</td>
                <td className="text-right p-1">
                  ₹ {Math.floor(priceConverter(item.price * item.quantity))}/-
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Charges */}
      <div className="mb-8 text-right">
        <p className="text-gray-600">
          Subtotal: ₹{Math.floor(subtotal.toFixed(2))}
        </p>
        <p className="text-gray-600">Tax (10%): ₹{tax.toFixed(2)}</p>
        <p className="text-gray-600">Shipping: ₹{shipping.toFixed(2)}</p>
        <p className="text-gray-600">
          Convenience Fee: ₹{convenienceFee.toFixed(2)}
        </p>
        <h3 className="font-semibold text-lg mt-2">
          Total: ₹{Math.floor(priceConverter(subtotal) + total).toFixed(2)}/-
        </h3>
      </div>

      {/* Payment Method */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="p-3 border border-gray-300 rounded w-full"
        >
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI</option>
          <option value="Net Banking">Net Banking</option>
          <option value="Cash on Delivery">Cash on Delivery</option>
        </select>
      </div>

      {/* Place Order Button */}
      <a href="/">
        <button
          onClick={() => {
            handleOrderPlacement();
          }}
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </a>
    </div>
  );
};

export default CheckoutPage;
