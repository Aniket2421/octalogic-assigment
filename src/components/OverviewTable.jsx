import React from "react";

const OverviewTable = ({ students }) => {
  return (
    <div>
      <h2>Latest Enrollments</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th>Enr. No</th>
            <th>S. Name</th>
            <th>C. Name</th>
            <th>Fees</th>
            <th>Enr. Date</th>
          </tr>
        </thead>
        <tbody>
          {students?.slice(0, 5).map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>
                {student.firstName} {student.lastName}
              </td>
              <td>{student.course}</td>
              <td>{student.fees}</td>
              <td>{student.enrollmentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OverviewTable;
