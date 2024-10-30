// use 5 faculty feedback details as a collection and pass as a props 
// create a component called counselor having stu count,id,branch
// use card layout for counselor and also use props
// Use Jquery for fips or  
// Components/Counselor.js
import React from 'react';
import './Counsler.css';

function Counselor({ data }) {
  return (
    <div className="counselor-container">
      <h1>Our Counselors Available</h1>
      {data.map((counselor) => (
        <div key={counselor.id} className="counselor-card">
          <h3>{counselor.name}</h3>
          <p>ID: {counselor.id}</p>
          <p>Branch: {counselor.branch}</p>
          <p>Student Count: {counselor.studentCount}</p>
        </div>))}
    </div>
  );
}

export default Counselor;
