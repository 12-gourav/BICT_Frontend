import React from "react";
import img from "../../assets/img/a.svg";

const NoData = () => {
  return (
    <div className="no-data">
      <img src={img} alt="img" />
      <h4>No Records Found</h4>
    </div>
  );
};

export default NoData;
