import React from "react";
import { Modal } from "antd";
import { course_category } from "../../../constants/CourseCategory";

const CreateCourseModal = ({ isModalOpen2, setIsModalOpen2 }) => {
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
          <h3>Create Course</h3>
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
                <label>Course Name</label>
                <input type="text" placeholder="Enter Your First Name" />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Course Category</label>
                <select>
                  <option>Select Category</option>
                  {course_category?.map((d) => (
                    <option key={d?.id}>{d?.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Price</label>
                <input type="text" placeholder="Enter Your Course Price" />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Duration</label>
                <input type="text" placeholder="Enter Your Course Duration" />
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Rating</label>
                <input type="text" placeholder="Enter Your Course Ratings" />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Mode</label>
                <select>
                  <option>Select Course Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Online + Offline">Online + Offline</option>
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid2">
            <label>Number of Enrolled Students</label>
            <input
              type="text"
              placeholder="Enter Number of Enrolled Students"
            />
          </div>
          <div className="course-mid2">
            <label>Short Course Discription</label>
            <textarea placeholder="Enter your Discription" />
          </div>
          <div className="course-mid2">
            <label> About Course </label>
            <textarea placeholder="Enter your Discription" />
          </div>
          <div className="course-mid2">
            <label>Course Benifits</label>
            <textarea placeholder="Enter your Discription" res />
          </div>
          <div className="course-mid2">
            <label>Course Image</label>
            <div className="img-upload-btn">
              <input type="file" />
            </div>
          </div>
        </div>
        <div className="btn-set">
          <button className="save">Create Course</button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateCourseModal;
