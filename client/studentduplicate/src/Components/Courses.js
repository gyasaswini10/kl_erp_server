import React from 'react';
import './Courses.css';

const Courses = (props) => {
  return (
    <div>
      <h1>Courses</h1>
      {props.data.map((course, index) => (
        <div key={index} className="course-card">
          <h2>{course.courseName}</h2>
          <p>Course Code: {course.courseCode}</p>
          <p>LPTS: {course.lpts}</p>
          <p>Credits: {course.credits}</p>
        </div>
      ))}
    </div>
  );
};

export default Courses;
