import React, { useEffect, useState } from "react";
import CreateCourseModal from "../modals/CreateCourseModal";
import CourseModal from "../modals/CourseModal";
import { Pagination } from "antd";
import { getCourse, searchCourse } from "../../../redux/course";
import NoData from "../../../components/admin/NoData";
import LoadingTable from "../../../components/admin/LoadingTable";

const DisplayCourses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(1);
  const [total, setTotal] = useState(0);
  const [temp, setTemp] = useState();
  const [query, setQuery] = useState("");
  const [loading2, setLoading2] = useState(false);

  const fetchRecords = async () => {
    try {
      setLoading(true);
      const result = await getCourse(current);
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

  const searchRecords = async () => {
    try {
      if (query === "") {
        fetchRecords();
      }
      setLoading2(true);
      const result = await searchCourse(current, query);
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
    <section className="student">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button
          onClick={searchRecords}
          disabled={loading2}
          style={{ cursor: "pointer" }}
        >
          <i className="bx bx-search"></i>
        </button>
      </div>
      <p className="info-text">Search by Course Name</p>
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
                z={[1, 2, 3, 4, 5, 6]}
                obj={[
                  "Date",
                  "Course Name",
                  "Category",
                  "Mode",
                  "Duration",
                  "Price",
                ]}
              />
            ) : (
              <table>
                <thead>
                  <th>Date</th>
                  <th>Course Name</th>
                  <th>Category</th>
                  <th>Mode</th>
                  <th>Duration</th>
                  <th>Price</th>
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

                      <td>{d?.category} </td>
                      <td>{d?.mode}</td>
                      <td>{d?.duration} Months</td>
                      <td style={{ display: "flex", alignItems: "center" }}>
                        <i className="bx bx-rupee"></i>
                        {d?.price}
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
            <Pagination total={total} onChange={setCurrent} />
          </div>
        )}
      </div>
      {isModalOpen && (
        <CourseModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          temp={temp}
          fetchRecords={fetchRecords}
        />
      )}
      {isModalOpen2 && (
        <CreateCourseModal
          isModalOpen2={isModalOpen2}
          setIsModalOpen2={setIsModalOpen2}
          fetchRecords={fetchRecords}
        />
      )}
    </section>
  );
};

export default DisplayCourses;
