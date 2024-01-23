import React, { useRef, useState } from "react";
import { comment } from "../../constants/Comment";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Ratings = ({ img4 }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="rating-section">
      <div className="rating-wrap">
        <motion.div
          initial={{ x: -100, scale: 0 }}
          whileInView={{ x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
          className="rating-left"
        >
          <img src={img4} alt="reviews" />
        </motion.div>
        <div className="rating-right">
          <h2>
            Student Voices:
            <br />
            <span>Empowering Success Stories</span>
          </h2>
          <h2></h2>
          <p>Discover the Impact of Our Courses through Genuine Experiences</p>

          <div className="rating-slider">
            <Slider ref={sliderRef} {...settings}>
              {comment?.map((d) => (
                <div className="rating-card">
                  <img src={d?.img} alt="avtar" />
                  <div className="rate">
                    {[1, 2, 3, 4, 5]?.map((d) => (
                      <i className="bx bxs-star" key={d + "j"}></i>
                    ))}{" "}
                    Rating
                    <p>{d?.msg}</p>
                    <h5>{d?.name}</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="slider-btn">
            <button className="leftbtn" onClick={previous}>
              <i className="bx bx-left-arrow-alt"></i>
            </button>
            <button className="leftbtn" onClick={next}>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
