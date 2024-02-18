import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { load } from "./redux/login";
import { useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";

const Home = lazy(() => import("./pages/Home"));
const Course = lazy(() => import("./pages/Course"));
const CertificateSearch = lazy(() => import("./pages/CertificateSearch"));
const Gallery = lazy(() => import("./pages/Gallery"));
const About = lazy(() => import("./pages/About"));
const Addmission = lazy(() => import("./pages/Addmission"));
const CourseDetail = lazy(() => import("./pages/CourseDetail"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const DisplayProduct = lazy(() =>
  import("./pages/admin/products/DisplayProduct")
);
const DisplayCourses = lazy(() =>
  import("./pages/admin/products/DisplayCourses")
);
const DisplayCertificate = lazy(() =>
  import("./pages/admin/products/DisplayCertificate")
);
const DisplayNews = lazy(() => import("./pages/admin/products/DisplayNews"));
const DisplayGallery = lazy(() =>
  import("./pages/admin/products/DisplayGallery")
);
const Admin = lazy(() => import("./pages/admin/Admin"));
const Login = lazy(() => import("./pages/auth/Login"));
const News = lazy(() => import("./pages/News.jsx"));
const Auth = lazy(() => import("./pages/auth/Auth"));

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
      <Suspense
        fallback={
          <div className="big">
            <h4>
              Bashar Institute <LoadingOutlined /> <span> of Computer</span>
            </h4>
          </div>
        }
      >
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
            <Route
              path="/admin/dashboard/courses"
              element={<DisplayCourses />}
            />
            <Route
              path="/admin/dashboard/certificate"
              element={<DisplayCertificate />}
            />
            <Route
              path="/admin/dashboard/gallery"
              element={<DisplayGallery />}
            />
            <Route path="/admin/dashboard/news" element={<DisplayNews />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
