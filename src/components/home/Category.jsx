import React, { useRef, useState } from "react";
import { course_category } from "../../constants/CourseCategory";
import Slider from "react-slick";

const Category = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
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
    <div className="category-section">
      <div className="cat-wrap">
        <div className="cat-left">
          <div className="cl1">
            <h2>
              <div className="st"></div> Most Popular <span>Categories</span>
            </h2>
          </div>
          <div className="cl2">
            <p>
              Embark on a transformative journey with our computer courses at
              <span> Bashar Institute of Computer Technology</span>. From
              programming to cybersecurity, our diverse curriculum ensures a
              comprehensive learning experience.
            </p>
          </div>
        </div>
        <div className="cat-right">
          <div className="cr-wrap">
            <Slider ref={sliderRef} {...settings}>
              {course_category?.map((d, i) => (
                <div
                  className={i % 2 != 0 ? "card redcard" : "card"}
                  key={"key" + i}
                >
                  <div className="top">
                    <div className="logo">{d?.icon}</div>
                    <h4>{d?.name}</h4>
                  </div>
                  <p>{d?.dis?.substring(0, 200)}...</p>
                  <p className="get">
                    Get Started <i className="bx bx-up-arrow-alt"></i>
                  </p>
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

export default Category;
