import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineClose, AiOutlineUser, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineMessage } from 'react-icons/md';
// Communication icons removed


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
    
    // Update form data to include the website lead subject
    const updatedFormData = {
      ...formData,
      to_email: 'sales@esy2work.in',
      subject: 'WEBSITE LEAD'
    };

    emailjs.send(
      'service_yq1c62d',
      'template_t1rxszr',
      updatedFormData,
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
    <div className="fixed bottom-4 right-4 z-50">
    {isOpen ? (
      <div className="w-80 bg-[#05f4f9]/10 rounded-xl shadow-lg overflow-hidden flex flex-col border border-[#05f4f9]/30">
        <div className="flex justify-between items-center p-4 bg-[#05f4f9] text-white">
          <h3 className="text-lg font-semibold">Enquire Now</h3> 
          <button onClick={togglePopup}>
            <AiOutlineClose size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-3 bg-white">
          <div className="flex items-center border border-[#05f4f9]/50 p-2 rounded">
            <AiOutlineUser className="text-[#05f4f9] mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-sm w-full text-[#05f4f9]"
            />
          </div>
          <div className="flex items-center border border-[#05f4f9]/50 p-2 rounded">
            <AiOutlineMail className="text-[#05f4f9] mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-sm w-full text-[#05f4f9]"
            />
          </div>
          <div className="flex items-center border border-[#05f4f9]/50 p-2 rounded">
            <AiOutlinePhone className="text-[#05f4f9] mr-2" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-sm w-full text-[#05f4f9]"
            />
          </div>
          <div className="flex items-start border border-[#05f4f9]/50 p-2 rounded">
            <MdOutlineMessage className="text-[#05f4f9] mr-2 mt-1" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent outline-none text-sm w-full h-20 resize-none text-[#05f4f9]"
            ></textarea>
          </div>
          <div>
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="w-full text-sm bg-[#05f4f9] text-white py-2 rounded hover:bg-[#05f4f9] transition"
            >
              Select Services
            </button>
            {showDropdown && (
              <div className="mt-2 bg-white border border-[#05f4f9]/50 rounded shadow max-h-32 overflow-y-auto text-[#05f4f9]">
                {[
                  "Web Application Development",
                  "Website Development",
                  "Mobile App Development",
                  "SEO Services",
                  "Cloud App Development",
                  "SaaS",
                  "UI/UX Development",
                  "Quality Assurance",
                  "Staff Augmentation",
                ].map((service, index) => (
                  <label key={index} className="flex items-center px-2 py-1 text-xs">
                    <input
                      type="checkbox"
                      name="services"
                      value={service}
                      onChange={handleChange}
                      checked={formData.services.includes(service)}
                      className="mr-2 accent-[#05f4f9]"
                    />
                    {service}
                  </label>
                ))}
              </div>
            )}
          </div>
            <button
              type="submit"
              className="w-full bg-[#05f4f9] text-white py-2 rounded font-semibold hover:bg-[#05f4f9] transition text-sm"
            >
              Submit
            </button>
            {formStatus && <p className="text-center text-[#05f4f9] text-xs">{formStatus}</p>}
          </form>
        </div>      ) : (
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePopup}
            className="bg-[#05f4f9] text-white p-3 rounded-full shadow hover:bg-[#05f4f9] transition-colors"
          >
            Enquire
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactPopup; 
