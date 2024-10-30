import React from 'react';
import './Student.css';
import Attedancebutton from './Attedancebutton';
const Student = (props) => {
    return (
        <div className="student-list">
            <h1>Student List</h1>
            <ul>
                {props.data.map(student => (
                    <li key={student.id} className="student-item">
                     ID:{student.id}<br></br>
                     Name:{student.name}<br></br>
                       Branch: {student.branch}<br></br>
                    Year:{student.year}<br></br>
                        <Attedancebutton/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Student;
