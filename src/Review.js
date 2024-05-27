// src/Review.js
import React from 'react';
import './Review.css';

function Review() {
  return (
    <div className="review">
      <div className="review-score">
        <span>4.5</span>
        <div className="stars">
          ★★★★☆
        </div>
        <span>9 Reviews</span>
      </div>
      <div className="review-list">
        <div className="review-item">
          <img src="logo.png" alt="Logo" className="review-logo" />
          <p>Review 1: Excellent product!</p>
        </div>
        <div className="review-item">
          <img src="logo.png" alt="Logo" className="review-logo" />
          <p>Review 2: Very satisfied!</p>
        </div>
        <div className="review-item">
          <img src="logo.png" alt="Logo" className="review-logo" />
          <p>Review 3: Will buy again!</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
