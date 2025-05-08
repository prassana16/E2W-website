import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setFormStatus({ submitted: true, success: true, message: "Your message has been sent. We'll get back to you soon!" });
      
      // In a real application, you would send the form data to your backend here
      // Example with fetch:
      // fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })
      // .then(response => response.json())
      // .then(data => {
      //   setFormStatus({ submitted: true, success: true, message: data.message });
      // })
      // .catch(error => {
      //   setFormStatus({ submitted: true, success: false, message: "There was an error sending your message. Please try again." });
      // });
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-primary-300" />,
      title: "Our Location",
      details: ["123 Business Avenue", "Tech District, City 12345", "Country"],
    },
    {
      icon: <FaPhone className="text-2xl text-primary-300" />,
      title: "Phone Number",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: <FaEnvelope className="text-2xl text-primary-300" />,
      title: "Email Address",
      details: ["info@easy2work.com", "support@easy2work.com"],
    },
  ];

  const socialMedia = [
    { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
    { icon: <FaTwitter />, link: "https://twitter.com/" },
    { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-900 to-primary-700">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10">
                <h3 className="text-lg font-medium text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialMedia.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary-700 hover:bg-primary-300 w-10 h-10 rounded-full flex items-center justify-center transition duration-300 text-white"
                    >
                      {platform.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-primary-500 mb-6">
                Send Us a Message
              </h2>
              
              {formStatus.submitted && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-primary-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary-200`}
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-primary-300"
                      } focus:outline-none focus:ring-2 focus:ring-primary-200`}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-200"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-primary-300"
                    } focus:outline-none focus:ring-2 focus:ring-primary-200`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-400 text-white font-medium py-3 px-6 rounded-lg transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Map Section */}
      <div className="w-full h-96 mt-16 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176668558126!2d-73.98787488459448!3d40.75798467932687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s!2s"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute inset-0 bg-primary-500/10"></div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
