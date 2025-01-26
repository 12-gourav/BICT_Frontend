import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { load } from "./redux/login";
import { useDispatch } from "react-redux";
import { LoadingOutlined } from "@ant-design/icons";
import ResultSearch from "./pages/ResultSearch.jsx";

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
const AddmissionSearch = lazy(() => import("./pages/AddmissionSearch.jsx"));
const DisplayExam = lazy(() =>
  import("./pages/admin/products/DisplayExam.jsx")
);
const Exams = lazy(() => import("./components/home/Exams.jsx"));
const DisplayResult = lazy(() =>
  import("./pages/admin/products/DisplayResult.jsx")
);

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
          <Route path="/result/search" element={<ResultSearch />} />
          <Route path="/addmission/check" element={<AddmissionSearch />} />
          <Route path="/addmission" element={<Addmission />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/exams" element={<Exams />} />
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
              path="/admin/dashboard/results"
              element={<DisplayResult />}
            />
            <Route
              path="/admin/dashboard/gallery"
              element={<DisplayGallery />}
            />
            <Route path="/admin/dashboard/news" element={<DisplayNews />} />
            <Route path="/admin/dashboard/exam" element={<DisplayExam />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
