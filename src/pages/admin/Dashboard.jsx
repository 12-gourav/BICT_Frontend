import React from "react";
import img from "../../assets/img/logo.png";
import SidbarNav from "../../components/admin/SidbarNav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <SidbarNav />
      <div className="d-right">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
