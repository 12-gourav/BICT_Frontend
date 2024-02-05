import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import StdentModal from "../modals/StdentModal";
import CreateStdentModal from "../modals/CreateStudentModal";
import { FetchStudents, searchQuery } from "../../../redux/action";

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
        setCurrentPage(1);
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
      setLoading(true);
      const result = await searchQuery(query);
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
        <div className="content-wrapper">
          {loading ? (
            "Loading"
          ) : (
            <table>
              <thead>
                <th>Date</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Course</th>
                <th>Duration</th>
              </thead>
              <tbody>
                {state?.map((d, i) => (
                  <tr className={i % 2 === 0 ? "active" : ""} key={d?._id}>
                    <td>{new Date(d?.createdAt)?.toDateString()}</td>
                    <td style={{ textTransform: "capitalize" }}>
                      <span
                        onClick={() => {
                          setIsModalOpen(true);
                          setTemp(d);
                        }}
                      >
                        {d?.firstName + " " + d?.lastName}
                      </span>
                    </td>

                    <td>+91 {d?.phone} </td>
                    <td style={{ textTransform: "capitalize" }}>{d?.course}</td>
                    <td style={{ textTransform: "capitalize" }}>
                      {d?.duration}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className="page">
          {total > 10 && <Pagination total={total} onChange={setCurrentPage} />}
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
