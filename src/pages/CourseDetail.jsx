import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import img from "../assets/img/banner.jpg";

const CourseDetail = () => {
  const params = useParams();

  return (
    <>
      <Navbar />
      <section className="details">
        <div className="detail-wrap">
          <div className="detail-left">
            <img src={img} alt="img" />
          </div>
          <div className="detail-right">
            <h2>Web development Course</h2>
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
            <ul>
              <li>
                <h5>Category:</h5> Web dev
              </li>
              <li>
                <h5>Mode:</h5> Online + Offline
              </li>
              <li>
                <h5>Duration:</h5> 5 Months
              </li>
            </ul>
            <h2 className="mobile-text">
              <i className="bx bx-rupee"></i> 1999
            </h2>
            <p>
              {" "}
              Embark on a transformative journey with our computer courses
              atBashar Institute of Computer Technology.At our institute, we
              pride ourselves on fostering a vibrant learning environment that
              encourages hands-on experience and collaborative problem-solving.
              At our institute, we pride ourselves on fostering a vibrant
              learning environment that encourages hands-on experience and
              collaborative problem-solving.
            </p>
            <h2 className="desk-text">
              <i className="bx bx-rupee"></i> 1999
            </h2>
          </div>
        </div>

        <h4>About Course</h4>
        <p className="text">
          At our institute, we pride ourselves on fostering a vibrant learning
          environment that encourages hands-on experience and collaborative
          problem-solving. At our institute, we pride ourselves on fostering a
          vibrant learning environment that encourages hands-on experience and
          collaborative problem-solving. At our institute, we pride ourselves on
          fostering a vibrant learning environment that encourages hands-on
          experience and collaborative problem-solving. At our institute, we
          pride ourselves on fostering a vibrant learning environment that
          encourages hands-on experience and collaborative problem-solving.
        </p>

        <h4>Benifits of this Course</h4>
        <p className="text">
          At our institute, we pride ourselves on fostering a vibrant learning
          environment that encourages hands-on experience and collaborative
          problem-solving. At our institute, we pride ourselves on fostering a
          vibrant learning environment that encourages hands-on experience and
          collaborative problem-solving. At our institute, we pride ourselves on
          fostering a vibrant learning environment that encourages hands-on
          experience and collaborative problem-solving. At our institute, we
          pride ourselves on fostering a vibrant learning environment that
          encourages hands-on experience and collaborative problem-solving.
        </p>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default CourseDetail;
