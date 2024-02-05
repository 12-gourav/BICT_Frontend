import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="home-footer-wrap">
        <div className="hf-left">
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
              Download Certificate
            </Link>
            <Link className="link" to="/login">
              Login panel
            </Link>
            <Link className="link" to="/gallery">
              Gallery
            </Link>
            <Link className="link" to="/admin/dashboard">
              Admin Dashboard
            </Link>
          </div>
          <div className="hfr2">
            <h4>Social Links</h4>
            <a href="#" target="_blank" className="link">
              Youtube
            </a>
            <a href="#" target="_blank" className="link">
              Instagram
            </a>
            <a href="#" target="_blank" className="link">
              Facebook
            </a>
            <a href="#" target="_blank" className="link">
              Twiter
            </a>
          </div>
        </div>
      </div>
      <div className="dev">Develop by CoolDeveloper</div>
    </footer>
  );
};

export default Footer;
