import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import CreateCertificateModal from "../modals/CreateCertificateModal";
import CertificateModal from "../modals/CertificateModal";
import { getResults } from "../../../redux/result";
import NoData from "../../../components/admin/NoData";
import LoadingTable from "../../../components/admin/LoadingTable";
import CreateResultModal from "../modals/CreateResultModal";
import ResultModal from "../modals/ResultModal";

const DisplayResult = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [temp, setTemp] = useState();

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await getResults(current, query);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total || 0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const SearchRec = async () => {
    try {
      if (query === "") {
        return fetchRecords();
      }
      setLoading2(true);

      const result = await fetchRecords(current, query);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total || 0);
        setCurrent(1);
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
    <section className="student">
      <div className="search-bar">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
        />
        <button onClick={SearchRec} disabled={loading2}>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">
        Search by Name, Father Name, Roll Number and Course
      </p>
      <div className="wrapper">
        <div className="info-top">
          <p>
            Display {state?.length} out of {total} Records
          </p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>Create Result</button>
          </div>
        </div>
        {state?.length === 0 && !loading ? (
          <NoData />
        ) : (
          <div className="content-wrapper">
            {loading ? (
              <LoadingTable
                z={[1, 2, 3, 4, 5]}
                obj={[
                  "Date",
                  "Name",
                  "Father Name",
                  "Roll Number",
                  "Course",
                  "Pass Status",
                ]}
              />
            ) : (
              <table>
                <thead>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Father Name</th>
                  <th>Roll Number</th>
                  <th>Course</th>
                  <th>Pass Status</th>
                </thead>
                <tbody>
                  {state?.map((d, i) => (
                    <tr className={i % 2 === 0 ? "active" : ""} key={d?._id}>
                      <td>{new Date(d?.createdAt)?.toDateString()}</td>
                      <td className="active">
                        <span
                          onClick={() => {
                            setIsModalOpen(true);
                            setTemp(d);
                          }}
                        >
                          {d?.name}
                        </span>
                      </td>
                      <td>{d?.fatherName}</td>

                      <td>{d?.rollNumber} </td>
                      <td>{d?.course}</td>
                      <td>
                        {d?.status ? (
                          <span className="approved">Pass</span>
                        ) : (
                          <span className="fail">Fail</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        {total > 10 && (
          <div className="page">
            <Pagination total={total} current={current} onChange={setCurrent} />
          </div>
        )}
      </div>
      {isModalOpen && (
        <ResultModal
          temp={temp}
          fetchRecords={fetchRecords}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateResultModal
          isModalOpen2={isModalOpen2}
          fetchRecords={fetchRecords}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayResult;
