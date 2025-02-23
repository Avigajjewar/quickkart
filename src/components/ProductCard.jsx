import React from "react";
import { categories } from "../context/cards";

const ProductCart = () => {
  return (
    <div className="p-4 rounded-2xl ">
      {/* Header */}
      <div className=" rounded-sm   mb-6">
        <img src="src\assets\main.webp" alt="" />
      </div>

      {/* Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-100 rounded-md text-center">
          <h3 className="font-semibold">Pharmacy at your doorstep!</h3>
          <p className="text-sm">Cough syrups, pain relief sprays & more</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="p-4 bg-yellow-100 rounded-md text-center">
          <h3 className="font-semibold">Pet Care supplies in minutes</h3>
          <p className="text-sm">Food, treats, toys & more</p>
          <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
        <div className="p-4 bg-gray-100 rounded-md text-center">
          <h3 className="font-semibold">No time for a diaper run?</h3>
          <p className="text-sm">Get baby care essentials in minutes</p>
          <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-md">
            Order Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow rounded-md p-2"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16   mb-2"
            />
            <p className="text-sm font-medium">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
