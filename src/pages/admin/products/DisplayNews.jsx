import React, { useState } from "react";
import { Pagination } from "antd";
import NewsModal from "../modals/NewsModal";
import CreateNews from "../modals/CreateNews";

const DisplayNews = () => {
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
      <p className="info-text">Search by Date</p>
      <div className="wrapper">
        <div className="info-top">
          <p>Display 20 out of 100 Records</p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>Create News</button>
          </div>
        </div>
        <div className="content-wrapper">
          <table>
            <thead>
              <th>Date</th>
              <th>News Title</th>
              <th>News Discription</th>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]?.map((d, i) => (
                <tr className={i % 2 === 0 ? "active" : ""}>
                  <td>12 Jan 2023</td>
                  <td>
                    <span onClick={() => setIsModalOpen(true)}>
                      Website competation organized by the events set
                    </span>
                  </td>

                  <td>Website competation organized by the events sets </td>
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
        <NewsModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {isModalOpen2 && (
        <CreateNews
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayNews;
