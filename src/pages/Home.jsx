import React from "react";
import Navbar from "../components/Nav/Navbar";
import img from "../assets/img/ct.png";
import img2 from "../assets/img/banner.jpg";
import img3 from "../assets/img/sideimage.png";
import img4 from "../assets/img/left_reviews.png";
import FAQComponent from "../components/home/FAQComponent";
import { Link } from "react-router-dom";
import Banner from "../components/home/Banner";
import Category from "../components/home/Category";
import Courses from "../components/home/Courses";
import Skill from "../components/home/Skill";
import Subscribe from "../components/home/Subscribe";
import Ratings from "../components/home/Ratings";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Banner img2={img2} />
      <Category />
      <Courses img2={img2} />
      <Skill img3={img3} />
      <Subscribe img={img} />
      <Ratings img4={img4} img2={img2} />
      <Contact img={img} />
      <FAQComponent />
      <Footer />
    </>
  );
};

export default Home;
