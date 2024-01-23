import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import Confetti from "react-confetti";
const CertificateSearch = () => {
  const [state, setState] = useState(false);

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
          <Confetti
            width={window.innerWidth - 50}
            height={window.innerHeight}
          />
        )}
        <h2>
          Empower Your <span>Tech Journey</span>
        </h2>
        <p>Explore and Obtain Certificates at Our Leading Computer Institute</p>
        <div className="content">
          <div className="search-bar">
            <input type="text" placeholder="Enter Certificate Number" />
            <button onClick={() => setState(true)}>Search</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CertificateSearch;
