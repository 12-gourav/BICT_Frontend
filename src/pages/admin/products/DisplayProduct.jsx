import React from "react";
import { Pagination } from "antd";

const DisplayProduct = () => {
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
        </div>
        <div className="content-wrapper">
          <table>
            <thead>
              <th>Date</th>
              <th>Name</th>
              <th>Course</th>
              <th>Duration</th>
              <th>Action</th>
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
                  <td>Gaurav bajpai</td>
                  <td>Tally</td>
                  <td>6 Months</td>
                  <td>
                    <button>Delete</button>
                  </td>
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
        <center>
          <Pagination total={3} />
        </center>
      </div>
    </section>
  );
};

export default DisplayProduct;
