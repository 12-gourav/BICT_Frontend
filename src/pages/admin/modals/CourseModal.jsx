import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { course_category } from "../../../constants/CourseCategory";
import { deleteCourse, updateCourse } from "../../../redux/course";
import { encode } from "blurhash";
import { toast } from "react-toastify";

const CourseModal = ({ isModalOpen, setIsModalOpen, temp, fetchRecords }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [rating, setRating] = useState("");
  const [mode, setMode] = useState("");
  const [enrolled, setEnrolled] = useState("");
  const [shortDis, setShortDis] = useState("");
  const [about, setAbout] = useState("");
  const [benifit, setBenifit] = useState("");
  const [img, setImg] = useState([]);
  const [flag, setFlag] = useState("z");
  const [loading2, setLoading2] = useState(false);
  const [loading, setLoading] = useState(false);

  const handSubmit = async () => {
    try {
      if (name === "") {
        return toast.error("Course Name is Required");
      } else if (category === "") {
        return toast.error("Category is Required");
      } else if (price === "") {
        return toast.error("Price is Required");
      } else if (duration === "") {
        return toast.error("Duration is Required");
      } else if (rating === "") {
        return toast.error("Rating is Required");
      } else if (mode === "") {
        return toast.error("Course Type is Required");
      } else if (enrolled === "") {
        return toast.error("Enrolled Students is Required");
      } else if (shortDis === "") {
        return toast.error("Short Discription is Required");
      } else if (about === "") {
        return toast.error("Course About Discription is Required");
      } else if (benifit === "") {
        return toast.error("Course Benifts Discription is Required");
      }
      setLoading(true);

      const myForm = new FormData();
      if (img?.length !== 0) {
        const blurhashArray = await generateBlurhash(img);

        myForm.append("name", name);
        myForm.append("category", category);
        myForm.append("price", price);
        myForm.append("duration", duration);
        myForm.append("rating", rating);
        myForm.append("mode", mode);
        myForm.append("users", enrolled);
        myForm.append("shortDis", shortDis);
        myForm.append("aboutDis", about);
        myForm.append("benifit", benifit);
        myForm.append("img", img);
        myForm.append("hash", blurhashArray);
        myForm.append("flag", "image");
        myForm.append("id", temp?._id);
      } else {
        myForm.append("name", name);
        myForm.append("category", category);
        myForm.append("price", price);
        myForm.append("duration", duration);
        myForm.append("rating", rating);
        myForm.append("mode", mode);
        myForm.append("users", enrolled);
        myForm.append("shortDis", shortDis);
        myForm.append("aboutDis", about);
        myForm.append("benifit", benifit);
        myForm.append("flag", "z");
        myForm.append("id", temp?._id);
      }

      const result = await updateCourse(myForm);
      if (result?.data?.data) {
        toast.success("Course Update Successfully");
        setIsModalOpen(false);
        fetchRecords();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const generateBlurhash = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, img.width, img.height);
            const blurhashArray = encode(
              imageData.data,
              img.width,
              img.height,
              4,
              3
            );
            resolve(blurhashArray);
          };
          img.src = reader.result;
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const handleDelete = async () => {
    try {
      if (window.confirm("Are you sure want to delete this record")) {
        setLoading2(true);
        const result = await deleteCourse(temp?._id);
        if (result?.data?.data) {
          toast.success("Course Delete Successfully");
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
    setCategory(temp?.category);
    setPrice(temp?.price);
    setDuration(temp?.duration);
    setRating(temp?.rating);
    setMode(temp?.mode);
    setEnrolled(temp?.users);
    setShortDis(temp?.shortDis);
    setAbout(temp?.aboutDis);
    setBenifit(temp?.benifit);
  }, [temp?._id]);

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>React Web Development</h3>
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
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="Enter Your First Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Course Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Select Category</option>
                  {course_category?.map((d) => (
                    <option key={d?.id} value={d?.name}>
                      {d?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Price</label>
                <input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="Enter Your Course Price"
                />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Duration</label>
                <input
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  type="text"
                  placeholder="Enter Your Course Duration"
                />
              </div>
            </div>
          </div>
          <div className="course-mid">
            <div className="cm-left">
              <div className="box">
                <label>Rating</label>
                <input
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  type="text"
                  placeholder="Enter Your Course Ratings"
                />
              </div>
            </div>
            <div className="cm-right">
              <div className="box">
                <label>Mode</label>
                <select value={mode} onChange={(e) => setMode(e.target.value)}>
                  <option value={""}>Select Course Mode</option>
                  <option value="Online">Online</option>
                  <option value="Offline">Offline</option>
                  <option value="Online + Offline">Online + Offline</option>
                </select>
              </div>
            </div>
          </div>
          <div className="course-mid2">
            <label>Number of Enrolled Students</label>
            <input
              value={enrolled}
              onChange={(e) => setEnrolled(e.target.value)}
              type="text"
              placeholder="Enter Number of Enrolled Students"
            />
          </div>
          <div className="course-mid2">
            <label>Short Course Discription</label>
            <textarea
              value={shortDis}
              onChange={(e) => setShortDis(e.target.value)}
              placeholder="Enter your Discription"
            />
          </div>
          <div className="course-mid2">
            <label> About Course </label>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Enter your Discription"
            />
          </div>
          <div className="course-mid2">
            <label>Course Benifits</label>
            <textarea
              value={benifit}
              onChange={(e) => setBenifit(e.target.value)}
              placeholder="Enter your Discription"
              res
            />
          </div>
          <div className="course-mid2">
            <label>Course Image</label>
            <div className="img-upload-btn">
              <input type="file" onChange={(e) => setImg(e.target.files[0])} />
            </div>
          </div>
          <img
            src={temp?.img?.url}
            alt="image"
            style={{
              width: "100px",
              height: "100px",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="btn-set">
          <button className="" onClick={handSubmit} disabled={loading}>
            {loading ? "Loading..." : "Update Course"}
          </button>
          <button className="save" onClick={handleDelete} disabled={loading2}>
            {loading2 ? "Loading..." : "Delete Course"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CourseModal;
