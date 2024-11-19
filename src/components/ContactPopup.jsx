// src/components/ContactPopup.js
import React, { useState } from 'react';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server or API)
    console.log('Form submitted:', formData);
    // Optionally clear the form and close the popup after submission
    setFormData({ name: '', email: '', phone: '' });
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white shadow-lg p-4 rounded-lg w-64">
          <button
            onClick={togglePopup}
            className="absolute top-1 right-2 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
          <h3 className="text-xl font-semibold text-center mb-2">Enquire Now</h3>
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <button
          onClick={togglePopup}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Enquire
        </button>
      )}
    </div>
  );
};

export default ContactPopup;
