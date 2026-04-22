import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import ChatWidget from "./ChatWidget";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_62kan2j",
        "template_gud7pll",
        e.target,
        "jVgPOxH3KJxH0_dMI",
      )
       emailjs
      .sendForm(
        "service_62kan2j",
        "template_h0n1k8t",
        e.target,
        "jVgPOxH3KJxH0_dMI",
      )
      .then((result) => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        alert("Failed to send message");
      });

    e.target.reset();
  };

  return (
    <section className="contact">
      <h2 className="section-title">Contact Me</h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's talk 👋</h3>

          <p>
            Email:{" "}
            <a href="mailto:ommundhe207@gmail.com">ommundhe207@gmail.com</a>
          </p>
          <p>Phone: +91 84596 85683</p>
          <p>Location: Seliu</p>

          <div className="social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div>
          
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Email</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
