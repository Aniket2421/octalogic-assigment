import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import AddCourseForm from "./AddCourseForm";

const CourseTable = ({ courses }) => {
  const [showModal, setShowModal] = useState(false);
  const [contextMenuVisible, setContextMenuVisible] = useState(null);

  const handleAddCourseClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleContextMenuClick = (index) => {
    setContextMenuVisible(contextMenuVisible === index ? null : index);
  };

  const handleActionClick = (action) => {
    // handle the specific action (edit, close, archive, unarchive)
    console.log(action);
    setContextMenuVisible(null);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        {" "}
        <h1 className="text-3xl text-gray-300 font-bold">COURSE</h1>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-400 ">COURSE LIST</h3>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 border rounded-lg shadow-sm"
        />
      </div>
      <div className="relative p-4 bg-white rounded-lg shadow-md">
        <div className="text-lg font-semibold mb-4">Courses</div>
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
                <td className="px-4 py-2 border-b relative">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => handleContextMenuClick(index)}
                  >
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </button>
                  {contextMenuVisible === index && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {course.status === "Archived" ? (
                        <button
                          className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          onClick={() => handleActionClick("Unarchive Course")}
                        >
                          Unarchive Course
                        </button>
                      ) : (
                        <>
                          <button
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                            onClick={() => handleActionClick("Edit Course")}
                          >
                            Edit Course
                          </button>
                          <button
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                            onClick={() => handleActionClick("Close Course")}
                          >
                            Close Course
                          </button>
                          <button
                            className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                            onClick={() => handleActionClick("Archive Course")}
                          >
                            Archive Course
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="fixed bottom-4 right-4">
          <button
            className="px-4 py-2 bg-pink-500 text-white rounded-lg"
            onClick={handleAddCourseClick}
          >
            + Add Course
          </button>
        </div>

        <Modal show={showModal} onClose={handleCloseModal}>
          <AddCourseForm onClose={handleCloseModal} />
        </Modal>
      </div>
    </>
  );
};

const App = () => {
  const dummyCourses = [
    {
      name: "Guitar Basics",
      description: "Learn the basics of playing guitar.",
      instructor: "John Doe",
      instrument: "Guitar",
      dayOfWeek: "Monday",
      students: 10,
      price: "$100",
      status: "Active",
    },
    {
      name: "Advanced Piano",
      description: "For advanced piano players.",
      instructor: "Jane Smith",
      instrument: "Piano",
      dayOfWeek: "Wednesday",
      students: 8,
      price: "$150",
      status: "Closed",
    },
    {
      name: "Violin for Beginners",
      description: "An introduction to violin.",
      instructor: "Emily Brown",
      instrument: "Violin",
      dayOfWeek: "Friday",
      students: 12,
      price: "$120",
      status: "Archived",
    },
  ];

  return <CourseTable courses={dummyCourses} />;
};

export default App;
