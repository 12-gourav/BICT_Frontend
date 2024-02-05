import React, { Suspense, useState } from "react";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
const Banner = ({ img2 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="banner">
      <div className="first-banner">
        <motion.div
          initial={{ x: -100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ type: "tween", duration: 0.8 }}
          className="left"
        >
          <h1>
            Smart Learning Deeper <br />& More <span>- Amazing</span>
          </h1>
          <p>
            Welcome to Bashar Institute of Computer Technology, your gateway to
            a world of technological excellence and career empowerment. At our
            esteemed computer institute, we take pride in offering a diverse
            range of computer courses designed to equip you with the skills and
            knowledge needed to thrive in the rapidly evolving digital
            landscape.
          </p>
          <p>
            As technology continues to redefine industries, staying ahead of the
            curve is essential. Our courses are regularly updated to reflect the
            latest trends and advancements in the field, ensuring that our
            students are well-prepared for the challenges and opportunities of
            the digital era.
          </p>
          <button>Join Today</button>
        </motion.div>

        <div className="right">
          <Suspense fallback={<div>Loading...</div>}>
            {!imageLoaded && (
              <Blurhash
                hash={"LKJREi?b_3%h~q?co#j]xZIoRjV?"}
                width={"100%"}
                height={400}
                resolutionX={32}
                resolutionY={32}
                punch={1}
                style={{ borderRadius: "5px" }}
              />
            )}

            <img
              src={img2} // Cloudinary image URL
              alt="img"
              onLoad={handleImageLoad}
              style={{ display: !imageLoaded ? "none" : "block" }}
            />
          </Suspense>

          <div className="pulse">
            <div className="pulse-animation">
              <i className="bx bx-play-circle"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
