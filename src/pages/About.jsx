import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import img from "../assets/img/banner.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about-wrap">
          <div className="about-wrap2">
            <div className="about-left">
              <img src={img} alt="img" />
            </div>
            <div className="about-right">
              <h2>
                About <span>Bashar Institute of Computer Technology</span>
              </h2>
              <p>
                Welcome to<span> Bashar Institute of Computer Technology</span>,
                where innovation meets education. As a leading computer
                institute, we are dedicated to empowering individuals with the
                skills and knowledge needed to thrive in the digital age.
              </p>
              <ul>
                <li>
                  <span>Cutting-Edge Curriculum:</span> Our programs are crafted
                  to align with industry trends, ensuring you stay ahead.
                </li>
                <li>
                  <span> Experienced Faculty:</span> Learn from industry experts
                  committed to your success.
                </li>
                <li>
                  <span>Hands-On Learning: </span>
                  Gain practical experience through real-world projects and
                  labs.
                </li>
                <li>
                  <span> Global Networking: </span>
                  Connect with professionals and opportunities worldwide.
                </li>
              </ul>
            </div>
          </div>

          <h1>
            Technology by itself doesn't make leaders. Technology only amplifies
            true leadership.
          </h1>
          <h3>Our Mission:</h3>
          <p>
            At <span>Bashar Institute of Computer Technology</span>, our mission
            is to empower individuals with cutting-edge skills in the dynamic
            field of computer science. We are committed to providing
            high-quality education, fostering innovation, and preparing our
            students for successful careers in technology. Through a blend of
            comprehensive curriculum, hands-on experience, and industry
            connections, we aim to be a catalyst for personal and professional
            growth in the ever-evolving world of computing.
          </p>
          <h3>Our Vision:</h3>
          <p>
            Our vision at <span>Bashar Institute of Computer Technology</span>{" "}
            is to be a leading institution in computer education, recognized for
            excellence in fostering a culture of continuous learning and
            technological advancement. We aspire to produce industry-ready
            professionals who contribute significantly to the global landscape
            of innovation and problem-solving. Our commitment is to be at the
            forefront of technology education, shaping the future of the digital
            age.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
