import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-heading">Get In Touch</h2>
        <p className="contact-text">
          Feel free to reach out if you have any questions or just want to connect!
        </p>

        {/* Contact Form */}
        <form className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              rows={4}
              placeholder="Your Message"
              className="form-textarea"
            />
          </div>
          <button
            type="submit"
            className="form-button"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="contact-info">
          <p>Or reach me at:</p>

          {/* Phone Number */}
          <div>
            <span className="info-label">Phone: </span>
            <a href="tel:+1234567890" className="info-link">
              +1 (234) 567-890
            </a>
          </div>

          {/* Email */}
          <div>
            <span className="info-label">Email: </span>
            <a href="mailto:example@example.com" className="info-link">
              ismanazeer85@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
