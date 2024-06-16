import React from "react";

const CourseTable = ({ courses }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Instructor</th>
          <th>Instrument</th>
          <th>Day of Week</th>
          <th># of Students</th>
          <th>Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {courses?.slice(0, 10).map((course, index) => (
          <tr key={index}>
            <td>{course.name}</td>
            <td>{course.description}</td>
            <td>{course.instructor}</td>
            <td>{course.instrument}</td>
            <td>{course.dayOfWeek}</td>
            <td>{course.students}</td>
            <td>{course.price}</td>
            <td>{course.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
