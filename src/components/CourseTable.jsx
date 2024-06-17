// src/components/CourseTable.jsx
import React, { useState } from "react";
import Modal from "./Modal";
import AddCourseForm from "./AddCourseForm";

const CourseTable = ({ courses }) => {
  const [showModal, setShowModal] = useState(false);

  const handleAddCourseClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">COURSE LIST</h2>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-lg shadow-sm"
        />
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Description</th>
            <th className="px-4 py-2 border-b">Instructor</th>
            <th className="px-4 py-2 border-b">Instrument</th>
            <th className="px-4 py-2 border-b">Day of Week</th>
            <th className="px-4 py-2 border-b"># of Students</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses?.slice(0, 10).map((course, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{course.name}</td>
              <td className="px-4 py-2 border-b">{course.description}</td>
              <td className="px-4 py-2 border-b">{course.instructor}</td>
              <td className="px-4 py-2 border-b">{course.instrument}</td>
              <td className="px-4 py-2 border-b">{course.dayOfWeek}</td>
              <td className="px-4 py-2 border-b">{course.students}</td>
              <td className="px-4 py-2 border-b">{course.price}</td>
              <td className="px-4 py-2 border-b">
                <span
                  className={`px-2 py-1 rounded-full text-white ${
                    course.status === "Active"
                      ? "bg-green-500"
                      : course.status === "Closed"
                      ? "bg-red-500"
                      : "bg-gray-500"
                  }`}
                >
                  {course.status}
                </span>
              </td>
              <td className="px-4 py-2 border-b">
                <button className="text-gray-500 hover:text-gray-700">
                  &#x22EE;
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg"
        onClick={handleAddCourseClick}
      >
        + Add Course
      </button>

      <Modal show={showModal} onClose={handleCloseModal}>
        <AddCourseForm onClose={handleCloseModal} />
      </Modal>
    </div>
  );
};

export default CourseTable;
