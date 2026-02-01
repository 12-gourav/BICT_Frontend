import { useState } from "react";
import img from "../../assets/img/cer1.svg";
import { LoadingOutlined } from "@ant-design/icons";

const Acceridation = () => {
  const [loading, setLoading] = useState(false);

  const url =
    "https://res.cloudinary.com/dvcmd1fwr/image/upload/v1769967489/BASHAR_INSTITUTE_OF_COMPUTER_EDUCATION_SOCIETY_QMS_ibtpav.pdf";

  const url2 =
    "https://res.cloudinary.com/dvcmd1fwr/image/upload/v1769967488/WhatsApp_Image_2026-01-22_at_6.47.14_PM_fblncy.jpg";

  const downloadCertificate = async (url, id) => {
    try {
      setLoading(true);

      const downloadUrl = url.replace("/upload/", "/upload/fl_attachment:");

      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = `${id}_certificate.pdf`;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error downloading certificate:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="acceredation">
      <h3>
        Accreditations <span>&</span> Certifications
      </h3>

      <p className="dis">
        We are a government-recognized and ISO-certified institute committed to
        delivering professional computer education with quality assurance
        standards.
      </p>

      <div className="acc_wrap">
        <div className="acc_card">
          <img src={img} alt="certificate" />
          <h2>Approved by RAPL</h2>
          <p>Royal Assessments Pvt. Ltd.</p>

          <button
            onClick={() => downloadCertificate(url, "ISO9001")}
            disabled={loading}
          >
            {loading ? <LoadingOutlined /> : "View Certificate"}
          </button>
        </div>
        <div className="acc_card">
          <img src={img} alt="certificate" />
          <h2>Approved by RAPL</h2>
          <p>Royal Assessments Pvt. Ltd.</p>

          <button
            onClick={() => downloadCertificate(url2, "ISO9001")}
            disabled={loading}
          >
            {loading ? <LoadingOutlined /> : "View Certificate"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Acceridation;
