import React, { useEffect, useState, Suspense } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import { getGallery } from "../redux/gallery";
import { Pagination, Skeleton } from "antd";
import { Blurhash } from "react-blurhash";
import img from "../assets/img/b.svg";
import { LoadingOutlined } from "@ant-design/icons";

const Gallery = () => {
  const [state, setState] = useState([]);
  const [loading, setloading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fetchRecords = async () => {
    try {
      setloading(true);

      const result = await getGallery(current);

      if (result?.data?.data) {
        setState(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const downloadImage = async (url, id) => {
    try {
      setLoading2(true);
      const downloadUrl = `${url.replace("/upload/", "/upload/fl_attachment:")?.replace("http","https")}`;
      const a = document.createElement("a");
      a.href = downloadUrl; 
      a.download = `${id}_image.jpg`; 
      document.body.appendChild(a);
      a.click(); // Trigger the download
      document.body.removeChild(a); // Clean up the DOM
    } catch (error) {
      console.error("Error downloading the image:", error);
    } finally {
      setLoading2(false);
    }
  };
  
  return (
    <>
      <Navbar />
      <section className="gallery">
        <h2>Capturing Moments in Pixels</h2>
        <p> Explore Our Dazzling Image Gallery for a Visual Feast!</p>
        {loading ? (
          <div className="gallery-container">
            {[1, 2, 3, 5, 6, 78, 89, 0]?.map((x) => (
              <div className="g-card" key={x}>
                <Skeleton.Image
                  style={{ width: "18rem", height: "16rem !important" }}
                  active
                />
              </div>
            ))}
          </div>
        ) : state?.length === 0 ? (
          <div className="no-data">
            <img src={img} alt="nodata" style={{ width: "10rem" }} />
          </div>
        ) : (
          <div className="gallery-container">
            {state?.map((d) => (
              <div className="g-card" key={d?._id}>
                <Suspense fallback={<div>Loading...</div>}>
                  {!imageLoaded && (
                    <Blurhash
                      hash={d?.img?.hash || "LIO9Y*TLIWM_}FwbxUW=E3NLS#s-"}
                      width={"100%"}
                      height={300}
                      resolutionX={32}
                      resolutionY={32}
                      punch={1}
                      style={{ borderRadius: "5px" }}
                    />
                  )}
                  <img
                    src={d?.img?.url} // Cloudinary image URL
                    alt="img"
                    onLoad={handleImageLoad}
                    style={{ display: !imageLoaded ? "none" : "block" }}
                  />
                </Suspense>
                {/* <img src={d?.img?.url} alt="image" /> */}

                <div className="caption">
                  <p>{d?.caption}</p>
                  <b>{new Date(d?.createdAt).toLocaleDateString()}</b>
                </div>
                <div
                  className="download-icon"
                  onClick={() => downloadImage(d?.img?.url,d?._id)}
                >
                  {loading2 ? (
                    <LoadingOutlined />
                  ) : (
                    <i className="bx bxs-download"></i>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        <br></br>
        <center>
          {total > 10 && <Pagination total={total} onChange={setCurrent} />}
        </center>
      </section>
      <Footer />
    </>
  );
};

export default Gallery;
