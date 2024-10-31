import React from 'react';
import './Timetable.css';

const Timetable = (props) => {
  return (
    <div>
      <h1>Weekly Timetable</h1>
      <table>
        <thead>
          <tr>
            <th>Hours</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((slot, index) => (
            <tr key={index}>
              <td>{slot.time}</td>
              <td>{slot.monday}</td>
              <td>{slot.tuesday}</td>
              <td>{slot.wednesday}</td>
              <td>{slot.thursday}</td>
              <td>{slot.friday}</td>
              <td>{slot.saturday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
