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
import Dashboard from "./pages/admin/Dashboard";
import DisplayProduct from "./pages/admin/products/DisplayProduct";
import DisplayCourses from "./pages/admin/products/DisplayCourses";
import DisplayCertificate from "./pages/admin/products/DisplayCertificate";
import DisplayNews from "./pages/admin/products/DisplayNews";
import DisplayGallery from "./pages/admin/products/DisplayGallery";
import Admin from "./pages/admin/Admin";

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
        <Route path="/admin/dashboard" element={<Dashboard />}>
          <Route path="/admin/dashboard" element={<Admin />} />
          <Route
            path="/admin/dashboard/students"
            element={<DisplayProduct />}
          />
          <Route path="/admin/dashboard/courses" element={<DisplayCourses />} />
          <Route
            path="/admin/dashboard/certificate"
            element={<DisplayCertificate />}
          />
          <Route path="/admin/dashboard/gallery" element={<DisplayGallery />} />
          <Route path="/admin/dashboard/news" element={<DisplayNews />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
