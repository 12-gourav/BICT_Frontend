import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import { searchSingleCertificates } from "../redux/certificate";
import img from "../assets/img/b.svg";
import { Skeleton } from "antd";

const CertificateSearch = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state2, setState2] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    try {
      if (query === "") {
        setState2([]);
        return toast.error("Certificate Number is Required");
      }
      setLoading(true);

      const result = await searchSingleCertificates(query);
      if (result?.data?.data) {
        setState2(result?.data?.data);
        setState(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(false);
      }, 10000);
    }
  }, [state]);

  return (
    <>
      <Navbar />
      <section className="certificate">
        {state && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <h2>
          Empower Your <span>Tech Journey</span>
        </h2>
        <p>Explore and Obtain Certificates at Our Leading Computer Institute</p>
        <div className="content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Certificate Number"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          {loading ? (
            <div className="display">
              <Skeleton.Image active />
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
                  <h4>No Certificate Found!</h4>
                </div>
              ) : (
                <img src={state2?.img?.url} className="cer" />
              )}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CertificateSearch;
