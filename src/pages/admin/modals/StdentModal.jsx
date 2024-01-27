import React from "react";
import { Modal } from "antd";
const StdentModal = ({ isModalOpen, setIsModalOpen }) => {
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
          <h3>Gaurav Bajpai</h3>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <div className="student-wrapper">
        <div className="sw-set">
          <div className="sw-left">
            <span>Personal Details</span>
            <div className="box">
              <div className="group">
                <label>First Name</label>
                <input type="text" placeholder="Enter Your First Name" />
              </div>
              <div className="group">
                <label>Last Name</label>
                <input type="text" placeholder="Enter Your Last Name" />
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>DOB</label>
                <input type="text" placeholder="Enter Your DOB" />
              </div>
              <div className="group">
                <label>Gender</label>
                <select>
                  <option>select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>Father Name</label>
                <input type="text" placeholder="Enter Your Father Name" />
              </div>
              <div className="group">
                <label>Mother Name</label>
                <input type="text" placeholder="Enter Your Mother Name" />
              </div>
            </div>
          </div>
          <div className="sw-right">
            <span>Contact Details</span>
            <div className="box">
              <div className="group">
                <label>Email Address</label>
                <input type="text" placeholder="Enter Your Email" />
              </div>
              <div className="group">
                <label>Phone Number</label>
                <input type="text" placeholder="Enter Your Phone No" />
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>Whatsup Number</label>
                <input type="text" placeholder="Enter Your Phone No" />
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>Address</label>
                <input type="text" placeholder="Enter Your Address" />
              </div>
            </div>
          </div>
        </div>
        <div className="sw-set2">
          <span>Education Details</span>
          <div className="box">
            <div className="group">
              <label>10th Board Name</label>
              <input type="text" placeholder="Enter Your Board Name" />
            </div>
            <div className="group">
              <label>Year</label>
              <input type="text" placeholder="Enter Your Year" />
            </div>
            <div className="group">
              <label>Percentage</label>
              <input type="text" placeholder="Enter Your Percentage" />
            </div>
          </div>
          <div className="box">
            <div className="group">
              <label>12th Board Name</label>
              <input type="text" placeholder="Enter Your Board Name" />
            </div>
            <div className="group">
              <label>Year</label>
              <input type="text" placeholder="Enter Your Year" />
            </div>
            <div className="group">
              <label>Percentage</label>
              <input type="text" placeholder="Enter Your Percentage" />
            </div>
          </div>
        </div>
        <div className="btn-set">
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    </Modal>
  );
};

export default StdentModal;
