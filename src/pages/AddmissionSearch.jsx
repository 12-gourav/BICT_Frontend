import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import img from "../assets/img/b.svg";
import { Skeleton } from "antd";
import { SearchAddmission } from "../redux/action";

const AddmissionSearch = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state2, setState2] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = async () => {
    try {
      if (query === "") {
        setState2([]);
        return toast.error("Addmission Number is Required");
      }
      setLoading(true);

      const result = await SearchAddmission(query);
      if (result?.data?.data) {
        setState2(result?.data?.data[0]);
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
        {state && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <h2>
          Empower Your <span>Tech Journey</span>
        </h2>
        <p>
          Embark on a Journey and Secure Admission at Our Premier Computer
          Institute
        </p>
        <div className="content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Addmission Number"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? "Search" : "Search"}
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
                  <h4>No Addmission Found!</h4>
                </div>
              ) : state2?.status === "Paid" ? (
                <div className="addmission-msg">
                  <h5>Congratulations! Your Admission is Confirmed</h5>
                  <p>Dear {state2?.firstName + " " + state2?.lastName},</p>

                  <p>
                    We are delighted to inform you that your application to
                    <b> Bashar Institute of Computer</b> has been processed, and
                    we're thrilled to welcome you aboard! Your payment has been
                    successfully confirmed, and your admission is now officially
                    confirmed. You are now part of our esteemed community at
                    <b> Bashar Institute of Computer</b>.
                  </p>
                  <p>
                    {" "}
                    We can't wait to see you thrive in our programs and
                    contribute to our vibrant academic environment. Should you
                    have any questions or need assistance, feel free to reach
                    out to our admission office at{" "}
                    <b>
                      Shahar Bazar Cinema Road Gandhi Nagar Laharpur Sitapur.
                    </b>{" "}
                  </p>
                  <p>
                    Once again, congratulations, and we look forward to seeing
                    you soon!{" "}
                  </p>
                  <br />
                  <div className="flow">
                    <span>Best regards,</span>
                    <span>Admissions Office</span>
                    <span>Bashar Institute of Computers</span>
                    <span>bashar.info.bic@gmail.com</span>
                  </div>
                </div>
              ) : (
                <div className="addmission-msg">
                  <h5>Your Admission Status</h5>
                  <p>Dear {state2?.firstName + " " + state2?.lastName},</p>

                  <p>
                    We hope this message finds you well. We wanted to provide
                    you with an update on your admission application to
                    <b> Bashar Institute of Computer.</b>
                  </p>
                  <p>
                    Your application is currently under review, awaiting payment
                    confirmation. Once your payment is processed, your admission
                    will be finalized. Please be assured that our team is
                    diligently working to complete this process.
                  </p>
                  <p>
                    {" "}
                    We appreciate your patience and understanding during this
                    time. If you have any questions or require assistance,
                    please don't hesitate to contact our admission office at{" "}
                    <b>
                       Shahar Bazar Cinema Road Gandhi Nagar Laharpur Sitapur.
                    </b>{" "}
                  </p>
                  <p>
                    Thank you for your interest in{" "}
                    <b> Bashar Institute of Computer.</b> We're looking forward
                    to potentially having you join our community soon!
                  </p>
                  <br />
                  <div className="flow">
                    <span>Best regards,</span>
                    <span>Admissions Office</span>
                    <span>Bashar Institute of Computers</span>
                    <span>bashar.info.bic@gmail.com</span>
                  </div>
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

export default AddmissionSearch;
