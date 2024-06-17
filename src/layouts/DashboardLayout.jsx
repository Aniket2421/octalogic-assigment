import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <nav className="w-64 bg-white border-r border-gray-200 flex flex-col items-center py-4">
        <div className="flex flex-col items-center space-y-4">
          <Link
            to="/dashboard/overview"
            className="w-full text-center py-2 bg-pink-200 text-pink-600 rounded-md hover:bg-pink-300"
          >
            Home
          </Link>
          <Link
            to="/dashboard/courses"
            className="w-full text-center py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300"
          >
            Courses
          </Link>
        </div>
        <div className="mt-auto pb-4">
          <Link
            to="/logout"
            className="w-full text-center py-2 text-gray-600 hover:text-gray-900"
          >
            Logout
          </Link>
        </div>
      </nav>
      <main className="flex-1 bg-gray-100 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
