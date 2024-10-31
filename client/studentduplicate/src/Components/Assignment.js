import React from 'react';

const Assignment = ({ data = [] }) => (
  <table>
    <thead>
      <tr>
        <th>Course Name</th>
        <th>Topic</th>
        <th>Deadline</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.course}</td>
          <td>{item.topic}</td>
          <td>{item.deadline}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Assignment;
