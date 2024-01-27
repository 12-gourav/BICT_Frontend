import React from "react";
import { Modal } from "antd";
import { course_category } from "../../../constants/CourseCategory";

const CreateCertificateModal = ({ isModalOpen2, setIsModalOpen2 }) => {
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
          <h3>Create Certificate</h3>
        </div>
      }
      open={isModalOpen2}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <section className="course-modal">
        <div className="course-wrap">
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Student Name</label>
                <input type="text" placeholder="Enter Student Name" />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Certificate Number</label>
                <input type="text" placeholder="Enter certificate Number" />
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Course Name</label>
                <input type="text" placeholder="Enter Your Course Name" />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Category</label>
                <select>
                  <option>Select Category</option>
                  {course_category?.map((d) => (
                    <option key={d?.id}>{d?.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid2">
            <label>Upload Certificate</label>
            <div className="img-upload-btn">
              <input type="file" />
            </div>
          </div>
        </div>
        <div className="btn-set">
          <button className="save">Create Certificate</button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateCertificateModal;
