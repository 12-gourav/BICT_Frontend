import React, { useState } from "react";
import { Pagination } from "antd";
import CreateCertificateModal from "../modals/CreateCertificateModal";
import CertificateModal from "../modals/CertificateModal";

const DisplayCertificate = () => {
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
        Search by Name, Date, Certificate Number, Course and Category
      </p>
      <div className="wrapper">
        <div className="info-top">
          <p>Display 20 out of 100 Records</p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>
              Create Certificate
            </button>
          </div>
        </div>
        <div className="content-wrapper">
          <table>
            <thead>
              <th>Date</th>
              <th>Name</th>
              <th>Certificate Number</th>
              <th>Course</th>
              <th>Category</th>
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

                  <td>7355228160 </td>
                  <td>Tally</td>
                  <td>Accounting</td>
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
        <CertificateModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateCertificateModal
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayCertificate;
