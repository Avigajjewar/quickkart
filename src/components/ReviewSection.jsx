import React, { useState, useEffect } from "react";

const ReviewSection = ({ review }) => {
  // State for reviews
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(review);
  }, []);
  // State for new review
  const [newReview, setNewReview] = useState({
    name: "",
    email: "",
    rating: 5,
    comment: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // Submit review
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.email || !newReview.comment) {
      alert("Please fill out all fields.");
      return;
    }

    const newEntry = {
      ...newReview,
      id: Date.now(), // Unique ID
      date: new Date().toISOString().split("T")[0], // Current date
    };

    setReviews([newEntry, ...reviews]); // Add new review at the top
    setNewReview({ name: "", email: "", rating: 5, comment: "" }); // Reset form
  };

  // Delete review
  const deleteReview = (reviewerName) => {
    const updatedReviews = reviews.filter(
      (review) => review.reviewerName !== reviewerName
    );
    setReviews(updatedReviews);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow mb-6"
      >
        <h3 className="text-lg font-semibold mb-3">Leave a Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={newReview.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <select
          name="rating"
          value={newReview.rating}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2"
        >
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>
              {star} Star{star > 1 ? "s" : ""}
            </option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Write your review..."
          value={newReview.comment}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded mb-2 h-20"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      {reviews.length === 0 ? (
        <p className="text-gray-600">No reviews yet. Be the first to review!</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow relative"
            >
              <h4 className="text-lg font-semibold">{review.reviewerName}</h4>
              <p className="text-sm text-gray-500">{review.reviewerEmail}</p>
              <p className="text-yellow-500 text-lg">
                {"★".repeat(review.rating)}{" "}
                <span className="text-gray-400">
                  {"☆".repeat(5 - review.rating)}
                </span>
              </p>
              <p className="text-gray-800">{review.comment}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
              <button
                onClick={() => deleteReview(review.reviewerName)}
                className="absolute top-2 right-2 text-red-500 text-sm"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
