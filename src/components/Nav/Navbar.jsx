import React, { useState } from "react";
import img from "../../assets/img/logo.png";
import { Link, useLocation } from "react-router-dom";
import {Popover} from "antd";

const Navbar = () => {
  const [state, setState] = useState(false);
  const location = useLocation();

  const content = (
    <ul className="link-content">
      <li>
        <Link className="link" to={"/addmission"}>Addmission Form</Link>
      </li>
      <li>
        <Link className="link" to={"/addmission/check"}>Addmission Form Status</Link>
      </li>
    </ul>
  )


  
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
                <span>
                  <i className="bx bx-home"></i>
                </span>
                Home
              </Link>
              <Link
                className={
                  location?.pathname === "/about" ? "link active" : "link"
                }
                to="/about"
              >
                <span>
                  <i className="bx bx-doughnut-chart"></i>
                </span>
                About
              </Link>
              <Link
                className={
                  location?.pathname === "/course" ? "link active" : "link"
                }
                to="/course"
              >
                <span>
                  <i className="bx bx-book-bookmark"></i>
                </span>
                Courses
              </Link>
              <Link
                className={
                  location?.pathname === "/exams" ? "link active" : "link"
                }
                to="/exams"
              >
                <span>
                  <i className="bx bx-book-bookmark"></i>
                </span>
                Exams
              </Link>
              <Link
                className={
                  location?.pathname === "/certificate/search"
                    ? "link active"
                    : "link"
                }
                to="/certificate/search"
              >
                <span>
                  <i className="bx bx-certification"></i>
                </span>
                Certificate
              </Link>
              <Link
                className={
                  location?.pathname === "/result/search"
                    ? "link active"
                    : "link"
                }
                to="/result/search"
              >
                <span>
                <i className='bx bx-bulb'></i>                </span>
                Result
              </Link>
              <Link
                className={
                  location?.pathname === "/addmission" ? "link active" : "link"
                }
                to="/addmission"
              >
            
                <span>
                  <i className="bx bx-user-plus"></i>
                </span>
                Addmission Form
              </Link>
              <Link
                className={
                  location?.pathname === "/addmission/check" ? "link active" : "link"
                }
                to="/addmission/check"
              >
            
                <span>
                  <i className="bx bx-user-plus"></i>
                </span>
                 Addmission Form Status
              </Link>
              <Link
                className={
                  location?.pathname === "/gallery" ? "link active" : "link"
                }
                to="/gallery"
              >
                <span>
                  <i className="bx bx-images"></i>
                </span>
                Gallery
              </Link>
              <Link
                className={
                  location?.pathname === "/news" ? "link active" : "link"
                }
                to="/news"
              >
                <span>
                  <i className="bx bx-news"></i>
                </span>
                News
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
          className={location?.pathname === "/exams" ? "link active" : "link"}
          to="/exams"
        >
          Exams
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
            location?.pathname === "/result/search"
              ? "link active"
              : "link"
          }
          to="/result/search"
        >
          Result
        </Link>
        <span className={
            location?.pathname.includes("/addmission")
              ? "link active"
              : "link"
          }style={{cursor:"pointer"}}>
          <Popover  content={content} placement="bottom">
          Addmission
          </Popover>
    
        </span>
         
  
        <Link
          className={location?.pathname === "/gallery" ? "link active" : "link"}
          to="/gallery"
        >
          Gallery
        </Link>
        <Link
          className={location?.pathname === "/news" ? "link active" : "link"}
          to="/news"
        >
          News
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
