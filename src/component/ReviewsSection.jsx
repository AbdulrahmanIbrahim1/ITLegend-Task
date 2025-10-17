"use client";
import React, { useState } from 'react';
import { Star, ArrowRight } from 'lucide-react'; 

const initialReviews = [
  { id: 1, name: "John Doe", date: "Oct 10, 2021", rating: 5, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", avatar: "/images/avatar2.png" },
  { id: 2, name: "Jane Smith", date: "Oct 15, 2021", rating: 4, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", avatar: "/images/avatar1.png" },
  { id: 3, name: "David Lee", date: "Oct 19, 2021", rating: 4, comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", avatar: "/images/avatar2.png" },
];

const ReviewItem = ({ review }) => {
  return (
    <div className="flex gap-4 py-6 border-b border-gray-100 last:border-b-0">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <img src={review.avatar} alt={review.name} className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="flex-grow">
        <div className="flex items-center justify-between mb-1">
          <h3 className="font-semibold text-gray-800">{review.name}</h3>
          <span className="text-sm text-gray-500">{review.date}</span>
        </div>

        <div className="flex text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < review.rating ? "currentColor" : "none"}
              strokeWidth={i < review.rating ? 0 : 2}
            />
          ))}
        </div>

        <p className="mt-1 text-gray-600 leading-relaxed text-base">
          {review.comment}
        </p>
      </div>
    </div>
  );
};



const ReviewForm = ({ onAddReview }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim() || rating === 0) return;

    const newReview = {
      id: Date.now(),
      name: "New Student", 
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      rating,
      comment,
      avatar: "/images/default-avatar.png"
    };

    onAddReview(newReview);
    setComment('');
    setRating(5); 
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="border border-gray-200 rounded-lg p-4">
          <label htmlFor="review-summary" className="block text-base font-semibold text-gray-700 mb-2">
            Review summary
          </label>
          <textarea
            id="review-summary"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder=""
            className="w-full resize-y outline-none text-gray-700 placeholder-gray-400"
          ></textarea>
        </div>
        
        
        <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-gray-700">Your Rating:</h3>
            <div className="flex gap-1 text-yellow-400 cursor-pointer">
                {[...Array(5)].map((_, i) => (
                <Star 
                    key={i} 
                    size={20} 
                    fill={i < rating ? "currentColor" : "none"}
                    strokeWidth={i < rating ? 0 : 1.5}
                    onClick={() => setRating(i + 1)} 
                    className="transition-transform hover:scale-110"
                />
                ))}
            </div>
        </div>
       

        <button
          type="submit"
          disabled={!comment.trim() || rating === 0}
          className={`
            flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
            ${!comment.trim() || rating === 0
                ? 'bg-gray-400 cursor-not-allowed text-gray-200'
                : 'bg-teal-500 hover:bg-teal-600 text-white shadow-md'
            }
          `}
        >
          Submit Review <ArrowRight size={20} className="transform -rotate-45" />
        </button>
      </form>
    </div>
  );
};

const ReviewsSection = () => {
  const [reviews, setReviews] = useState(initialReviews);

  const handleAddReview = (newReview) => {
    setReviews([newReview, ...reviews]);
  };

  return (
    <div id="comments-section" className="max-w-4xl mx-auto p-4 sm:p-2 lg:p-2">
      <h2 className="text-3xl font-bold text-gray-900 ">
        comments
      </h2>

      <div className="bg-white  rounded-xl ">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>

      <ReviewForm onAddReview={handleAddReview} />
    </div>
  );
};

export default ReviewsSection;