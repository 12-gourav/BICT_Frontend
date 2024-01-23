import React from "react";
import MapComponent from "./MapComponent";

const Contact = ({ img }) => {
  return (
    <div className="contact-section">
      <div className="ct">
        <img src={img} />
      </div>
      <div className="contact-wrap">
        <div className="contact-wrap-top1">
          <div className="cl1">
            <h2>
              <div className="st"></div> Get in Touch with <span>BICT</span>
            </h2>
          </div>
          <div className="cl2">
            <p>
              Embark on your journey into the world of technology by reaching
              out to <span>Bashar Institute of Computer Technology</span>.
              through our dedicated contact page. Don't hesitate—send us a
              message, give us a call, or drop by our institute to start your
              transformative experience at BICT.
            </p>
          </div>
        </div>
        <div className="contact-wrap-top2">
          <div className="contact-left">
            <div className="strip">
              <div className="strip-left">
                <span>
                  <i className="bx bx-envelope"></i>
                </span>
              </div>
              <div className="strip-right">
                <label>Email Address</label>
                <p>Zakibashar023@gmail.com</p>
              </div>
            </div>
            <div className="strip">
              <div className="strip-left">
                <span>
                  <i className="bx bx-phone"></i>
                </span>
              </div>
              <div className="strip-right">
                <label>Phone Number</label>
                <p>+91 8127131213</p>
              </div>
            </div>
            <div className="strip">
              <div className="strip-left">
                <span>
                  <i className="bx bx-map"></i>
                </span>
              </div>
              <div className="strip-right">
                <label>Office Address</label>
                <p>Shahar Bazar Cinema Road Gandhi Nagar Laharpur Sitapur</p>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <MapComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
