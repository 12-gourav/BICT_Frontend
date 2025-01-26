import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";
import { deleteResult, updateResult } from "../../../redux/result";

const ResultModal = ({
  isModalOpen,
  setIsModalOpen,
  fetchRecords,
  temp,
}) => {
  const [name, setName] = useState("");
  const [father, setFather] = useState("");
  const [roll, setRoll] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [loading2, setLoading2] = useState(false);
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
      setLoading2(true);
     

      const result = await updateResult(temp?._id,roll,name,father,course,status);
      if (result?.data?.data) {
        toast.success("Result Update Successfully");
        setName("");
        setFather("")
        setCourse("");
        setStatus("");
        setRoll("");
        fetchRecords();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  const handleDelete = async () => {
    try {
      Swal.fire({
        title: "Are you sure you want delete this record?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setLoading(true);
          const result = await deleteResult(temp?._id);
          if (result?.data) {
            Swal.fire({
              title: "Delete!",
              text: "Result delete successfully",
              icon: "success",
            });
            fetchRecords();
            setIsModalOpen(false);
          }
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setName(temp?.name);
    setFather(temp?.fatherName)
    setCourse(temp?.course);
    setStatus(temp?.status);
    setRoll(temp?.rollNumber);

  }, [temp?._id]);

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Result Details</h3>
        </div>
      }
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
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
          <button
            style={{ fontWeight: "400" }}
            className=""
            onClick={handleSubmit}
            disabled={loading2}
          >
            {loading2 ? <LoadingOutlined/> : "Update Result"}
          </button>
          <button
            style={{ fontWeight: "400" }}
            className="save"
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? <LoadingOutlined/> : "Delete"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ResultModal;
