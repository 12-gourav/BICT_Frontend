import React, { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
import { Pagination, Skeleton } from "antd";
import { getExam, searchExam } from "../../redux/exam";
import NoData from "../admin/NoData";

const Exams = () => {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  const fetchrecords = async () => {
    try {
      setLoading(true);
      const result = await getExam(current);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
        setCurrent(1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchExams = async () => {
    try {
      if (query === "") {
        return fetchrecords();
      }
      setLoading(true);
      const result = await searchExam(current, query);
      if (result?.data?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
        setCurrent(1);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchrecords();
  }, [current]);

  const openLink = (a) => {
    window.open(a, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Navbar />
      <section className="exam">
        <h2>
          Online <span>Exam Portal</span>
        </h2>
        <p>
          The Computer Institute Exam Hub is your central platform for all
          academic assessments. Our user-friendly interface allows students to
          easily navigate through scheduled exams, practice tests, and instant
          result tracking. Prepare, perform, and progress with our secure and
          reliable online examination system.
        </p>
        <div className="exam-search">
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search By Exam Name"
          />
          <button onClick={searchExams}>Search</button>
        </div>
        <div className="exam-wrapper">
          {loading ? (
            <div className="loading" style={{ marginTop: "0.5rem" }}>
              <Skeleton active size="small" block={true} rows={2} />
              <br></br>
              <Skeleton active size="small" block={true} rows={2} />
            </div>
          ) : state?.length === 0 ? (
            <NoData />
          ) : (
            state?.map((d) => (
              <div className="exam-card" key={d?._id}>
                <h2>{d?.title}</h2>
                <p>{d?.discription}</p>
                <a href={d?.link} target="_bkank">Start Exam</a>
                {/* <button onClick={() => openLink(d?.link)}>Start Exam</button> */}
              </div>
            ))
          )}
        </div>
        {loading === false && total > 10 && (
          <Pagination total={total} onChange={setCurrent} />
        )}
      </section>
    </>
  );
};

export default Exams;
