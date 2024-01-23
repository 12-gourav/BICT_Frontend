import React from "react";

const Subscribe = ({ img }) => {
  return (
    <div className="subscribe">
      <h1>
        Stay In the Know: <span>Subscribe to Our Newsletter!</span>
      </h1>
      <p>
        "Unlock a world of updates, insights, and exclusive content by
        subscribing to our newsletter. Be the first to receive the latest news,
        upcoming courses, and special offers. Join our community of tech
        enthusiasts and stay connected to the ever-evolving world of computer
        science.
      </p>
      <div className="input-group">
        <input type="text" placeholder="Enter Your Email Address" />
        <button>
          <i className="bx bx-bell"></i>Subscribe
        </button>
      </div>
      <img src={img} className="blogo" />
    </div>
  );
};

export default Subscribe;
