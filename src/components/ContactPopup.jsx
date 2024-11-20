// src/components/ContactPopup.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineClose, AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(true); // Form starts open by default
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setFormStatus('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_yq1c62d',
      'template_t1rxszr',
      formData,
      'ywtm-2mqEWbpTQIux'
    )
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setFormStatus('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsOpen(false), 2000); // Close after success message
    })
    .catch((err) => {
      console.error('Failed to send the email:', err);
      setFormStatus('An error occurred. Please try again.');
    });
  };

  return (
    <div className={`fixed ${isOpen ? 'inset-0 flex items-center justify-center' : 'bottom-4 right-4'} z-50`}>
      {isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-transform duration-300">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative text-[#022b54]">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>
            <h3 className="text-xl font-semibold text-center mb-4">Enquire Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center bg-[#f4f4f4] p-2 rounded">
                <AiOutlineUser className="text-[#FFD700] mr-2" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-[#022b54] w-full"
                />
              </div>
              <div className="flex items-center bg-[#f4f4f4] p-2 rounded">
                <AiOutlineMail className="text-[#FFD700] mr-2" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-[#022b54] w-full"
                />
              </div>
              <div className="flex items-center bg-[#f4f4f4] p-2 rounded">
                <AiOutlinePhone className="text-[#FFD700] mr-2" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-[#022b54] w-full"
                />
              </div>
              <div className="flex items-start bg-[#f4f4f4] p-2 rounded">
                <MdOutlineMessage className="text-[#FFD700] mr-2" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-[#022b54] w-full h-24 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-[#022b54] py-2 rounded font-semibold hover:bg-yellow-500 transition duration-300"
              >
                Submit
              </button>
              {formStatus && <p className="text-center text-green-600 mt-2">{formStatus}</p>}
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={togglePopup}
          className="bg-[#FFD700] text-[#022b54] p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300"
        >
          Enquire
        </button>
      )}
    </div>
  );
};

export default ContactPopup;
