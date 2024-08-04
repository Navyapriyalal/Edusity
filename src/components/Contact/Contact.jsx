import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "77c9bf4a-2850-4fc5-8a52-1a6bad43afc1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us your Feedback <img src={msg_icon} alt="" /></h3>
        <p>Fill out the form below, and we'll get back to you as soon as possible. We value your questions, feedback, and comments. Provide your name, email, subject, and message, and our team will respond promptly. Your input helps us improve and serve you better. Thank you for taking the time to reach out to us, and we look forward to connecting with you soon!</p>
        <ul>
            <li><img src={mail_icon} alt="" />Edusity@gmail.com</li>
            <li><img src={phone_icon} alt="" />+91 987-654-3210</li>
            <li><img src={location_icon} alt="" />123 Your Street,<br/>Your City, Your State,<br/>Your Country, 123456</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your Name' required/>
            <label>Your Phone</label>
            <input type="text" name='phone' placeholder='Enter your Phone' required />
            <label>Write your Messages Here</label>
            <textarea name="message" rows='6' placeholder='Enter your message here' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
