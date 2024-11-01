import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { useAppContext } from '../Components/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const { setUser, setUsername } = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const sendEmailNotification = (recipientEmail) => {
    const templateParams = {
      to_email: recipientEmail,
      subject: 'Login Notification',
      message: `Hello ${recipientEmail}, you have successfully logged in.`,
    };

    emailjs.send('service_zoo3bwm', 'template_unnvlc9', templateParams, 'eDM_m90hwoM9ogxKg')
      .then((result) => {
        console.log('Email sent: ', result.text);
      })
      .catch((error) => {
        console.log('Email sending error: ', error.text);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });
      
      const { token, username } = res.data;
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);

      setUser(true);
      setUsername(username);
      setMessage('Login successful!');

      // Send login notification email
      sendEmailNotification(email);

      navigate('/home', { replace: true });
    } catch (error) {
      setMessage('Error logging in: ' + (error.response?.data?.message || 'Unknown error'));
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
