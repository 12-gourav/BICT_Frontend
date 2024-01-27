import React from "react";
import { Modal } from "antd";

const CreateGallery = ({ isModalOpen2, setIsModalOpen2 }) => {
  const handleOk = () => {
    setIsModalOpen2(false);
  };
  const handleCancel = () => {
    setIsModalOpen2(false);
  };
  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Upload Image</h3>
        </div>
      }
      open={isModalOpen2}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <section className="course-modal">
        <div className="course-wrap">
          <div className="course-mid2">
            <label>Event Name</label>
            <input type="text" placeholder="Enter Event Name" />
          </div>
          <div className="course-mid2">
            <label>Upload Image</label>
            <div className="img-upload-btn">
              <input type="file" />
            </div>
          </div>
        </div>
        <div className="btn-set">
          <button className="save">Upload Image</button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateGallery;
