import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { updateGallery } from "../../../redux/gallery";
import { toast } from "react-toastify";
import { encode } from "blurhash";

const GalleryModal = ({ isModalOpen, setIsModalOpen, fetchRecords, temp }) => {
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState("");
  const [url, setUrl] = useState("");
  const [flag, setFlag] = useState("z");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      if (caption === "") {
        return toast.error("Caption are Required");
      }
      setLoading(true);
      const myForm = new FormData();
      if (img?.length !== 0) {
        setFlag(true);
        const blurhashArray = await generateBlurhash(img);
        myForm.append("caption", caption);
        myForm.append("img", img);
        myForm.append("flag", "image");
        myForm.append("hash", blurhashArray);
        myForm.append("id", temp?._id);
      } else {
        myForm.append("caption", caption);
        myForm.append("flag", "z");
        myForm.append("id", temp?._id);
      }

      const result = await updateGallery(myForm);
      if (result?.data?.data) {
        toast.success("Image Data Update Successfully");
        setCaption("");
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

  useEffect(() => {
    setCaption(temp?.caption);
    setUrl(temp?.img?.url);
  }, [temp?._id]);

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Image Details</h3>
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
            <label>Event Name</label>
            <input
              type="text"
              placeholder="Enter Event Name"
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
            />
          </div>
          <div className="course-mid2">
            <label>Upload Image</label>
            <div className="img-upload-btn">
              <input type="file" onChange={(e) => setImg(e.target?.files[0])} />
            </div>
          </div>
          <img
            src={url}
            alt="img"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          ></img>
        </div>
        <div className="btn-set">
          <button className="save" onClick={handleUpload} disabled={loading}>
            {" "}
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default GalleryModal;
