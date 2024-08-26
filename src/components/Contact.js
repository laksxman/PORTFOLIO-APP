//import React, { useRef } from 'react';
import './Contact.css'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/github.svg'
import Instagram from '../assets/instagram.svg'
import Facebook from '../assets/facebook.svg'
//import emailjs from '@emailjs/browser';


const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {

        
    //     e.preventDefault();
    //     emailjs
    //       .sendForm('service_zz0v08s', 'template_g4fnnip', form.current, {
    //         publicKey: 'tsGL91a9Uo8YsxMpt',
    //       })
    //       .then(

    //         () => {
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };



return (
    <section id = 'contact'>
        <div id = 'social'>
            
            <h1 className='socialTitle'>Socials</h1>
            <p className='socialDesc'>Here you can connect with me on my social media</p>
          
            <div className='socialImgs'>
                <a href='https://www.linkedin.com/public-profile/settings'><img src = {Linkedin} alt = 'Social' className='socialImg'/></a>
                <a href='https://github.com/laksxman/lakshman-kumar.git'><img src = {Github} alt = 'Social' className='socialImg'/></a> 
                <a href='https://www.instagram.com/lakshman_yadav73?igsh=emJsZDdjcnIyd3c3'><img src = {Instagram} alt = 'Social' className='socialImg'/></a>
                <a href='https://www.facebook.com/profile.php?id=100042128401304&mibextid=ZbWKwL'><img src = {Facebook} alt = 'Social' className='socialImg'/></a>
            </div>
        </div>

        <div id = 'contactPage'>
            
            <h1 id = 'contactTitle'>Contact</h1>
            <span className = 'contactDesc'>Feel free to contact me</span>

            {/* ref={form} onSubmit={sendEmail} */}
            <form className = 'contactForm' >
            <input type = 'text' className = 'name' placeholder = 'Your Name' name = 'from_name' required/>
            <input type = 'email' className = 'name' placeholder = 'Your Email' name = 'your_email' required/>
            <textarea className = 'msg' name = 'message' rows= "5" placeholder = 'Your Message'></textarea>
            <button type = "submit" value="Send" className = 'submitBtn' onClick={() => {alert('Your Message is Submitted')}}>Submit</button>
            </form>
            
            
        </div>
    </section>
)
}

export default Contact