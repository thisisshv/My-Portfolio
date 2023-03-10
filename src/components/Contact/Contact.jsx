import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { themeContext } from '../../Context'
import { useContext } from 'react'

function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mnp8n7g', 'template_xfm6wx8', form.current, '1mwQwFvTW3u2S8pHm')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
        document.getElementById("resetForm").reset();
    };

    return (
    <div className="contact-form" id='Contact'>
        <div className="c-left">
            <div className="my-talents">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="c-blur1"></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail} name="myForm" id="resetForm">
                <input type="text" name="user_name" className="user" placeholder=" Name" required/>
                <input type="email" name="user_email" className="user" placeholder=" Email" required/>
                <input type="number" name="user_number" className="user" placeholder=" Phone Number" required/>
                <textarea name="message" className="user" placeholder=" Message" required/>
                <textarea name="feedback" className="user feedback" placeholder=" Any Feedback?" required/>
                <input type="submit" value="Send" className="button c-button"/>
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="c-blur2"></div>
            </form>
        </div>
    </div>
  )
}

export default Contact