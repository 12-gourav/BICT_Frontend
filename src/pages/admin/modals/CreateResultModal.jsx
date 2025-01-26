import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { createResult } from "../../../redux/result";
import { LoadingOutlined } from "@ant-design/icons";

const CreateResultModal = ({ isModalOpen2, setIsModalOpen2, fetchRecords }) => {
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (name === "") {
        return toast.error("Name is Required");
      } else if (father === "") {
        return toast.error("Father Name is Required");
      } else if (roll === "") {
        return toast.error("Roll Number is Required");
      } else if (course === "") {
        return toast.error("Course Name is Required");
      } else if (status === "") {
        return toast.error("status is Required");
      }
      setLoading(true);
      const result = await createResult(roll, name, father, course, status);
      if (result?.data?.data) {
        toast.success("Result Create Successfully");
        setName("");
        setFather("");
        setRoll("");
        setStatus("");
        setCourse("");
        fetchRecords();
        setIsModalOpen2(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Create Result</h3>
        </div>
      }
      open={isModalOpen2}
      onOk={() => setIsModalOpen2(false)}
      onCancel={() => setIsModalOpen2(false)}
      footer={false}
    >
      <section className="course-modal">
        <div className="course-wrap">
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Student Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  placeholder="Enter Student Name"
                />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Father Name</label>
                <input
                  onChange={(e) => setFather(e.target.value)}
                  value={father}
                  type="text"
                  placeholder="Enter Father Name"
                />
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Course Name</label>
                <input
                  onChange={(e) => setCourse(e.target.value)}
                  value={course}
                  type="text"
                  placeholder="Enter Your Course Name"
                />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Result Status</label>
                <select
                  onChange={(e) => setStatus(e.target.value)}
                  value={status}
                >
                  <option value="">Select Status</option>
                  <option value={true}>Pass</option>
                  <option value={false}>Fail</option>
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Roll Number</label>
                <input
                  onChange={(e) => setRoll(e.target.value)}
                  value={roll}
                  type="text"
                  placeholder="Enter Roll Number"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="btn-set">
          <button className="save" onClick={handleSubmit} disabled={loading}>
            {loading ? <LoadingOutlined /> : "Create Result"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateResultModal;
