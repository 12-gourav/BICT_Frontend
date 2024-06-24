import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import { searchSingleCertificates } from "../redux/certificate";
import img from "../assets/img/b.svg";
import { Skeleton } from "antd";
import { jsPDF } from "jspdf";
import {LoadingOutlined} from "@ant-design/icons";

const CertificateSearch = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state2, setState2] = useState([]);
  const [query, setQuery] = useState("");
  const [loading2, setLoading2] = useState(false);

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

  const downloadPdf = async () => {
    try {
      setLoading2(true);
      const response = await fetch(state2?.img?.url);
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result;

        const pdf = new jsPDF();
        pdf.addImage(base64data, "JPEG", 15, 40, 180, 160);
        pdf.save(`Certificate_${state2?._id}.pdf`);
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error fetching the image:", error);
    } finally {
      setLoading2(false);
    }
  };

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
              {loading ?<LoadingOutlined/> : "Search"}
            </button>
          </div>
          {loading ? (
            <div className="display">
              <Skeleton.Image active  style={{minHeight:"400px"}}/>
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
                <div className="certificate-image">
                  <img src={state2?.img?.url} className="cer" />
                  <button onClick={downloadPdf} disabled={loading2}>
                    {loading2 ? <LoadingOutlined/> : "Download Certificate"}
                  </button>
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

export default CertificateSearch;
