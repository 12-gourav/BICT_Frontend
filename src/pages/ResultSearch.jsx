import React, { useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import { toast } from "react-toastify";
import img from "../assets/img/b.svg";
import { Skeleton } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { searchResult } from "../redux/result";

const ResultSearch = () => {
  const [loading, setLoading] = useState(false);
  const [state2, setState2] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    try {
      if (query === "") {
        setState2([]);
        return toast.error("Roll Number is Required");
      }
      setLoading(true);

      const result = await searchResult(query);
      if (result?.data?.data) {
        setState2(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  console.log(state2);

  return (
    <>
      <Navbar />
      <section className="certificate">
        <h2>
          Empower Your <span>Tech Journey</span>
        </h2>
        <p>Explore and Obtain Result at Our Leading Computer Institute</p>
        <div className="content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Roll Number"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? <LoadingOutlined /> : "Search"}
            </button>
          </div>
          {loading ? (
            <div className="display">
              <Skeleton.Image active style={{ minHeight: "400px" }} />
            </div>
          ) : (
            <div className="display">
              {state2?.length === 0 ? (
                <div className="no-data">
                  <img
                    src={img}
                    alt="img"
                    className="no"
                    style={{ width: "10rem" }}
                  />
                  <h4>No Result Found!</h4>
                </div>
              ) : (
                <div className="certificate-image2">
                  <div className="form-wrap">
                    <div className="form-group">
                      <label>Name</label>
                      <p>{state2?.name}</p>
                    </div>
                    <div className="form-group">
                      <label>Father Name</label>
                      <p>{state2?.fatherName}</p>
                    </div>
                  </div>
                  <div className="form-wrap">
                    <div className="form-group">
                      <label>Course</label>
                      <p>{state2?.course}</p>
                    </div>
                    <div className="form-group">
                      <label>Roll Number</label>
                      <p>{state2?.rollNumber}</p>
                    </div>
                  </div>
                  <div className={state2?.status ? "rib":"rib2"}>
                    {state2?.status ? "Passed" : "Fail"}
                  </div>
                  <p className="note">
                    Your results have been processed. Whether you’ve passed or
                    need further preparation, every step brings you closer to
                    mastering your skills. If you’ve passed, congratulations on
                    your achievement! If not, take this as an opportunity to
                    grow and prepare for the next challenge. Your journey
                    towards success continues!
                  </p>
                  <p className="note">
                    <b>Note:</b>Your certificate will be issued 30 days after
                    the official declaration of results. We appreciate your
                    patience and look forward to supporting your continued
                    success.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ResultSearch;
