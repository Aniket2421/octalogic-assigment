import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import CourseTable from "../components/CourseTable";

const Courses = () => {
  const courses = useSelector((state) => state.courses);
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const filterCourses = (query) => {
    setFilteredCourses(
      courses.filter((course) =>
        Object.values(course).some((val) =>
          val.toString().toLowerCase().includes(query.toLowerCase())
        )
      )
    );
  };

  return (
    <div>
      <SearchBar onSearch={filterCourses} />
      <CourseTable courses={filteredCourses} />
    </div>
  );
};

export default Courses;
