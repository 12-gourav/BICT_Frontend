import React, { useEffect, useState, Suspense } from "react";
import img from "../../../assets/img/banner.jpg";
import { Pagination, Skeleton } from "antd";
import GalleryModal from "../modals/GalleryModal";
import CreateGallery from "../modals/CreateGallery";
import {
  deletegallery,
  getGallery,
  searchGallery,
} from "../../../redux/gallery";
import { Blurhash } from "react-blurhash";
import { toast } from "react-toastify";
import NoData from "../../../components/admin/NoData";
import Swal from "sweetalert2";

const DisplayGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [temp, setTemp] = useState();
  const [query, setQuery] = useState("");
  const [loading2, setLoading2] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await getGallery(current);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const DeleteRecord = async (id) => {
    Swal.fire({
      title: "Are you sure want delete image?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deletegallery(id);
        if (result?.data?.data) {
          fetchRecords();
          Swal.fire("Image Delete Successfully!", "", "success");
        }
      }
    });
  };

  const searchRecords = async () => {
    try {
      if (query === "") {
        fetchRecords();
      }
      setLoading2(true);
      const result = await searchGallery(current, query);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [current]);

  return (
    <section className="gallery-admin">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={loading2}
          onClick={searchRecords}
          style={{ cursor: "pointer" }}
        >
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">Search by Caption</p>
      <div className="info-top">
        <p>
          Display {state?.length} out of {total} Records
        </p>
        <div className="btn-set">
          <button onClick={() => setIsModalOpen2(true)}>Upload Image</button>
        </div>
      </div>
      <div className="m-wrap">
        {state?.length === 0 && !loading ? (
          <NoData />
        ) : (
          <div className="gallery-container">
            {loading
              ? [1, 2, 3, 5, 6, 78, 89, 0]?.map((x) => (
                  <div
                    className="g-card"
                    key={x}
                    style={{ marginBottom: "1rem" }}
                  >
                    <Skeleton.Image
                      style={{ width: "18rem", height: "16rem !important" }}
                      active
                    />
                  </div>
                ))
              : state?.map((d) => (
                  <div className="img-box" key={d?._id}>
                    <Suspense fallback={<div>Loading...</div>}>
                      {!imageLoaded && (
                        <Blurhash
                          hash={d?.img?.hash || "LIO9Y*TLIWM_}FwbxUW=E3NLS#s-"} // Assuming blurhash is stored in img.blurhash
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

                    {/* <img src={d?.img?.url} alt="img" /> */}
                    <div className="setr">
                      <div
                        className="s"
                        onClick={() => {
                          setIsModalOpen(true);
                          setTemp(d);
                        }}
                      >
                        <i className="bx bx-edit-alt"></i>
                      </div>
                      <div className="s" onClick={() => DeleteRecord(d?._id)}>
                        <i
                          className="bx bx-x"
                          style={{ marginTop: "2px", marginRight: "1px" }}
                        ></i>
                      </div>
                    </div>
                    <div className="caption">
                      <p>{d?.caption}</p>
                      <span>{new Date(d?.createdAt)?.toDateString()}</span>
                    </div>
                  </div>
                ))}
          </div>
        )}
        {total > 10 && (
          <div className="page">
            <Pagination total={total} onChange={setCurrent} />
          </div>
        )}
      </div>

      {isModalOpen && (
        <GalleryModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          temp={temp}
          fetchRecords={fetchRecords}
        />
      )}
      {isModalOpen2 && (
        <CreateGallery
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
          fetchRecords={fetchRecords}
        />
      )}
    </section>
  );
};

export default DisplayGallery;
