import React, { useRef } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_0kmq4eb", "template_4yumyoj" , form.current, "bfeOmo8JzYlnt98Cj");
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container col-md-7 mx-auto">
        <div className="row">
          <div className="col-md-6">
            <div className="contact__options">
              <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon' />
                <h4>Email</h4>
                <h5>mm0766633@gmail.com</h5>
                <a href="mailto:mm0766633@gmail.com">Send a message</a>
              </article>
              <article className='contact__option'>
                <RiMessengerLine className='contact__option-icon' />
                <h4>Messanger</h4>
                <h5>mostafamahmoud</h5>
                <a href="https://m.me/id=100008780615643" target="_blank">Send a message</a>
              </article>
              <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon' />
                <h4>WhatsApp</h4>
                <h5>01148798426</h5>
                <a href="https://wa.me/01148798426" target="_blank">Send a message</a>
              </article>
            </div>
          </div>
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' className='form-control mb-2' required />
              <input type="email" name='email' placeholder='Your Email' className='form-control mb-2' required />
              <textarea name="message" rows="7" placeholder='Your Message' className='form-control mb-2' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
