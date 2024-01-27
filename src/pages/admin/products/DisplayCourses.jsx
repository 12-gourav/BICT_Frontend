import React, { useState } from "react";
import CreateCourseModal from "../modals/CreateCourseModal";
import CourseModal from "../modals/CourseModal";
import { Pagination } from "antd";

const DisplayCourses = () => {
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
      <p className="info-text">Search by Course Name</p>
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
              <th>Course Name</th>
              <th>Category</th>
              <th>Mode</th>
              <th>Duration</th>
              <th>Price</th>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((d, i) => (
                <tr className={i % 2 === 0 ? "active" : ""}>
                  <td>12 Jan 2023</td>
                  <td>
                    <span onClick={() => setIsModalOpen(true)}>
                      React Web Development
                    </span>
                  </td>

                  <td>Web Development </td>
                  <td>Online + Offline</td>
                  <td>6 Months</td>
                  <td style={{ display: "flex", alignItems: "center" }}>
                    <i className="bx bx-rupee"></i>8000
                  </td>
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
        <CourseModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateCourseModal
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayCourses;
