import React from "react";
import { Modal } from "antd";
import { course_category } from "../../../constants/CourseCategory";

const NewsModal = ({ isModalOpen, setIsModalOpen }) => {
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Certificate Details</h3>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <section className="course-modal">
        <div className="course-wrap">
          <div className="course-mid2">
            <label>News Title</label>
            <input type="text" placeholder="Enter News title" />
          </div>
          <div className="course-mid2">
            <label>News Discription</label>
            <textarea type="text" placeholder="Enter News Discription" />
          </div>
        </div>
        <div className="btn-set">
          <button className="save">Create News</button>
        </div>
      </section>
    </Modal>
  );
};

export default NewsModal;
