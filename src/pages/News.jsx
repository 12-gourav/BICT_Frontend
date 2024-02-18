import React, { useEffect, useState } from "react";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/home/Footer";
import { getNews } from "../redux/news";
import NewsCard from "../components/cards/NewsCard";
import { Pagination, Skeleton } from "antd";
import img from "../assets/img/b.svg";

const News = () => {
  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const result = await getNews(currentPage);
      if (result?.data) {
        setState(result?.data?.data);
        setTotal(result?.data?.total);
      } else {
        setState([]);
        setTotal(0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <Navbar />
      <section className="news">
        <h2>
          Campus Connect: Stay Updated with<br></br>{" "}
          <span>Institute Events & Curriculum</span>
        </h2>
        <p>
          Stay ahead of the curve with real-time updates on upcoming events and
          gain valuable insights into curriculum enhancements.
          <br /> Navigate effortlessly through our meticulously curated content
          and elevate your academic journey with timely and relevant
          information.
        </p>
        {state?.length === 0 && loading === false && (
          <div className="nodata2">
            <img src={img} alt="image" />
            <h4>No News Found</h4>
          </div>
        )}

        {loading ? (
          <div className="loading" style={{ marginTop: "0.5rem" }}>
            <Skeleton active size="small" block={true} rows={2} />
            <br></br>
            <Skeleton active size="small" block={true} rows={2} />
          </div>
        ) : (
          <div className="news-body">
            {state?.map((d) => (
              <NewsCard d={d} />
            ))}
          </div>
        )}

        <div className="page">
          {total > 10 && <Pagination total={total} onChange={setCurrentPage} />}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
