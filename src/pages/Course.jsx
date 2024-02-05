import React, { useEffect, useState, Suspense } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import img from "../assets/img/a.svg";
import { useNavigate } from "react-router-dom";
import { getCourse, searchCourse } from "../redux/course";
import { Blurhash } from "react-blurhash";
import { Pagination, Skeleton } from "antd";

const Course = () => {
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [loading2, setLoading2] = useState(false);

  const Navigate = useNavigate();

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await getCourse(current);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchRecords = async () => {
    try {
      if (query === "") {
        return fetchRecords();
      }
      setLoading2(false);
      const result = await searchCourse(current, query);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [current]);

  return (
    <>
      <Navbar />
      <section className="products">
        <h2>
          Our Most <span>Popular Courses</span>
        </h2>
        <p>
          Explore our curriculum, meticulously crafted to cover a spectrum of
          topics from programming languages and software development to
          networking, cybersecurity, and artificial intelligence.
        </p>

        <div className="search-bar">
          <span>
            <i className="bx bx-search"></i>
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <button disabled={loading2} onClick={searchRecords}>
            Search
          </button>
        </div>
        {loading ? (
          <div className="product-wrap">
            {[1, 2, 3, 4, 5, 6]?.map((d, i) => (
              <div className="product-card" key={i + "ll"}>
                <div
                  className="img-box"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Skeleton.Image
                    active
                    style={{ width: "22rem", height: "10rem" }}
                  />
                </div>
                <div className="product-card-body">
                  <Skeleton active size="small" block={true} rows={2} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="product-wrap">
            {state?.length === 0 ? (
              <div className="no-data">
                <img src={img} alt="img" />
                <h4>No Course Found!</h4>
              </div>
            ) : (
              state?.map((d, i) => (
                <div
                  key={d?._id}
                  className="product-card"
                  onClick={() => Navigate(`/course/${d?._id}`, { state: d })}
                >
                  <div className="img-box">
                    <Suspense fallback={<div>Loading...</div>}>
                      {!imageLoaded && (
                        <Blurhash
                          hash={d?.img?.hash || "LIO9Y*TLIWM_}FwbxUW=E3NLS#s-"} // Assuming blurhash is stored in img.blurhash
                          width={"100%"}
                          height={300}
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
                  </div>

                  <div className="product-card-head">
                    <span>
                      <i className="bx bxs-star"></i> {d?.rating} Rating
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
                  <div className="product-card-body">
                    <div className="product-card-body-first">
                      <h4>{d?.name}</h4>
                      <h2>
                        <i className="bx bx-rupee"></i>
                        {d?.price}
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
              ))
            )}
          </div>
        )}
        {total > 10 && (
          <>
            <br />
            <center>
              <Pagination total={total} onChange={setCurrent} />
            </center>
            <br />
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Course;
