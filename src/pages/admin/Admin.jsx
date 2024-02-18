import React, { useEffect, useState } from "react";
import { getNews2 } from "../../redux/news";
import NoData from "../../components/admin/NoData";
import { Skeleton } from "antd";
import { FetchStudents2 } from "../../redux/action";
import LoadingTable from "../../components/admin/LoadingTable";

const Admin = () => {
  const [news, setNews] = useState([]);
  const [state, setState] = useState("");
  const [newsLoading, setNewsLoading] = useState(false);
  const [student, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNewsRecords = async () => {
    try {
      setNewsLoading(true);
      const result = await getNews2();
      if (result?.data) {
        setNews(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setNewsLoading(false);
    }
  };

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await FetchStudents2();
      if (result?.data) {
        setStudents(result?.data?.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  useEffect(() => {
    fetchNewsRecords();
  }, []);

  return (
    <section className="admin">
      <div className="admin-slider">
        <h3>Data Record Metrics Summary</h3>
        <div className="card-set">
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Updates</h5>
            </div>
            <h2>Latest Addmission Record in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Uploads</h5>
            </div>
            <h2>Latest Images Upload in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Updates</h5>
            </div>
            <h2>Latest News and Events Post in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
          <div className="card">
            <div className="short">
              <span></span>
              <h5>Upload</h5>
            </div>
            <h2>Latest Certificates Upload in this Month</h2>
            <p>
              See Details <i className="bx bx-chevron-right"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="admin-wrapper">
        <div className="admin-left">
          <div className="sec1">
            <h3>Latest News</h3>
            {news?.length === 0 && !newsLoading ? (
              <NoData />
            ) : (
              <ul>
                {newsLoading ? (
                  <div className="loading" style={{ marginTop: "0.5rem" }}>
                    <Skeleton active size="small" block={true} rows={2} />
                    <br></br>
                    <Skeleton active size="small" block={true} rows={2} />
                  </div>
                ) : (
                  news?.map((d) => (
                    <li>
                      <h5>{d?.title}</h5>
                      <p>
                        {d?.dis?.length > 100 && state === d?._id
                          ? d?.dis
                          : d?.dis?.substring(0, 100)}
                      </p>

                      {d?.dis?.length > 100 && (
                        <p
                          className="read"
                          onClick={() =>
                            setState(state === d?._id ? "" : d?._id)
                          }
                        >
                          {state !== d?._id ? "Read More" : "Read Less"}
                        </p>
                      )}
                    </li>
                  ))
                )}
              </ul>
            )}
          </div>
        </div>
        <div className="admin-right">
          <div className="sec1">
            <h4>Recent Addmission Details</h4>
            {student?.length === 0 && !loading ? (
              <NoData />
            ) : (
              <div className="table-wrap">
                {loading ? (
                  <LoadingTable
                    z={[1, 2, 3]}
                    obj={["Date", "Name", "Course"]}
                  />
                ) : (
                  <table>
                    <thead>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Course</th>
                    </thead>
                    <tbody>
                      {student?.map((d) => (
                        <tr>
                          <td>{new Date(d?.createdAt)?.toDateString()}</td>
                          <td>{d?.firstName + " " + d?.lastName}</td>
                          <td>{d?.course}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
