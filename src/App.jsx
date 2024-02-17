import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import Login from "./pages/auth/Login";
import News from "./pages/News.jsx";
import { load } from "./redux/login";
import { useDispatch } from "react-redux";
import Auth from "./pages/auth/Auth";

const App = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const loadUser = async () => {
    try {
      setLoading(true);
      const result = await load(token);
      if (result?.data?.data) {
        dispatch({ type: "load", payload: result?.data?.data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      loadUser();
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/certificate/search" element={<CertificateSearch />} />
        <Route path="/addmission" element={<Addmission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login loading={loading} />} />

        <Route
          path="/admin/dashboard"
          element={
            <Auth>
              <Dashboard />
            </Auth>
          }
        >
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
