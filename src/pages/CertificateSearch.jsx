import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import Confetti from "react-confetti";
import { toast } from "react-toastify";
import { searchSingleCertificates } from "../redux/certificate";
import img from "../assets/img/b.svg";
import { Modal, Skeleton } from "antd";
import { jsPDF } from "jspdf";
import { LoadingOutlined } from "@ant-design/icons";

const CertificateSearch = () => {
  const [state, setState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [state2, setState2] = useState([]);
  const [query, setQuery] = useState("");
  const [loading2, setLoading2] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = async () => {
    try {
      if (query === "") {
        setState2([]);
        return toast.error("Certificate Number is Required");
      }
      setLoading(true);

      const result = await searchSingleCertificates(query);
      if (result?.data?.data) {
        setState2(result?.data?.data);
        setState(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (state) {
      setTimeout(() => {
        setState(false);
      }, 10000);
    }
  }, [state]);

  const downloadImage = async () => {
    try {
      setLoading2(true);

      // Fetch the image from Cloudinary (original size)
      const response = await fetch(state2?.img?.url?.replace("http", "https"));
      const blob = await response.blob();

      // Create a download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Certificate_${state2?._id}.jpg`; // Save as JPG
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the image:", error);
    } finally {
      setLoading2(false);
    }
  };

  const downloadPdf = async () => {
    try {
      setLoading2(true);

      // Fetch the image as a blob
      const response = await fetch(state2?.img?.url?.replace("http", "https"));
      const blob = await response.blob();
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64data = reader.result;

        // Create an A4 PDF (210mm x 297mm)
        const pdf = new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
        });

        const pageWidth = 210;
        const pageHeight = 297;

        // Create an Image to get its natural dimensions
        const img = new Image();
        img.src = base64data;
        img.onload = () => {
          const imgWidth = img.width;
          const imgHeight = img.height;

          // Calculate aspect ratio
          const aspectRatio = imgWidth / imgHeight;

          // Set max dimensions for A4
          let displayWidth = pageWidth - 30; // Keep margin
          let displayHeight = displayWidth / aspectRatio;

          // If height exceeds page height, adjust
          if (displayHeight > pageHeight - 40) {
            displayHeight = pageHeight - 40;
            displayWidth = displayHeight * aspectRatio;
          }

          // Center the image
          const x = (pageWidth - displayWidth) / 2;
          const y = (pageHeight - displayHeight) / 2;

          pdf.addImage(base64data, "JPEG", x, y, displayWidth, displayHeight);
          pdf.save(`Certificate_${state2?._id}.pdf`);
        };
      };

      reader.readAsDataURL(blob);
    } catch (error) {
      console.error("Error fetching the image:", error);
    } finally {
      setLoading2(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className="certificate">
        {state && (
          <Confetti width={window.innerWidth} height={window.innerHeight} />
        )}
        <h2>
          Empower Your <span>Tech Journey</span>
        </h2>
        <p>Explore and Obtain Certificates at Our Leading Computer Institute</p>
        <div className="content">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Certificate Number"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <button onClick={handleSubmit} disabled={loading}>
              {loading ? <LoadingOutlined /> : "Search"}
            </button>
          </div>
          {loading ? (
            <div className="display">
              <Skeleton.Image active style={{ minHeight: "400px" }} />
            </div>
          ) : (
            <div className="display">
              {state2?.length === 0 ? (
                <div className="no-data">
                  <img
                    src={img}
                    alt="img"
                    className="no"
                    style={{ width: "10rem" }}
                  />
                  <h4>No Certificate Found!</h4>
                </div>
              ) : (
                <div className="certificate-image">
                  <img src={state2?.img?.url} className="cer" />
                  <button onClick={() => setOpen(true)} disabled={loading2}>
                    {loading2 ? <LoadingOutlined /> : "Download Certificate"}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
      {open && (
        <DownloadOpenModal
          open={open}
          setOpen={setOpen}
          jpgDownload={downloadImage}
          pdfDownload={downloadPdf}
        />
      )}

      <Footer />
    </>
  );
};

export default CertificateSearch;

export const DownloadOpenModal = ({
  open,
  setOpen,
  pdfDownload,
  jpgDownload,
}) => {
  return (
    <Modal
      centered
      open={open}
      onCancel={() => setOpen(false)}
      title={
        <div className="modal-head">
          <h4>Download Certificate</h4>
        </div>
      }
      footer={false}
    >
      <div className="download_open">
        <p onClick={() => jpgDownload()}> <i className='bx bxs-cloud-download'></i>Download Certificate in JPG Formate</p>
        <p onClick={() => pdfDownload()}> <i className='bx bxs-cloud-download'></i>Download Certificate in PDF Formate</p>
      </div>
    </Modal>
  );
};
