import React from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import Course from "./pages/Course";
import CertificateSearch from "./pages/CertificateSearch";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Addmission from "./pages/Addmission";
import CourseDetail from "./pages/CourseDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/certificate/search" element={<CertificateSearch />} />
        <Route path="/addmission" element={<Addmission />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </>
  );
};

export default App;
