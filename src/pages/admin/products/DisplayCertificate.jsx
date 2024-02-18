import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import CreateCertificateModal from "../modals/CreateCertificateModal";
import CertificateModal from "../modals/CertificateModal";
import {
  getCertificates,
  searchCertificates,
} from "../../../redux/certificate";
import NoData from "../../../components/admin/NoData";
import LoadingTable from "../../../components/admin/LoadingTable";

const DisplayCertificate = () => {
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
      const result = await getCertificates(current);
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
      const result = await searchCertificates(current, query);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total || 0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading2(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

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
        Search by Name, Date, Certificate Number, Course and Category
      </p>
      <div className="wrapper">
        <div className="info-top">
          <p>
            Display {state?.length} out of {total} Records
          </p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>
              Create Certificate
            </button>
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
                  "Certificate Number",
                  "Course",
                  "Category",
                ]}
              />
            ) : (
              <table>
                <thead>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Certificate Number</th>
                  <th>Course</th>
                  <th>Category</th>
                </thead>
                <tbody>
                  {state?.map((d, i) => (
                    <tr className={i % 2 === 0 ? "active" : ""} key={d?._id}>
                      <td>{new Date(d?.createdAt)?.toDateString()}</td>
                      <td>
                        <span
                          onClick={() => {
                            setIsModalOpen(true);
                            setTemp(d);
                          }}
                        >
                          {d?.name}
                        </span>
                      </td>

                      <td>{d?.certificate} </td>
                      <td>{d?.course}</td>
                      <td>{d?.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
        {total > 10 && (
          <div className="page">
            <Pagination total={total} onChange={setCurrent} />
          </div>
        )}
      </div>
      {isModalOpen && (
        <CertificateModal
          temp={temp}
          fetchRecords={fetchRecords}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateCertificateModal
          isModalOpen2={isModalOpen2}
          fetchRecords={fetchRecords}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayCertificate;
