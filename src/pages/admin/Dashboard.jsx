import React, { useState } from "react";
import SidbarNav from "../../components/admin/SidbarNav";
import { Outlet } from "react-router-dom";
import MobileNav from "../../components/admin/MobileNav";

const Dashboard = () => {
  const [state, setState] = useState(false);
  return (
    <section className="dashboard">
      <SidbarNav />
      <div className="d-right">
        <MobileNav setState={setState} state={state} />

        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
