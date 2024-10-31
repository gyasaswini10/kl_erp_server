// create a component called feedback with the data passes through props or through collections 
// use following attributes for feedback 
// 1.faculty id 
// 2.faclty name
// 3.course
// 4.description of feedback
// Components/Feedback.js
import React, { useState } from 'react';
import './Feedback.css'
const Feedback = ({ data }) => {
  const [facultyId, setFacultyId] = useState('');
  const [facultyName, setFacultyName] = useState('');
  const [course, setCourse] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();// pre  vent  refresh  page
    console.log({
      facultyId,
      facultyName,
      course,
      description
    });
    setFacultyId('');
    setFacultyName('');
    setCourse('');
    setDescription('');
  };

  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Faculty:
          {/* <h1>faculty date</h1> */}
          <select value={facultyId} onChange={(e) => {
            const selectedFaculty = data.find(f => f.id === parseInt(e.target.value));

            setFacultyId(selectedFaculty.id);
            setFacultyName(selectedFaculty.name);
          }}>
            <option value="">Select Faculty</option>
            {data.map((faculty) => (

              <option key={faculty.id} value={faculty.id}>{faculty.name}</option>
            ))}
          </select>
        </label>
        <label>
          Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Course Name"
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter feedback"
          />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
