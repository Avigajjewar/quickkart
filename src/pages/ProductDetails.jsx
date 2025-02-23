import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { priceConverter, ProductContext } from "../context/ProductContext";
import ReviewSection from "../components/ReviewSection";

const ProductDetailPage = () => {
  const [image, setimage] = useState(null);
  const { products, groceries } = useContext(ProductContext);
  const { productId } = useParams();

  const product =
    products.find((product) => product.id == productId) ||
    groceries.find((product) => product.id == productId);

  return (
    <div className="bg-gray-100 min-h-screen pt-5 p-4">
      <div className="container mx-auto">
        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image and Thumbnails */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={image || product.images[0]}
              alt="Product"
              className="w-[39%]  rounded-lg"
            />
            <div className="flex gap-8 w-full justify-center rounded-xl bg-slate-200 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  onClick={() => setimage(img)}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-12 h-14  rounded-lg border"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-gray-500 text-sm mb-4">
              {product.brand} | {product.shippingInformation} |
              <p className="text-yellow-500 text-lg">
                {"★".repeat(product.rating)}{" "}
                <span className="text-gray-400">
                  {"☆".repeat(5 - product.rating)}
                </span>
              </p>
            </p>
            <div className="flex items-center justify-between mb-4">
              <div className="text-lg font-semibold text-green-600">
                ₹ {Math.floor(priceConverter(product.price))}/-
              </div>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
                ADD
              </button>
            </div>

            <div>
              <h2 className="font-semibold text-lg mb-2">
                Why shop from Blinkit?
              </h2>
              <ul className="space-y-2">
                {[
                  "Superfast delivery",
                  "Best prices & offers",
                  "Wide assortment",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p>
                <strong>Type:</strong> {product.category}
              </p>
              <p>
                <strong>Warranty Information:</strong>{" "}
                {product.warrantyInformation}
              </p>
              <p>
                <strong>Discount:</strong> {product.discountPercentage} %
              </p>
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong>Packaging Type:</strong> Pack
              </p>
              <p>
                <strong>Country of Origin:</strong> India
              </p>
              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
              <p>
                <strong>Customer Care:</strong> info@blinkit.com
              </p>
            </div>
          </div>
          <p className="mt-8">
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      </div>
      <ReviewSection review={product.reviews} />
    </div>
  );
};

export default ProductDetailPage;
