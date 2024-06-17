import React from "react";

const OverviewTable = ({ students }) => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Overview Statistics */}
      <div className="grid grid-cols-5 gap-6 mb-6">
        <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
          <div className="text-2xl font-semibold">164</div>
          <div className="text-gray-500">total number of students</div>
          <div className="text-pink-500 mt-2 cursor-pointer">View</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
          <div className="text-2xl font-semibold">12</div>
          <div className="text-gray-500">total number of courses</div>
          <div className="text-pink-500 mt-2 cursor-pointer">View</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
          <div className="text-2xl font-semibold">$2000</div>
          <div className="text-gray-500">total amount earned</div>
          <div className="text-pink-500 mt-2 cursor-pointer">View</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
          <div className="text-2xl font-semibold">Guitar</div>
          <div className="text-gray-500">best performing course</div>
          <div className="text-pink-500 mt-2 cursor-pointer">View</div>
        </div>
        <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
          <div className="text-2xl font-semibold">Flute</div>
          <div className="text-gray-500">worst performing course</div>
          <div className="text-pink-500 mt-2 cursor-pointer">View</div>
        </div>
      </div>

      {/* Latest Enrollments */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">
            Latest Enrollments
          </h2>
          <div className="text-pink-500 cursor-pointer">View All Courses</div>
        </div>
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm">
              <th className="py-3 px-6">Enr. No</th>
              <th className="py-3 px-6">S. Name</th>
              <th className="py-3 px-6">C. Name</th>
              <th className="py-3 px-6">Fees</th>
              <th className="py-3 px-6">Enr. Date</th>
            </tr>
          </thead>
          <tbody>
            {students.slice(0, 5).map((student, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">
                  {student.firstName} {student.lastName}
                </td>
                <td className="py-3 px-6">{student.course}</td>
                <td className="py-3 px-6">{student.fees}</td>
                <td className="py-3 px-6">{student.enrollmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Best Students */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Best Students</h2>
          <div className="text-pink-500 cursor-pointer">View All Students</div>
        </div>
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-600 uppercase text-sm">
              <th className="py-3 px-6">Reg. No</th>
              <th className="py-3 px-6">F. Name</th>
              <th className="py-3 px-6">L. Name</th>
              <th className="py-3 px-6">Course #</th>
              <th className="py-3 px-6">Total Fees</th>
              <th className="py-3 px-6">Reg. Date</th>
            </tr>
          </thead>
          <tbody>
            {students.slice(0, 5).map((student, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-6">{student.id}</td>
                <td className="py-3 px-6">{student.firstName}</td>
                <td className="py-3 px-6">{student.lastName}</td>
                <td className="py-3 px-6">{student.course}</td>
                <td className="py-3 px-6">{student.fees}</td>
                <td className="py-3 px-6">{student.enrollmentDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OverviewTable;
