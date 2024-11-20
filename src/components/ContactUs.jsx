// ContactUs.jsx
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
// import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_yq1c62d', // replace with your EmailJS service ID
      'template_t1rxszr', // replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      'ywtm-2mqEWbpTQIux' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSubmitted(true);
    })
    .catch((err) => {
      console.error('Failed to send the email:', err);
      setError('An error occurred. Please try again.');
    });
  };

  return (
    <div className="flex flex-col items-center bg-[#022b54] p-8 rounded-lg shadow-lg text-[#F7F2E7] w-full md:w-2/3 lg:w-1/2 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-lg text-center mb-8">We’d love to hear from you! Fill out the form below, and we’ll get back to you as soon as possible.</p>

      {isSubmitted ? (
        <div className="text-center">
          <h3 className="text-2xl text-[#FFD700] mb-4">Thank You!</h3>
          <p>Your message has been sent. We’ll be in touch soon.</p>
          <button onClick={() => setIsSubmitted(false)} className="mt-4 bg-[#FFD700] text-[#022b54] px-4 py-2 rounded-md font-semibold">
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          <div className="flex items-center bg-[#001d3a] rounded-md p-3">
            <AiOutlineUser className="text-[#FFD700] mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-[#F7F2E7] w-full"
            />
          </div>

          <div className="flex items-center bg-[#001d3a] rounded-md p-3">
            <AiOutlineMail className="text-[#FFD700] mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-[#F7F2E7] w-full"
            />
          </div>

          <div className="flex items-center bg-[#001d3a] rounded-md p-3">
            <AiOutlinePhone className="text-[#FFD700] mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-[#F7F2E7] w-full"
            />
          </div>

          <div className="flex items-start bg-[#001d3a] rounded-md p-3">
            <MdOutlineMessage className="text-[#FFD700] mt-1 mr-2" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-[#F7F2E7] w-full h-24 resize-none"
            ></textarea>
          </div>

          <button type="submit" className="bg-[#FFD700] text-[#022b54] w-full py-3 rounded-md font-semibold hover:bg-[#ffcc00] transition duration-300">
            Submit
          </button>
          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
