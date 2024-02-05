import React, { useEffect, useState, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import { Blurhash } from "react-blurhash";

const CourseDetail = () => {
  const [state, setState] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const location = useLocation();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    setState(location?.state);
  }, [location?.state]);

  return (
    <>
      <Navbar />
      <section className="details">
        <div className="detail-wrap">
          <div className="detail-left">
            <Suspense fallback={<div>Loading...</div>}>
              {!imageLoaded && (
                <Blurhash
                  hash={state?.img?.hash || "LIO9Y*TLIWM_}FwbxUW=E3NLS#s-"} // Assuming blurhash is stored in img.blurhash
                  width={"100%"}
                  height={300}
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                  style={{ borderRadius: "5px" }}
                />
              )}
              <img
                src={state?.img?.url} // Cloudinary image URL
                alt="img"
                onLoad={handleImageLoad}
                style={{ display: !imageLoaded ? "none" : "block" }}
              />
            </Suspense>
          </div>
          <div className="detail-right">
            <h2>{state?.name}</h2>
            <div className="product-card-head">
              <span>
                <i className="bx bxs-star"></i> 4.5 Rating
              </span>
              <span>
                <i className="bx bx-user"></i>400+
              </span>
              <span>
                <i className="bx bx-calendar"></i>5 Months
              </span>
            </div>
            <ul>
              <li>
                <h5>Category:</h5> {state?.category}
              </li>
              <li>
                <h5>Mode:</h5>
                {state?.mode}
              </li>
              <li>
                <h5>Duration:</h5> {state?.duration}Months
              </li>
            </ul>
            <h2 className="mobile-text">
              <i className="bx bx-rupee"></i> {state?.price}/-
            </h2>
            <p> {state?.shortDis}</p>
            <h2 className="desk-text">
              <i className="bx bx-rupee"></i> {state?.price}
            </h2>
          </div>
        </div>

        <h4>About Course</h4>
        <p className="text">{state?.aboutDis}</p>

        <h4>Benifits of this Course</h4>
        <p className="text">{state?.benifit}</p>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>
  );
};

export default CourseDetail;
