import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div>
      
      
    <header>
      <nav>
        <ul id='ul-header'>
        
          <li><h3>ERP </h3></li>
          <li><Link to="/">Erp</Link></li>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/timetable">Timetable</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/counselor">Counselor</Link></li>
          <li><Link to="/AssignmentForm">Aisgnment</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li ><Link to="/Login">login</Link></li>
          <li><Link to={"/Register"}>register</Link></li>
          <li><Link to={"/Contact"}>email</Link>  </li>
          <li><Link to={"/Crud"}>Crud</Link></li>
        </ul>
      
      </nav>
      
    </header>
    
    </div>
    
   
  );
  
};

export default Header;
