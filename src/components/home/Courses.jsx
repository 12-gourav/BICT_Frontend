import React, { useEffect, useRef, useState, Suspense } from "react";
import Slider from "react-slick";
import { getHomeCourse } from "../../redux/course";
import { Blurhash } from "react-blurhash";
import { Skeleton } from "antd";
const Courses = ({ img2 }) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: state?.length < 3 ? state?.length : 3,
    slidesToScroll: 1,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const FetchRecords = async () => {
    try {
      setLoading(true);
      const result = await getHomeCourse();
      if (result?.data?.data) {
        setState(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    FetchRecords();
  }, []);

  return (
    <div className="course-section">
      <div className="course-wrap">
        <div className="course-left">
          <div className="co1">
            <h2>
              <div className="st"></div> Our Most Popular <span>Courses</span>
            </h2>
          </div>
          <div className="co2">
            <p>
              Explore our curriculum, meticulously crafted to cover a spectrum
              of topics from programming languages and software development to
              networking, cybersecurity, and artificial intelligence.
            </p>
          </div>
        </div>
        <div className="course-right">
          {loading ? (
            <div className="temp-cards">
              {[1, 2, 3]?.map((d) => (
                <div className="course-card">
                  <div className="course-card-head" style={{ width: "100%" }}>
                    <Skeleton.Image
                      active
                      style={{ width: "20rem", height: "180px" }}
                    />
                  </div>
                  <div className="course-card-body">
                    <Skeleton active size="small" block={true} rows={2} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // <div className="course-slider">
            //   <Slider ref={sliderRef} {...settings}>
            //     {[1, 2, 3]?.map((d) => (
            //       <div className="course-card">
            //         <div className="course-card-head" style={{ width: "100%" }}>
            //           <Skeleton.Image
            //             active
            //             style={{ width: "20rem", height: "180px" }}
            //           />
            //         </div>
            //         <div className="course-card-body">
            //           <Skeleton active size="small" block={true} rows={2} />
            //         </div>
            //       </div>
            //     ))}
            //   </Slider>
            // </div>
            <div className="course-slider">
              <Slider ref={sliderRef} {...settings}>
                {state?.map((d) => (
                  <div className="course-card">
                    <Suspense fallback={<div>Loading...</div>}>
                      {!imageLoaded && (
                        <Blurhash
                          hash={d?.img?.hash || "LIO9Y*TLIWM_}FwbxUW=E3NLS#s-"} // Assuming blurhash is stored in img.blurhash
                          width={"100%"}
                          height={200}
                          resolutionX={32}
                          resolutionY={32}
                          punch={1}
                          style={{ borderRadius: "5px" }}
                        />
                      )}
                      <img
                        src={d?.img?.url} // Cloudinary image URL
                        alt="img"
                        onLoad={handleImageLoad}
                        style={{ display: !imageLoaded ? "none" : "block" }}
                      />
                    </Suspense>
                    {/* <img src={d?.img?.url} alt="img" /> */}
                    <div className="course-card-head">
                      <span>
                        <i className="bx bxs-star"></i> {d?.rateing} Rating
                      </span>
                      <span>
                        <i className="bx bx-user"></i>
                        {d?.users}+
                      </span>
                      <span>
                        <i className="bx bx-calendar"></i>
                        {d?.duration} Months
                      </span>
                    </div>
                    <div className="course-card-body">
                      <div className="course-card-body-first">
                        <h4>{d?.name}</h4>
                        <h2>
                        ₹
                          {d?.price}/-
                        </h2>
                      </div>
                      <p>
                        {d?.shortDis?.length > 100
                          ? d?.shortDis?.substring(0, 90) + "..."
                          : d?.shortDis}
                      </p>
                      <h5>Read More</h5>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          )}
        </div>
        <div className="slider-btn">
          <button className="leftbtn" onClick={previous}>
            <i className="bx bx-left-arrow-alt"></i>
          </button>
          <button className="leftbtn" onClick={next}>
            <i className="bx bx-right-arrow-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
