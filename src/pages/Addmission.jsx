import React, { useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import { checkEmail, checkPhone } from "../utils/Helper";
import { toast } from "react-toastify";
import { CreateStudent } from "../redux/action";
import { LoadingOutlined } from "@ant-design/icons";

const Addmission = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [father, setfather] = useState("");
  const [mother, setMother] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [address, setAddresss] = useState("");
  const [tenPerncentage, setTenPercentage] = useState("");
  const [tenYear, setTenYear] = useState("");
  const [tenBoard, setTenBoard] = useState("");
  const [twelvePercentage, setTwelevePercentage] = useState("");
  const [twelveYear, setTweleveYear] = useState("");
  const [tweleveBoard, setTweleveBoard] = useState("");
  const [course, setCourse] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (firstName?.length === 0) {
        return toast.error("First Name can not be empty");
      } else if (lastName?.length === 0) {
        return toast.error("First Name can not be empty");
      } else if (father?.length === 0) {
        return toast.error("Father Name can not be empty");
      } else if (mother?.length === 0) {
        return toast.error("Mother Name can not be empty");
      } else if (dob?.length === 0) {
        return toast.error("DOB can not be empty");
      } else if (gender?.length === 0) {
        return toast.error("Gender can not be empty");
      } else if (email?.length === 0) {
        return toast.error("Email can not be empty");
      } else if (phone?.length === 0) {
        return toast.error("Phone Number can not be empty");
      } else if (homePhone?.length === 0) {
        return toast.error("Home Phone Number can not be empty");
      } else if (address?.length === 0) {
        return toast.error("Address can not be empty");
      } else if (tenPerncentage?.length === 0) {
        return toast.error("Tenth Percentage can not be empty");
      } else if (tenYear?.length === 0) {
        return toast.error("Board Year can not be empty");
      } else if (tenBoard?.length === 0) {
        return toast.error("Board Name can not be empty");
      } else if (twelvePercentage?.length === 0) {
        return toast.error("Enter Percentage can not be empty");
      } else if (twelveYear?.length === 0) {
        return toast.error("Board Year can not be empty");
      } else if (tenBoard?.length === 0) {
        return toast.error("Board Name can not be empty");
      } else if (course?.length === 0) {
        return toast.error("Course Name can not be empty");
      } else if (duration?.length === 0) {
        return toast.error("Duration can not be empty");
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
        tenPerncentage,
        tenBoard,
        tenYear,
        twelvePercentage,
        tweleveBoard,
        twelveYear,
        course,
        duration
      );
      if (result?.data?.data) {
        toast.success("Application Submit Successfully");
        setFirstName("");
        setLastName("");
        setfather("");
        setMother("");
        setDob("");
        setGender("");
        setEmail("");
        setPhone("");
        setHomePhone("");
        setAddresss("");
        setTenBoard("");
        setTenPercentage("");
        setTenYear("");
        setTweleveBoard("");
        setTwelevePercentage("");
        setTenYear("");
        setCourse("");
        setDuration("");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="addmission">
        <h2>Seize Your Future in Tech</h2>
        <p>Streamlined Admission Process at Our Premier Computer Institute</p>
        <br />
        <div className="form-section">
          <h2>Personal Details*</h2>
          <div className="form-wrap">
            <div className="form-group">
              <label>First Name</label>
              <input
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                placeholder="Enter Your First Name"
                value={firstName}
              />
              <span>
                {firstName?.length > 0 && firstName?.length < 4
                  ? "First Name Should be more then 3 character"
                  : ""}
              </span>
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter Your First Name"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              <span>
                {/* {" "}
                {firstName?.length > 0 && firstName?.length < 4
                  ? "First Name Should be more then 3 character"
                  : ""} */}
              </span>
            </div>
          </div>
          <div className="form-wrap">
            <div className="form-group">
              <label>Father Name</label>
              <input
                value={father}
                onChange={(e) => setfather(e.target.value)}
                type="text"
                placeholder="Enter Your Father Name"
              />
              <span>
                {father?.length > 0 && father?.length < 4
                  ? "Father Name Should be more then 3 character"
                  : ""}
              </span>
            </div>
            <div className="form-group">
              <label>Mother Name</label>
              <input
                onChange={(e) => setMother(e.target.value)}
                value={mother}
                type="text"
                placeholder="Enter Your Mother Name"
              />
              <span>
                {mother?.length > 0 && mother?.length < 4
                  ? "Mother Name Should be more then 3 character"
                  : ""}
              </span>
            </div>
          </div>
          <div className="form-wrap">
            <div className="form-group">
              <label>Date Of Birth</label>
              <input
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                type="date"
                placeholder="Enter Your DOB"
              />
              <span></span>
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <span></span>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h2>Contact Details*</h2>
          <div className="form-wrap">
            <div className="form-group">
              <label>Email ID</label>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span>
                {email?.length > 0 && !checkEmail(email) ? "Invalid Email" : ""}
              </span>
            </div>
            <div className="form-group">
              <label>Phone No</label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <span>
                {phone?.length > 0 && !checkPhone(phone)
                  ? "Invalid Phone Number"
                  : ""}
              </span>
            </div>
            <div className="form-group">
              <label>Home Phone No</label>
              <input
                type="text"
                placeholder="Enter Your Father Name"
                onChange={(e) => setHomePhone(e.target.value)}
                value={homePhone}
              />
              <span>
                {" "}
                {homePhone?.length > 0 && !checkPhone(homePhone)
                  ? "Invalid Phone Number"
                  : ""}
              </span>
            </div>
          </div>
          <div className="form-wrap">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                placeholder="Enter Your Address"
                onChange={(e) => setAddresss(e.target.value)}
                value={address}
              />
              <span>
                {address?.length > 0 && address?.length < 3
                  ? "Invalid Address"
                  : ""}
              </span>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h2>Education Details</h2>
          <div className="form-wrap">
            <div className="form-group">
              <label>10th Percentage </label>
              <input
                onChange={(e) => setTenPercentage(e.target.value)}
                value={tenPerncentage}
                type="text"
                placeholder="Enter Your 10th Percentage"
              />
              <span></span>
            </div>
            <div className="form-group">
              <label>Year</label>
              <input
                onChange={(e) => setTenYear(e.target.value)}
                value={tenYear}
                type="text"
                placeholder="Enter Your Passing year"
              />
              <span>
                {tenYear?.length > 0 && tenYear?.length !== 4
                  ? "Invalid Year"
                  : ""}
              </span>
            </div>
            <div className="form-group">
              <label>Board Name</label>
              <input
                type="text"
                value={tenBoard}
                onChange={(e) => setTenBoard(e.target.value)}
                placeholder="Enter Your Board Name"
                style={{ textTransform: "capitalize" }}
              />
              <span></span>
            </div>
          </div>
          <div className="form-wrap">
            <div className="form-group">
              <label>12th Percentage </label>
              <input
                value={twelvePercentage}
                onChange={(e) => setTwelevePercentage(e.target.value)}
                type="text"
                placeholder="Enter Your 12th Percentage"
              />
              <span></span>
            </div>
            <div className="form-group">
              <label>Year</label>
              <input
                onChange={(e) => setTweleveYear(e.target.value)}
                value={twelveYear}
                type="text"
                placeholder="Enter Your Passing year"
              />
              <span>
                {" "}
                {twelveYear?.length > 0 && twelveYear?.length !== 4
                  ? "Invalid Year"
                  : ""}
              </span>
            </div>
            <div className="form-group">
              <label>Board Name</label>
              <input
                onChange={(e) => setTweleveBoard(e.target.value)}
                value={tweleveBoard}
                type="text"
                placeholder="Enter Your Board Name"
                style={{ textTransform: "capitalize" }}
              />
              <span></span>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h2>Course Details*</h2>
          <div className="form-wrap">
            <div className="form-group">
              <label>Course Name </label>
              <input
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                type="text"
                placeholder="Enter Your Course Name"
              />
              <span></span>
            </div>
            <div className="form-group">
              <label>Course Duration</label>
              <input
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                type="text"
                placeholder="Enter Your Course Duration"
              />
              <span></span>
            </div>
          </div>
        </div>

        <button className="submit" disabled={loading} onClick={handleSubmit}>
          {loading ? <LoadingOutlined /> : "Submit"}
        </button>
        <br></br>
        <br></br>
      </section>
      <Footer />
    </>
  );
};

export default Addmission;
