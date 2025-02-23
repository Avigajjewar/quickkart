import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  const { products, groceries, addtocart } = useContext(ProductContext);

  return (
    <>
      <div className="p-3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Electronics</h3>
          <button className="text-green-600 font-semibold">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[150px] p-2 bg-white shadow rounded-lg text-center"
            >
              <Link to={`product/${product.id}`}>
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-24 h-24 mx-auto"
                  />
                  <span className="absolute top-2 left-2 bg-gray-100 text-xs px-2 py-1 rounded">
                    {Math.floor(Math.random() * 60)} min
                  </span>
                </div>
              </Link>
              <h4 className="text-sm font-medium mt-2 mb-2">{product.title}</h4>
              <p className="text-yellow-500 text-lg">
                {"★".repeat(product.rating)}{" "}
                <span className="text-gray-400">
                  {"☆".repeat(5 - product.rating)}
                </span>
              </p>
              <p className="text-base font-semibold text-gray-800 mb-2">
                Rs . {Math.floor(product.price * 85)}/-
              </p>
              <button
                onClick={() => addtocart(product)}
                className="bg-red-200 rounded-md text-zinc-900 font-bold text-sm w-full flex items-center  justify-center px-2 py-4  mt-2"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Electronics</h3>
          <button className="text-green-600 font-semibold">See All</button>
        </div>
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {groceries.map((product, index) => (
            <div
              key={index}
              className="min-w-[150px] p-2 bg-white shadow rounded-lg text-center"
            >
              <Link to={`product/${product.id}`}>
                <div className="relative">
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-24 h-24 mx-auto"
                  />
                  <span className="absolute top-2 left-2 bg-gray-100 text-xs px-2 py-1 rounded">
                    {Math.floor(Math.random() * 60)} min
                  </span>
                </div>
              </Link>
              <h4 className="text-sm font-medium mt-2 mb-2">{product.title}</h4>
              <p className="text-yellow-500 text-lg">
                {"★".repeat(product.rating)}{" "}
                <span className="text-gray-400">
                  {"☆".repeat(5 - product.rating)}
                </span>
              </p>
              <p className="text-base font-semibold text-gray-800 mb-2">
                Rs . {Math.floor(product.price * 85)}/-
              </p>
              <button
                onClick={() => addtocart(product)}
                className="bg-red-200 rounded-md text-zinc-900 font-bold text-sm w-full flex items-center  justify-center px-2 py-4  mt-2"
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
