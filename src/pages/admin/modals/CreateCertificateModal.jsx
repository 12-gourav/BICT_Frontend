import React, { useState } from "react";
import { Modal } from "antd";
import { course_category } from "../../../constants/CourseCategory";
import { toast } from "react-toastify";
import { createCertificates } from "../../../redux/certificate";

const CreateCertificateModal = ({
  isModalOpen2,
  setIsModalOpen2,
  fetchRecords,
}) => {
  const [name, setName] = useState("");
  const [certificate, setCertificate] = useState("");
  const [course, setCourse] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);

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
      } else if (img?.length === 0) {
        return toast.error("Certificate is Required");
      }
      setLoading(true);
      const myForm = new FormData();
      myForm.append("name", name);
      myForm.append("course", course);
      myForm.append("category", category);
      myForm.append("certificate", certificate);
      myForm.append("img", img);

      const result = await createCertificates(myForm);
      if (result?.data?.data) {
        toast.success("Certificate Upload Successfully");
        setName("");
        setCourse("");
        setCategory("");
        setCertificate("");
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
          <h3>Create Certificate</h3>
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
        </div>
        <div className="btn-set">
          <button className="save" onClick={handleSubmit} disabled={loading}>
            {loading ? "Uploading..." : "Create Certificate"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateCertificateModal;
