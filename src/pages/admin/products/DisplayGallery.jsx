import React, { useState } from "react";
import img from "../../../assets/img/banner.jpg";
import { Pagination } from "antd";
import GalleryModal from "../modals/GalleryModal";
import CreateGallery from "../modals/CreateGallery";

const DisplayGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  return (
    <section className="gallery-admin">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">Search by Date</p>
      <div className="info-top">
        <p>Display 20 out of 100 Records</p>
        <div className="btn-set">
          <button onClick={() => setIsModalOpen2(true)}>Upload Image</button>
        </div>
      </div>
      <div className="m-wrap">
        <div className="gallery-container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1]?.map((d) => (
            <div className="img-box">
              <img src={img} alt="img" />
              <div className="setr">
                <div className="s" onClick={() => setIsModalOpen(true)}>
                  <i className="bx bx-edit-alt"></i>
                </div>
                <div className="s">
                  <i
                    className="bx bx-x"
                    style={{ marginTop: "2px", marginRight: "1px" }}
                  ></i>
                </div>
              </div>
              <div className="caption">
                <p>Event Organizer</p>
                <span>12 jan 2023</span>
              </div>
            </div>
          ))}
        </div>
        <div className="page">
          <Pagination total={30} />
        </div>
      </div>

      {isModalOpen && (
        <GalleryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateGallery
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayGallery;
