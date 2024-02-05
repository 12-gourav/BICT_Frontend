import React, { useState } from "react";
import { Modal } from "antd";
import { toast } from "react-toastify";
import { createGallery } from "../../../redux/gallery";
import { encode } from "blurhash";

const CreateGallery = ({ isModalOpen2, setIsModalOpen2, fetchRecords }) => {
  const [caption, setCaption] = useState("");
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    try {
      if (caption === "") {
        return toast.error("Caption are Required");
      }
      if (img?.length === 0) {
        return toast.error("Image is Required");
      }
      setLoading(true);
      const blurhashArray = await generateBlurhash(img);
      console.log(blurhashArray);
      const myForm = new FormData();
      myForm.append("caption", caption);
      myForm.append("img", img);
      myForm.append("hash", blurhashArray);

      const result = await createGallery(myForm);
      if (result?.data?.data) {
        toast.success("Image is Upload Successfully");
        setCaption("");
        setImg([]);
        setIsModalOpen2(false);
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

  // <Blurhash
  //             hash="LIO9Y*TLIWM_}FwbxUW=E3NLS#s-"
  //             width={400}
  //             height={300}
  //             resolutionX={32}
  //             resolutionY={32}
  //             punch={1}
  //           />

  return (
    <Modal
      centered
      width={1000}
      title={
        <div className="s-top">
          <h3>Upload Image</h3>
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
            <label>Event Name</label>

            <input
              onChange={(e) => setCaption(e.target.value)}
              value={caption}
              type="text"
              placeholder="Enter Event Name"
            />
          </div>
          <div className="course-mid2">
            <label>Upload Image</label>
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
          <button className="save" disabled={loading} onClick={handleUpload}>
            {loading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default CreateGallery;
