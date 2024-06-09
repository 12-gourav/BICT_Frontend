import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { CreateStudent } from "../../../redux/action";
import { LoadingOutlined } from "@ant-design/icons";

const CreateStdentModal = ({ isModalOpen2, setIsModalOpen2, fetchRecords }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [father, setFather] = useState("");
  const [mother, setMother] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [address, setAddress] = useState("");
  const [tenPercent, setTenPercent] = useState("");
  const [tenBoard, setTenBoard] = useState("");
  const [tenYear, setTenYear] = useState("");
  const [enterPercent, setEnterPercent] = useState("");
  const [enterBoard, setEnterBoard] = useState("");
  const [enterYear, setEnterYear] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (firstName === "") {
        return toast.error("First Name is Required");
      } else if (lastName === "") {
        return toast.error("Last Name is Required");
      } else if (dob === "") {
        return toast.error("Date of Birth is Required");
      } else if (gender === "") {
        return toast.error("Gender is Required");
      } else if (father === "") {
        return toast.error("Father Name is Required");
      } else if (mother === "") {
        return toast.error("Mother Name is Required");
      } else if (email === "") {
        return toast.error("Email is Required");
      } else if (phone === "") {
        return toast.error("Phone Number is Required");
      } else if (homePhone === "") {
        return toast.error("Phone Number 2 is Required");
      } else if (address === "") {
        return toast.error("Address is Required");
      } else if (tenPercent === "") {
        return toast.error("Ten Percentage is Required");
      } else if (tenBoard === "") {
        return toast.error("Ten Board Name is Required");
      } else if (tenYear === "") {
        return toast.error("Board Year is Required");
      } else if (enterPercent === "") {
        return toast.error("Enter Percentage is Required");
      } else if (enterBoard === "") {
        return toast.error("Enter Board Name is Required");
      } else if (enterYear === "") {
        return toast.error("Enter Year is Required");
      } else if (course === "") {
        return toast.error("Course Name is Required");
      } else if (duration === "") {
        return toast.error("Duration is Required");
      }
      setLoading(true);
      const result = await CreateStudent(
        firstName,
        lastName,
        dob,
        gender,
        father,
        mother,
        email,
        phone,
        homePhone,
        address,
        tenPercent,
        tenBoard,
        tenYear,
        enterPercent,
        enterBoard,
        enterYear,
        course,
        duration
      );

      if (result?.data?.data) {
        setFirstName("");
        setLastName("");
        setDob("");
        setGender("");
        setFather("");
        setMother("");
        setEmail("");
        setPhone("");
        setHomePhone("");
        setAddress("");
        setTenPercent("");
        setTenBoard("");
        setTenYear("");
        setEnterPercent("");
        setEnterBoard("");
        setEnterYear("");
        setCourse("");
        setDuration("");
        toast.success("Student Registration Successfully");
        fetchRecords();
        setIsModalOpen2(false);
      } else {
        toast.error("Something Wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      centered
      width={1200}
      title={
        <div className="s-top">
          <h3>Create Record</h3>
        </div>
      }
      open={isModalOpen2}
      onOk={() => setIsModalOpen2(false)}
      onCancel={() => setIsModalOpen2(false)}
      footer={false}
    >
      <div className="student-wrapper">
        <div className="sw-set">
          <div className="sw-left">
            <span>Personal Details</span>
            <div className="box">
              <div className="group">
                <label>First Name</label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  type="text"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="group">
                <label>Last Name</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  type="text"
                  placeholder="Enter Your Last Name"
                />
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>DOB</label>
                <input
                  onChange={(e) => setDob(e.target.value)}
                  value={dob}
                  type="date"
                  placeholder="Enter Your DOB"
                />
              </div>
              <div className="group">
                <label>Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>Father Name</label>
                <input
                  onChange={(e) => setFather(e.target.value)}
                  value={father}
                  type="text"
                  placeholder="Enter Your Father Name"
                />
              </div>
              <div className="group">
                <label>Mother Name</label>
                <input
                  onChange={(e) => setMother(e.target.value)}
                  value={mother}
                  type="text"
                  placeholder="Enter Your Mother Name"
                />
              </div>
            </div>
          </div>
          <div className="sw-right">
            <span>Contact Details</span>
            <div className="box">
              <div className="group">
                <label>Email Address</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="group">
                <label>Phone Number</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="text"
                  placeholder="Enter Your Phone No"
                />
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>Whatsup Number</label>
                <input
                  onChange={(e) => setHomePhone(e.target.value)}
                  value={homePhone}
                  type="text"
                  placeholder="Enter Your Phone No"
                />
              </div>
            </div>
            <div className="box">
              <div className="group">
                <label>Address</label>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  placeholder="Enter Your Address"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="sw-set2">
          <span>Education Details</span>
          <div className="box">
            <div className="group">
              <label>10th Board Name</label>
              <input
                onChange={(e) => setTenBoard(e.target.value)}
                value={tenBoard}
                type="text"
                placeholder="Enter Your Board Name"
              />
            </div>
            <div className="group">
              <label>Year</label>
              <input
                onChange={(e) => setTenYear(e.target.value)}
                value={tenYear}
                type="text"
                placeholder="Enter Your Year"
              />
            </div>
            <div className="group">
              <label>Percentage</label>
              <input
                onChange={(e) => setTenPercent(e.target.value)}
                value={tenPercent}
                type="text"
                placeholder="Enter Your Percentage"
              />
            </div>
          </div>
          <div className="box">
            <div className="group">
              <label>12th Board Name</label>
              <input
                onChange={(e) => setEnterBoard(e.target.value)}
                value={enterBoard}
                type="text"
                placeholder="Enter Your Board Name"
              />
            </div>
            <div className="group">
              <label>Year</label>
              <input
                onChange={(e) => setEnterYear(e.target.value)}
                value={enterYear}
                type="text"
                placeholder="Enter Your Year"
              />
            </div>
            <div className="group">
              <label>Percentage</label>
              <input
                onChange={(e) => setEnterPercent(e.target.value)}
                value={enterPercent}
                type="text"
                placeholder="Enter Your Percentage"
              />
            </div>
          </div>
          <div className="box">
            <div className="group">
              <label>Course Name</label>
              <input
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                type="text"
                placeholder="Enter Course Name"
              />
            </div>
            <div className="group">
              <label>Course Duration</label>
              <input
                onChange={(e) => setDuration(e.target.value)}
                value={duration}
                type="text"
                placeholder="Enter Course Duration"
              />
            </div>
          </div>
        </div>
        <div className="btn-set">
          <button className="save" disabled={loading} onClick={handleSubmit}>
            {loading ? <LoadingOutlined /> : "Create Record"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateStdentModal;
