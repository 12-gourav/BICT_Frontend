import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { deleteNews, updateNews } from "../../../redux/news";
import { LoadingOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { deleteExam, updateExam } from "../../../redux/exam";

const ExamModal = ({ isModalOpen, setIsModalOpen, temp, fetchrecords }) => {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");
  const [link,setLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

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
      const result = await updateExam(temp?._id, title, dis,link);
      if (result?.data?.data) {
        toast.success("Exam Updated Successfully");
        fetchrecords();
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setTitle("");
      setDis("");
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
          setLoading2(true);
          const result = await deleteExam(temp?._id);
          if (result?.data?.data) {
            Swal.fire({
              title: "Delete!",
              text: "Exam delete successfully",
              icon: "success",
            });
            fetchrecords();
            setIsModalOpen(false);
          }
        }
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    setTitle(temp?.title);
    setDis(temp?.discription);
    setLink(temp?.link)
  }, [temp?._id]);

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Exam Details</h3>
        </div>
      }
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}
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
              placeholder="Paste Exam Link"
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
          <button disabled={loading} onClick={handleSubmit}>
            {loading ? <LoadingOutlined /> : "Update Exam"}
          </button>
          <button className="save" disabled={loading2} onClick={handleDelete}>
            {loading2 ? <LoadingOutlined /> : "Delete Exam"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ExamModal;
