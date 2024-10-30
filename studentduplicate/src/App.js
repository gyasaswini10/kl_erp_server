import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import User from './Components/User';
import erpImage from './Components/erp.png';
//  import FormPropsTextFields from './Components/FormPropsTextFields';
import Student from './Components/Student';
import Timetable from './Components/Timetable';
import Courses from './Components/Courses';
import Faculty from './Components/Faculty';
import Feedback from './Components/feedback';
import Counselor from './Components/Counselor';
import AssignmentForm from './Components/AssignmentForm';
import Assignment from './Components/Assignment';
import Books from './Components/Book';
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Components/Contact';
import Crud from './Components/crud';
function App() {
  const [assignments, setAssignments] = useState([]);

  const handleAssignmentSubmit = (assignment) => {
    setAssignments((prevAssignments) => [...prevAssignments, assignment]);
  };

  const facultyData = [
    { id: 1, name: 'Rajesh Kumar', department: 'Computer Science', designation: 'Professor' },
    { id: 2, name: 'Priya Patel', department: 'Mathematics', designation: 'Assistant Professor' },
    { id: 3, name: 'Arjun Reddy', department: 'Electrical Engineering', designation: 'Associate Professor' }
  ];

  const students = [
    { id: 1, name: 'Ram', branch: 'Computer Science', year: '2nd Year' },
    { id: 2, name: 'Seetha', branch: 'Mechanical Engineering', year: '3rd Year' },
    { id: 3, name: 'Siva', branch: 'Electrical Engineering', year: '4th Year' },
    { id: 4, name: 'Aarti', branch: 'Civil Engineering', year: '1st Year' },
    { id: 5, name: 'Ravi', branch: 'Chemical Engineering', year: '2nd Year' }
  ];

  const timetableData = [
    {
      time: '9:20 to 11',
      monday: 'Java Course (C-Block)',
      tuesday: 'Linux Course (M-Block)',
      wednesday: 'DBMS Course (R-Block)',
      thursday: 'Java Course (C-Block)',
      friday: 'Linux Course (M-Block)',
      saturday: 'DBMS Course (R-Block)',
    },
    {
      time: '11 to 12:50',
      monday: 'DBMS Course (R-Block)',
      tuesday: 'Java Course (C-Block)',
      wednesday: 'Linux Course (M-Block)',
      thursday: 'DBMS Course (R-Block)',
      friday: 'Java Course (C-Block)',
      saturday: 'Linux Course (M-Block)',
    },
    {
      time: '1:45 to 3:30',
      monday: 'Linux Course (M-Block)',
      tuesday: 'DBMS Course (R-Block)',
      wednesday: 'Java Course (C-Block)',
      thursday: 'Linux Course (M-Block)',
      friday: 'DBMS Course (R-Block)',
      saturday: 'Java Course (C-Block)',
    },
  ];

  const courseData = [
    { courseCode: '23CS06EF', courseName: 'MSWD', lpts: 2021, credits: 3 },
    { courseCode: '23SDCE201', courseName: 'LINUX', lpts: 1010, credits: 2 },
    { courseCode: '23ADOI120', courseName: 'DBMS', lpts: 1202, credits: 3 }
  ];

  const counselorData = [
    { id: 1, name: 'Dr. Anil Kumar', branch: 'Computer Science', studentCount: 200 },
    { id: 2, name: 'Ms. Sneha Reddy', branch: 'Mechanical Engineering', studentCount: 150 },
    { id: 3, name: 'Mr. Ravi Shankar', branch: 'Electrical Engineering', studentCount: 180 },
  ];
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/students" element={<Student data={students} />} />
          <Route path="/timetable" element={<Timetable data={timetableData} />} />
          <Route path="/courses" element={<Courses data={courseData} />} />
          <Route path="/faculty" element={<Faculty data={facultyData} />} />
          <Route path="/feedback" element={<Feedback data={facultyData} />} />
          <Route path="/Counselor" element={<Counselor data={counselorData} />} />
          <Route path="/" element={<h1>kl erp</h1>} />
<Route path="/Register" element={<Register/>}></Route>
<Route path="/Login" element={<Login/>}/>
<Route path="/Contact" element={<Contact/>}/>
<Route path="/Crud" element={<Crud />} />
<Route path="/home" element={<h1>kl erp   home page welcome</h1>} />
          <Route path="/AssignmentForm" element={<AssignmentForm onSubmit={handleAssignmentSubmit} />} />

        <Route path="/books" element={<Books/>} />
        </Routes>          {window.location.pathname === '/AssignmentForm' && <Assignment data={assignments} />}
     
        <Footer />
        {/* <User name="yasaswini" type="student" branch="CSE" /> */}

      </div>
    </Router>
    
  );
}

export default App;
