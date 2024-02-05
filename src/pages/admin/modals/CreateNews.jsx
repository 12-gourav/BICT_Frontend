import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { createNews } from "../../../redux/news";
import { LoadingOutlined } from "@ant-design/icons";

const CreateNews = ({ isModalOpen2, setIsModalOpen2, fetchrecords }) => {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      if (title === "") {
        return toast.error("Title is Required");
      } else if (dis === "") {
        return toast.error("Discription is Required");
      }
      setLoading(true);
      const result = await createNews(title, dis);
      if (result?.data?.data) {
        toast.success("News Created Successfully");
        fetchrecords();
        setIsModalOpen2(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTitle("");
      setDis("");
    }
  };

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Create News</h3>
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
            <label>News Title</label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter News title"
            />
          </div>
          <div className="course-mid2">
            <label>News Discription</label>
            <textarea
              onChange={(e) => setDis(e.target.value)}
              value={dis}
              type="text"
              placeholder="Enter News Discription"
            />
          </div>
        </div>
        <div className="btn-set">
          <button className="save" disabled={loading} onClick={handleSubmit}>
            {loading ? <LoadingOutlined /> : "Create News"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateNews;
