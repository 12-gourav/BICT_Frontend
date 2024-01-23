import React, { useState } from "react";
import img from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [state, setState] = useState(false);
  const location = useLocation();
  return (
    <header>
      <div className="left">
        <img src={img} alt="Logo-Image" />
        <h4>
          Bashar Institute <span>of Computer</span>
        </h4>
      </div>
      <div className="m-right">
        <span onClick={() => setState(true)}>
          <i className="bx bx-menu"></i>
        </span>
        {state && (
          <div className="mobile-nav">
            <div className="mobile-nav-top">
              <span onClick={() => setState(false)}>
                <i className="bx bx-left-arrow-alt"></i>
              </span>
            </div>

            <div className="mobile-nav-content">
              <Link
                className={location?.pathname === "/" ? "link active" : "link"}
                to="/"
              >
                Home
              </Link>
              <Link
                className={
                  location?.pathname === "/about" ? "link active" : "link"
                }
                to="/about"
              >
                About
              </Link>
              <Link
                className={
                  location?.pathname === "/course" ? "link active" : "link"
                }
                to="/course"
              >
                Courses
              </Link>
              <Link
                className={
                  location?.pathname === "/certificate/search"
                    ? "link active"
                    : "link"
                }
                to="/certificate/search"
              >
                Certificate
              </Link>
              <Link
                className={
                  location?.pathname === "/addmission" ? "link active" : "link"
                }
                to="/addmission"
              >
                Addmission
              </Link>
              <Link
                className={
                  location?.pathname === "/gallery" ? "link active" : "link"
                }
                to="/gallery"
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="right">
        <Link
          className={location?.pathname === "/" ? "link active" : "link"}
          to="/"
        >
          Home
        </Link>
        <Link
          className={location?.pathname === "/about" ? "link active" : "link"}
          to="/about"
        >
          About
        </Link>
        <Link
          className={location?.pathname === "/course" ? "link active" : "link"}
          to="/course"
        >
          Courses
        </Link>
        <Link
          className={
            location?.pathname === "/certificate/search"
              ? "link active"
              : "link"
          }
          to="/certificate/search"
        >
          Certificate
        </Link>
        <Link
          className={
            location?.pathname === "/addmission" ? "link active" : "link"
          }
          to="/addmission"
        >
          Addmission
        </Link>
        <Link
          className={location?.pathname === "/gallery" ? "link active" : "link"}
          to="/gallery"
        >
          Gallery
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
