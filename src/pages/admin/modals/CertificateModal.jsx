import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { course_category } from "../../../constants/CourseCategory";
import { toast } from "react-toastify";
import {
  deleteertificates,
  updateCertificates,
} from "../../../redux/certificate";

const CertificateModal = ({
  isModalOpen,
  setIsModalOpen,
  fetchRecords,
  temp,
}) => {
  const [name, setName] = useState("");
  const [certificate, setCertificate] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState([]);
  const [exist, setExist] = useState();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleSubmit = async () => {
    try {
      if (name === "") {
        return toast.error("Name is Required");
      } else if (certificate === "") {
        return toast.error("Certificate Number is Required");
      } else if (course === "") {
        return toast.error("Course Name is Required");
      } else if (category === "") {
        return toast.error("Category is Required");
      }
      setLoading(true);
      const myForm = new FormData();
      myForm.append("id", temp?._id);
      myForm.append("name", name);
      myForm.append("course", course);
      myForm.append("category", category);
      myForm.append("certificate", certificate);
      myForm.append("img", img);
      myForm.append("flag", img?.length === 0 ? "image" : "z");

      const result = await updateCertificates(myForm);
      if (result?.data?.data) {
        toast.success("Certificate Update Successfully");
        setName("");
        setCourse("");
        setCategory("");
        setCertificate("");
        setImg([]);
        fetchRecords();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
      if (window.confirm("Are you sure you want delete this record")) {
        setLoading2(true);
        const result = await deleteertificates(temp?._id);
        if (result?.data) {
          toast.success("Certificate delete successfully");
          fetchRecords();
          setIsModalOpen(false);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    setName(temp?.name);
    setCourse(temp?.course);
    setCategory(temp?.category);
    setCertificate(temp?.certificate);
    setExist(temp?.img?.url);
  }, [temp?._id]);

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
                <label>Certificate Number</label>
                <input
                  onChange={(e) => setCertificate(e.target.value)}
                  value={certificate}
                  type="text"
                  placeholder="Enter certificate Number"
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
                <label>Category</label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option value="">Select Category</option>
                  {course_category?.map((d) => (
                    <option key={d?.id} value={d?.name}>
                      {d?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid2">
            <label>Upload Certificate</label>
            <div className="img-upload-btn">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
          <img
            src={exist}
            alt="exist image"
            style={{ width: "150px", height: "150px", objectFit: "contain" }}
          />
        </div>
        <div className="btn-set">
          <button className="" onClick={handleSubmit} disabled={loading}>
            {loading ? "Uploading..." : "Update Certificate"}
          </button>
          <button className="save" onClick={handleDelete} disabled={loading2}>
            {loading2 ? "Removing..." : "Delete"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CertificateModal;
