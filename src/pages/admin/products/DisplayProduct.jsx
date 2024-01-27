import React, { useState } from "react";
import { Pagination } from "antd";
import StdentModal from "../modals/StdentModal";
import CreateStdentModal from "../modals/CreateStudentModal";

const DisplayProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  return (
    <section className="student">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">
        Search by Name, Date, Email Address, Phone Number
      </p>
      <div className="wrapper">
        <div className="info-top">
          <p>Display 20 out of 100 Records</p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>Create Record</button>
          </div>
        </div>
        <div className="content-wrapper">
          <table>
            <thead>
              <th>Date</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Course</th>
              <th>Duration</th>

              {/* <th>Father Name</th>
              <th>Mother Name</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Home Phone No</th>
              <th>Address</th>
              <th>10th Percentage</th>
              <th>12th Percentage</th> */}
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((d, i) => (
                <tr className={i % 2 === 0 ? "active" : ""}>
                  <td>12 Jan 2023</td>
                  <td>
                    <span onClick={() => setIsModalOpen(true)}>
                      Gaurav bajpai
                    </span>
                  </td>

                  <td>+91 7355228160 </td>
                  <td>Tally</td>
                  <td>6 Months</td>
                  {/* <td>Mr. Sunil bajpai</td>
                  <td>Mrs. Sushila bajpai</td>
                  <td>26 Aug 2000</td>
                  <td>Male</td>
                  <td>Gourav.bajpai@gmail.com</td>
                  <td>+91 7355228160</td>
                  <td>+91 7355228160 </td>
                  <td>Near Boby guest House Lalganj 229206</td>
                  <td>94.0%</td>
                  <td>67%</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="page">
          <Pagination total={30} />
        </div>
      </div>
      {isModalOpen && (
        <StdentModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateStdentModal
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayProduct;
