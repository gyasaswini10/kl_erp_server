import React, { useState, useEffect } from 'react';

const Footer = () => {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {/* <h1>--------------------------------------------------------------------------------------------------------------------------</h1> */}
      {/* <h1>Time: {time}</h1>
      <h6 >Copyrights all rights reserved by MSWD -2023-KL university</h6> */}
    </div>
  );
};

export default Footer;
