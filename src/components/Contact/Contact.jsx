import React, { useState } from 'react';
import './contact.css';
import contactimg from '/assets/contactimg.png';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2'; 

function Contact() {
  const [formErrors, setFormErrors] = useState({});
  const validateForm = (formData) => {
    const errors = {};
    if (!formData.get('name').trim()) {
      errors.name = 'Name is required';
    }
    const email = formData.get('email').trim();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.get('message').trim()) {
      errors.message = 'Message is required';
    } 
    return errors;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors); 
      return;
    } else {
      setFormErrors({});
    }

    formData.append("access_key", "593f9979-cddc-4f52-8d74-a9437baee11f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Message Sent",
        showConfirmButton: false, 
        timer: 1000,
        customClass: {
          popup: 'swal-centered' // Adds custom class to adjust modal positioning
        }
      }); 
      event.target.reset(); 
    } else {
      alert("Failed to send the message, please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2 id='contact'>Contact Me</h2>
      <div className="contact-section">
        <div className="image-section">
          <img src={contactimg} alt="contact-me-img" className="contactimg"/>
          <div className="social-icons">
            <div className="github">
              <a href="https://github.com/akshay-899" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="linkedin">
              <a href="https://www.linkedin.com/in/m-akshay-prabhu-700912229/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
            <div className="instagram">
              <a href="https://www.instagram.com/m_akshay_prabhu?igsh=MTc3bHN5NmI1cmJtbw==" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" required />
            {formErrors.name && <span className="error">{formErrors.name}</span>}
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" required />
            {formErrors.email && <span className="error">{formErrors.email}</span>}
          </div>
          <div className="input-group">
            <label>Phone Number (Optional)</label>
            <input type="text" name="phone_number"/>
          </div>
          <div className="input-group">
            <label>Message</label>
            <textarea name="message" required></textarea>
            {formErrors.message && <span className="error">{formErrors.message}</span>}
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
