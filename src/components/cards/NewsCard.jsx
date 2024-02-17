import React, { useState } from "react";

const NewsCard = ({ d }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="news-card">
      <h4> {d?.title}</h4>
      <div className="news-bar">
        <i className="bx bx-calendar-alt"></i>{" "}
        {new Date(d?.createdAt)?.toDateString()}
      </div>
      <p>
        {d?.dis?.length > 100 ? (
          <>
            {!open ? d?.dis?.substring(0, 100) + "..." : d?.dis}
            <br></br>{" "}
            <span onClick={() => setOpen(!open)}>
              {open ? "Read Less" : "Read More"}
            </span>
          </>
        ) : (
          d?.dis
        )}
      </p>
    </div>
  );
};

export default NewsCard;
