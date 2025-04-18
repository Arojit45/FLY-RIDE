import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`ri-star-${
            star <= rating ? "fill" : "line"
          } text-3xl cursor-pointer transition-colors ${
            star <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
          onClick={() => setRating(star)}
        ></i>
      ))}
    </div>
  );
};

export default StarRating;
