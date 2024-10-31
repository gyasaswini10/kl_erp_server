import React from 'react';
import './Faculty.css';

const Faculty = (props) => {
  return (
    <div id="faculty">
      <h1>Faculty Details</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map(faculty => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Faculty;
