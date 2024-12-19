import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineClose, AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
import { IoCallSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";


const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', services: [] });
  const [formStatus, setFormStatus] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Automatically open popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setFormStatus('');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
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
      setFormData({ name: '', email: '', phone: '', message: '', services: [] });
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
          <div className="p-6 bg-white bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg w-[90%] sm:w-96 md:w-[28rem] relative text-[#022b54]">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <AiOutlineClose size={24} />
            </button>
            <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">Enquire Now</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center bg-black bg-opacity-60 backdrop-blur-lg p-2 rounded">
                <AiOutlineUser className="text-[#FFD700] mr-2 text-lg md:text-xl" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-gray-100 w-full text-xs md:text-sm "
                />
              </div>
              <div className="flex items-center bg-black bg-opacity-60 backdrop-blur-lg p-2 rounded">
                <AiOutlineMail className="text-[#FFD700] mr-2 text-lg md:text-xl" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-gray-100 w-full text-xs md:text-sm "
                />
              </div>
              <div className="flex items-center bg-black bg-opacity-60 backdrop-blur-lg p-2 rounded">
                <AiOutlinePhone className="text-[#FFD700] mr-2 text-lg md:text-xl" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-gray-100 w-full text-xs md:text-sm "
                />
              </div>
              <div className="flex items-start bg-black bg-opacity-60 backdrop-blur-lg p-2 rounded">
                <MdOutlineMessage className="text-[#FFD700] mr-2 mt-1 text-lg md:text-xl" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-transparent outline-none text-gray-100 w-full h-20 resize-none text-xs md:text-sm "
                ></textarea>
              </div>
              <div className="bg-black bg-opacity-60 backdrop-blur-lg p-2 rounded">
                <button
                  type="button"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-full text-center text-gray-100 py-1 md:py-2 rounded font-semibold hover:bg-black transition duration-300 md:text-sm"
                >
                  Select Services
                </button>
                {showDropdown && (
                  <div className="mt-2 bg-white rounded-lg shadow-lg p-4 text-[#022b54] max-h-40 overflow-y-auto">
                    {[
                      "Web Application Development",
                      "Website Development",
                      "Mobile App Development",
                      "SEO Services",
                      "Cloud App Development",
                      "SaaS",
                      "UI/UX Development",
                      "Quality Assurance",
                      "Staff Augmentation"
                    ].map((service, index) => (
                      <label key={index} className="flex items-center text-sm ">
                        <input
                          type="checkbox"
                          name="services"
                          value={service}
                          onChange={handleChange}
                          checked={formData.services.includes(service)}
                          className="mr-2"
                        />
                        {service}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-[#022b54] py-2 rounded font-semibold hover:bg-yellow-500 transition duration-300 text-sm "
              >
                Submit
              </button>
              {formStatus && <p className="text-center text-green-600 mt-2 text-sm ">{formStatus}</p>}
            </form>
          </div>
        </div>
      ) : (
        <div className="fixed bottom-4 right-4 flex items-center space-x-2">
          <a
            href="tel:+919600878113"
            className="bg-[#e6a6ff] text-[#000000] p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 z-50"
          >
            <IoCallSharp />
          </a>
          <a
            href="https://wa.me/9566031113"
            className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-green-500 transition duration-300 z-50"
          >
            <FaWhatsapp />
          </a>
          <button
            onClick={togglePopup}
            className="bg-[#e6a6ff] text-[#020105] p-3 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 z-50"
          >
            Enquire
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
