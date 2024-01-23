import React from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import img from "../assets/img/banner.jpg";
import img2 from "../assets/img/c1.jpg";
import img3 from "../assets/img/a1.jpg";
import img4 from "../assets/img/a3.jpg";

const Gallery = () => {
  return (
    <>
      <Navbar />
      <section className="gallery">
        <h2>Capturing Moments in Pixels</h2>
        <p> Explore Our Dazzling Image Gallery for a Visual Feast!</p>
        <div className="gallery-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map(
            (d) => (
              <div className="g-card">
                {d === 1 ? (
                  <img src={img2} alt="image" />
                ) : d === 2 ? (
                  <img src={img3} alt="image" />
                ) : d === 5 ? (
                  <img src={img} alt="image" />
                ) : (
                  <img src={img4} alt="image" />
                )}

                <div className="caption">
                  <p>image caption is created at our institute</p>
                  <b>12/09/2023</b>
                </div>
              </div>
            )
          )}
        </div>
        <br></br>
        <center>pagination</center>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
