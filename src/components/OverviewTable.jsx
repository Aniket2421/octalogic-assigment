import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

const OverviewTable = ({ students }) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {" "}
        <h1 className="text-3xl text-gray-300 font-semibold">Overview</h1>
      </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Overview Statistics */}
        <div className="grid grid-cols-5 gap-6 mb-6">
          <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGroup} className="text-2xl mb-2" />
            <div className="text-2xl font-semibold">164</div>
            <div className="text-gray-500">Total number of students</div>
            <div className="text-pink-500 mt-2 cursor-pointer">View</div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGroup} className="text-2xl mb-2" />

            <div className="text-2xl font-semibold">12</div>
            <div className="text-gray-500">Total number of courses</div>
            <div className="text-pink-500 mt-2 cursor-pointer">View</div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGroup} className="text-2xl mb-2" />
            <div className="text-2xl font-semibold">$2000</div>
            <div className="text-gray-500">Total amount earned</div>
            <div className="text-pink-500 mt-2 cursor-pointer">View</div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGroup} className="text-2xl mb-2" />
            <div className="text-2xl font-semibold">Guitar</div>
            <div className="text-gray-500">Best performing course</div>
            <div className="text-pink-500 mt-2 cursor-pointer">View</div>
          </div>
          <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center">
            <FontAwesomeIcon icon={faUserGroup} className="text-2xl mb-2" />
            <div className="text-2xl font-semibold">Flute</div>
            <div className="text-gray-500">Worst performing course</div>
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
              {students && students.length > 0 ? (
                students.slice(0, 5).map((student, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-6">{student.id}</td>
                    <td className="py-3 px-6">
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="py-3 px-6">{student.course}</td>
                    <td className="py-3 px-6">{student.fees}</td>
                    <td className="py-3 px-6">{student.enrollmentDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-3 px-6 text-center text-gray-500"
                  >
                    No enrollments available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Best Students */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Best Students
            </h2>
            <div className="text-pink-500 cursor-pointer">
              View All Students
            </div>
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
              {students && students.length > 0 ? (
                students.slice(0, 5).map((student, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-6">{student.id}</td>
                    <td className="py-3 px-6">{student.firstName}</td>
                    <td className="py-3 px-6">{student.lastName}</td>
                    <td className="py-3 px-6">{student.course}</td>
                    <td className="py-3 px-6">{student.fees}</td>
                    <td className="py-3 px-6">{student.enrollmentDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-3 px-6 text-center text-gray-500"
                  >
                    No best students available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const dummyStudents = [
    {
      id: "ENR001",
      firstName: "John",
      lastName: "Doe",
      course: "Guitar Basics",
      fees: "$100",
      enrollmentDate: "2024-01-15",
    },
    {
      id: "ENR002",
      firstName: "Jane",
      lastName: "Smith",
      course: "Advanced Piano",
      fees: "$150",
      enrollmentDate: "2024-02-20",
    },
    {
      id: "ENR003",
      firstName: "Emily",
      lastName: "Brown",
      course: "Violin for Beginners",
      fees: "$120",
      enrollmentDate: "2024-03-10",
    },
    {
      id: "ENR004",
      firstName: "Michael",
      lastName: "Johnson",
      course: "Guitar Basics",
      fees: "$100",
      enrollmentDate: "2024-01-18",
    },
    {
      id: "ENR005",
      firstName: "Sarah",
      lastName: "Lee",
      course: "Advanced Piano",
      fees: "$150",
      enrollmentDate: "2024-02-25",
    },
    {
      id: "ENR006",
      firstName: "Lee",
      lastName: "Lee",
      course: "Advanced Piano",
      fees: "$150",
      enrollmentDate: "2024-02-25",
    },
    {
      id: "ENR007",
      firstName: "Ronaldo",
      lastName: "Lee",
      course: "Advanced Piano",
      fees: "$150",
      enrollmentDate: "2024-02-25",
    },
    {
      id: "ENR008",
      firstName: "lara",
      lastName: "Lee",
      course: "Advanced Piano",
      fees: "$150",
      enrollmentDate: "2024-02-25",
    },
    {
      id: "ENR009",
      firstName: "John",
      lastName: "Lee",
      course: "Advanced Piano",
      fees: "$150",
      enrollmentDate: "2024-02-25",
    },
  ];

  return <OverviewTable students={dummyStudents} />;
};

export default App;
