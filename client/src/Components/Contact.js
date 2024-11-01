import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_zoo3bwm', 'template_unnvlc9', form.current, 'eDM_m90hwoM9ogxKg')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully.');
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className='contact-wrapper'>
            <div className='container'>
                <h1>Contact Form</h1>
                <form className='contact-form' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Your Name' name='from_name' required />
                    <input type="email" placeholder='Recipient Email' name='to_email' required />
                    <textarea name="message" cols="30" rows="10" placeholder='Enter your message...' required></textarea>
                    <input className='contact-btn' type="submit" value='Submit'/>
                </form>    
            </div>
        </div>
    );
};

export default Contact;
