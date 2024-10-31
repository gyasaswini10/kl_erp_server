import React, { useState } from 'react';

function AssignmentForm({ onSubmit }) {
  const [course, setCourse] = useState('');
  const [topic, setTopic] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleCourseChange = (event) => setCourse(event.target.value);
  const handleTopicChange = (event) => setTopic(event.target.value);
  const handleDeadlineChange = (event) => setDeadline(event.target.value);

  const submitAssignment = () => {
    const newData = { course, topic, deadline };
    onSubmit(newData);
    setCourse('');
    setTopic('');
    setDeadline('');
  };

  const formStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#000',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={formStyle}>
      <form>
        <div>
          <label>Course name:</label>
          <input type="text" value={course} onChange={handleCourseChange} style={inputStyle} />
        </div>
        <div>
          <label>Topic to prepare:</label>
          <input type="text" value={topic} onChange={handleTopicChange} style={inputStyle} />
        </div>
        <div>
          <label>Submission deadline:</label>
          <input type="date" value={deadline} onChange={handleDeadlineChange} style={inputStyle} />
        </div>
        <button
          type="button"
          onClick={submitAssignment}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
          onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AssignmentForm;
