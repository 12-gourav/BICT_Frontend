import React, { useRef } from "react";
import Slider from "react-slick";
const Courses = ({ img2 }) => {
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
    <div className="course-section">
      <div className="course-wrap">
        <div className="course-left">
          <div className="co1">
            <h2>
              <div className="st"></div> Our Most Popular <span>Courses</span>
            </h2>
          </div>
          <div className="co2">
            <p>
              Explore our curriculum, meticulously crafted to cover a spectrum
              of topics from programming languages and software development to
              networking, cybersecurity, and artificial intelligence.
            </p>
          </div>
        </div>
        <div className="course-right">
          <div className="course-slider">
            <Slider ref={sliderRef} {...settings}>
              {[1, 2, 3, 4, 5, 6]?.map((d) => (
                <div className="course-card">
                  <img src={img2} alt="img" />
                  <div className="course-card-head">
                    <span>
                      <i className="bx bxs-star"></i> 4.5 Rating
                    </span>
                    <span>
                      <i className="bx bx-user"></i>400+
                    </span>
                    <span>
                      <i className="bx bx-calendar"></i>5 Months
                    </span>
                  </div>
                  <div className="course-card-body">
                    <div className="course-card-body-first">
                      <h4>Web Designing Course</h4>
                      <h2>
                        <i className="bx bx-rupee"></i>2500
                      </h2>
                    </div>
                    <p>
                      Embark on a transformative journey with our computer
                      courses atBashar Institute of Computer Technology.
                    </p>
                    <h5>Read More</h5>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
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
  );
};

export default Courses;
