import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-wrap">
        <div className="hf-left">
          <img src={img} alt="img" />
          <h5> Bashar Institute of Computer Technology</h5>
          <p>
            At our institute, we pride ourselves on fostering a vibrant learning
            environment that encourages hands-on experience and collaborative
            problem-solving.
          </p>
        </div>
        <div className="hf-right">
          <div className="hfr1">
            <h4>Important Links</h4>
            <Link className="link" to="/certificate">
              <i className="bx bxs-certification"></i> Download Certificate
            </Link>
            <Link className="link" to="/login">
              <i className="bx bxs-log-in-circle"></i> Login panel
            </Link>
            <Link className="link" to="/gallery">
              <i className="bx bx-images"></i> Gallery
            </Link>
            <Link className="link" to="/admin/dashboard">
              <i className="bx bxs-dashboard"></i> Dashboard
            </Link>
          </div>
          <div className="hfr2">
            <h4>Social Links</h4>
            <a href="#" target="_blank" className="link">
              <i className="bx bxl-youtube"></i> Youtube
            </a>
            <a href="#" target="_blank" className="link">
              <i className="bx bxl-instagram-alt"></i> Instagram
            </a>
            <a href="#" target="_blank" className="link">
              <i className="bx bxl-facebook"></i> Facebook
            </a>
            <a href="#" target="_blank" className="link">
              <i className="bx bxl-twitter"></i> Twiter
            </a>
          </div>
        </div>
      </div>
      <div className="dev">Develop by CoolDeveloper</div>
    </footer>
  );
};

export default Footer;
