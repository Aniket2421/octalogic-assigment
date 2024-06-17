// src/components/AddCourseForm.jsx
import React from "react";

const AddCourseForm = ({ onClose }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Course</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Course Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Description"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Instructor"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Instrument"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Day of the week"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-4 px-4 py-2 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-pink-500 text-white rounded-lg"
          >
            Add Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourseForm;
