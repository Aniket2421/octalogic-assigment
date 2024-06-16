import React from "react";
import { useSelector } from "react-redux";
import OverviewTable from "../components/OverviewTable.jsx";

const Overview = () => {
  const students = useSelector((state) => state.students);

  return (
    <div>
      <OverviewTable students={students} />
    </div>
  );
};

export default Overview;
