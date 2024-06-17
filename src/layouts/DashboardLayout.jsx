import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <nav>
        <ul>
          <li>
            <Link to="/dashboard/overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard/courses">Courses</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
