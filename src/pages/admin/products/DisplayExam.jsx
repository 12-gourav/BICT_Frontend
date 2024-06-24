import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import NewsModal from "../modals/NewsModal";
import CreateNews from "../modals/CreateNews";
import { getNews, searchnews } from "../../../redux/news";
import NoData from "../../../components/admin/NoData";
import LoadingTable from "../../../components/admin/LoadingTable";
import CreateExam from "../modals/CreateExam";
import { getExam, searchExam } from "../../../redux/exam";
import ExamModal from "../modals/ExamModal";

const DisplayExam = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [state, setState] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [temp, setTemp] = useState();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchrecords = async () => {
    try {
      setLoading(true);
      const result = await getExam(currentPage);
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

  const searchNews = async () => {
    try {
      if (query === "") {
        return fetchrecords();
      }
      setLoading(true);
      const result = await searchExam(currentPage, query);
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
    fetchrecords();
  }, [currentPage]);

  return (
    <section className="student">
      <div className="search-bar">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search"
        />
        <button onClick={searchNews} disabled={loading}>
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">Search by Date</p>
      <div className="wrapper">
        <div className="info-top">
          <p>
            Display {state?.length} out of {total} Records
          </p>
          <div className="btn-set">
            <button onClick={() => setIsModalOpen2(true)}>Create Exam</button>
          </div>
        </div>
        {state?.length === 0 && !loading ? (
          <NoData />
        ) : (
          <div className="content-wrapper">
            {loading ? (
              <LoadingTable
                z={[1, 2, 3]}
                obj={["Date", "News Title", "News Discription"]}
              />
            ) : (
              <table>
                <thead>
                  <th>Date</th>
                  <th>Exam Title</th>
                  <th>Exam Discription</th>
                  <th>Exam Link</th>
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
                          {d?.title}
                        </span>
                      </td>

                      <td>{d?.discription?.substring(0, 100)}</td>
                      <td><a href={d?.link} target="_blank" >{d?.link}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        <div className="page">
          {total > 10 && <Pagination total={total} onChange={setCurrentPage} />}
        </div>
      </div>
      {isModalOpen && (
        <ExamModal
          temp={temp}
          fetchrecords={fetchrecords}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      {isModalOpen2 && (
        <CreateExam
          fetchrecords={fetchrecords}
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
        />
      )}
    </section>
  );
};

export default DisplayExam;
