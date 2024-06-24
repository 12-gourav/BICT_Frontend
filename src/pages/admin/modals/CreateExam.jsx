import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { createExam } from "../../../redux/exam";

const CreateExam = ({ isModalOpen2, setIsModalOpen2, fetchrecords }) => {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");
  const [link,setLink] = useState("")
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (title === "") {
        return toast.error("Title is Required");
      } else if (dis === "") {
        return toast.error("Discription is Required");
      }
      else if (link === "") {
        return toast.error("Link is Required");
      }
      setLoading(true);
      const result = await createExam(title, dis,link);
      if (result?.data?.data) {
        toast.success("Exam Created Successfully");
        fetchrecords();
        setIsModalOpen2(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTitle("");
      setDis("");
      setLink("")
    }
  };

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Create Exam</h3>
        </div>
      }
      open={isModalOpen2}
      onOk={() => setIsModalOpen2(false)}
      onCancel={() => setIsModalOpen2(false)}
      footer={false}
    >
      <section className="course-modal">
        <div className="course-wrap">
          <div className="course-mid2">
            <label>Exam Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter Exam title"
            />
          </div>
          <div className="course-mid2">
            <label>Exam Link</label>
            <input
              onChange={(e) => setLink(e.target.value)}
              value={link}
              type="text"
              placeholder="Enter Exam Link"
            />
          </div>
          <div className="course-mid2">
            <label>Exam Discription</label>
            <textarea
              onChange={(e) => setDis(e.target.value)}
              value={dis}
              type="text"
              placeholder="Enter Exam Discription"
            />
          </div>
    
        </div>
        <div className="btn-set">
          <button className="save" disabled={loading} onClick={handleSubmit}>
            {loading ? <LoadingOutlined /> : "Create Exam"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateExam;
