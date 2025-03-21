import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
const SidbarNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({ type: "logout" });
        localStorage.removeItem("token");
        Swal.fire({
          title: "Logout!",
          text: "Logout Successfully",
          icon: "success",
        });
        Navigate("/login");
      }
    });
  };

  return (
    <div className="d-left">
      <div className="top">
        {/* <img src={img} alt="logo" /> */}
        <h4>Bashar Institute Of Computer</h4>
      </div>
      <div className="menu">
        <div
          className={
            location.pathname === "/admin/dashboard"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bxs-dashboard"></i>
          </span>
          <Link to="/admin/dashboard" className="link">
            Dashboard
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/students"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-user"></i>
          </span>
          <Link to="/admin/dashboard/students" className="link">
            Students
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/courses"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-book-bookmark"></i>
          </span>
          <Link to="/admin/dashboard/courses" className="link">
            Courses
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/certificate"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-certification"></i>
          </span>
          <Link to="/admin/dashboard/certificate" className="link">
            Certificates
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/results"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
          <i className='bx bx-bulb'></i>          </span>
          <Link to="/admin/dashboard/results" className="link">
            Results
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/gallery"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-image-alt"></i>
          </span>
          <Link to="/admin/dashboard/gallery" className="link">
            Gallery
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/news"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-news"></i>
          </span>
          <Link to="/admin/dashboard/news" className="link">
            News Portal
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/exam"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
          <i className='bx bx-book-bookmark'></i>
          </span>
          <Link to="/admin/dashboard/exam" className="link">
          Exam
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/chat"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-chat"></i>
          </span>
          <Link to="/admin/dashboard/chat" className="link">
            Collect Chat
          </Link>
        </div>
        <div
          className={
            location.pathname === "/admin/dashboard/logout"
              ? "active menu-item"
              : "menu-item"
          }
        >
          <span>
            <i className="bx bx-log-out-circle"></i>
          </span>
          <a
            className="link"
            onClick={handleLogout}
            style={{ cursor: "pointer" }}
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default SidbarNav;
