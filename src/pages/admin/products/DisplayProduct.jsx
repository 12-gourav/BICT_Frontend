import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import StdentModal from "../modals/StdentModal";
import CreateStdentModal from "../modals/CreateStudentModal";
import { FetchStudents, searchQuery } from "../../../redux/action";
import LoadingTable from "../../../components/admin/LoadingTable";
import NoData from "../../../components/admin/NoData";

const DisplayProduct = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [temp, setTemp] = useState();
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await FetchStudents(currentPage);
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

  const SearchResult = async () => {
    try {
      if (query === "") {
        return fetchRecords();
      }
      setCurrentPage(1)
      setLoading(true);
      const result = await new Promise((resolve) =>
        setTimeout(async () => {
          const data = await searchQuery(query);
          resolve(data);
        }, 1000)
      );

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

  useEffect(() => {
    fetchRecords();
  }, [currentPage, flag]);

  return (
    <section className="student">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button onClick={SearchResult} disabled={loading}>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">Search by Name, Email Address, Phone Number</p>
      <div className="wrapper">
        <div className="info-top">
          <p>
            Display {state?.length} out of {total} Records
          </p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>Create Record</button>
          </div>
        </div>
        {state?.length === 0 && !loading ? (
          <NoData />
        ) : (
          <div className="content-wrapper">
            {loading ? (
              <LoadingTable
                z={[1, 2, 3, 4, 5]}
                obj={["Date", "Name", "Contact", "Course", "Duration"]}
              />
            ) : (
              <table>
                <thead>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Duration</th>
                  <th>Payment Status</th>
                </thead>
                <tbody>
                  {state?.map((d, i) => (
                    <tr className={i % 2 === 0 ? "active" : ""} key={d?._id}>
                      <td>{new Date(d?.createdAt)?.toDateString()}</td>
                      <td
                        style={{ textTransform: "capitalize" }}
                        className="adm"
                      >
                        <span
                          onClick={() => {
                            setIsModalOpen(true);
                            setTemp(d);
                          }}
                        >
                          {d?.firstName + " " + d?.lastName}
                        </span>
                        <span style={{ fontWeight: "400", fontSize: "0.8rem" }}>
                          Course: {d?.course || "N/A"}
                        </span>
                        <span>Addmission ID: {d?.addmissionID || "N/A"}</span>
                      </td>

                      <td>+91 {d?.phone} </td>
                      <td style={{ textTransform: "capitalize" }}>
                        {d?.duration}
                      </td>
                      <td style={{ textTransform: "capitalize" }}>
                        <span
                          className={d?.status === "Paid" ? "approved" : "fail"}
                        >
                          {" "}
                          {d?.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        <div className="page">
          {total > 10 && (
            <Pagination
              total={total}
              current={currentPage}
              onChange={setCurrentPage}
            />
          )}
        </div>
      </div>
      {isModalOpen && (
        <StdentModal
          temp={temp}
          setFlag={setFlag}
          fetchRecords={fetchRecords}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateStdentModal
          fetchRecords={fetchRecords}
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayProduct;
