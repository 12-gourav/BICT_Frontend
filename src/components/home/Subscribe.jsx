import React from "react";
import { motion } from "framer-motion";

const Subscribe = ({ img }) => {
  return (
    <motion.div
      initial={{ x: -100, scale: 0 }}
      whileInView={{ x: 0, scale: 1 }}
      viewport={{ once: false, amount: 0 }}
      transition={{ type: "tween", duration: 0.8 }}
      className="subscribe"
    >
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
    </motion.div>
  );
};

export default Subscribe;
