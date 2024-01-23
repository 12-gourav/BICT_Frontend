import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import img2 from "../assets/img/banner.jpg";
import { useNavigate } from "react-router-dom";

const Course = () => {
  const Navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="products">
        <h2>
          Our Most <span>Popular Courses</span>
        </h2>
        <p>
          Explore our curriculum, meticulously crafted to cover a spectrum of
          topics from programming languages and software development to
          networking, cybersecurity, and artificial intelligence.
        </p>

        <div className="search-bar">
          <span>
            <i className="bx bx-search"></i>
          </span>
          <input type="text" placeholder="Search " />
          <button>Search</button>
        </div>

        <div className="product-wrap">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((d) => (
            <div
              className="product-card"
              onClick={() => Navigate("/course/dhasjdsadisaiuqwi")}
            >
              <div className="img-box">
                <img src={img2} alt="img" />
              </div>

              <div className="product-card-head">
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
              <div className="product-card-body">
                <div className="product-card-body-first">
                  <h4>Web Designing Course</h4>
                  <h2>
                    <i className="bx bx-rupee"></i>2500
                  </h2>
                </div>
                <p>
                  Embark on a transformative journey with our computer courses
                  atBashar Institute of Computer Technology.
                </p>
                <h5>Read More</h5>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Course;
