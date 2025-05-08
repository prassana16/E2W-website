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
      // Show loading state
      setFormStatus({ submitted: true, success: false, message: "Sending your message..." });
      
      // Simulate API call with a timeout
      setTimeout(() => {
        setFormStatus({ submitted: true, success: true, message: "Your message has been sent. We'll get back to you soon!" });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 1500);
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Our Location",
      details: ["123 Business Avenue", "Tech District, City 12345", "Country"],
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone Number",
      details: ["+1 (234) 567-890", "+1 (234) 567-891"],
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
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

  // Custom colors based on the provided palette
  const colors = {
    primary: "#017598",
    secondary: "#087ea2",
    accent: "#05a7be",
    highlight: "#18c4b8",
    bright: "#1ed7cd",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section with Gradient Background */}
      <div 
        className="relative py-24" 
        style={{ 
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute right-0 top-0 h-full w-full translate-x-1/3 opacity-20"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.highlight} />
                <stop offset="100%" stopColor={colors.bright} />
              </linearGradient>
            </defs>
            <circle cx="500" cy="500" r="400" fill="url(#circleGradient)" />
            <circle cx="800" cy="200" r="150" fill="url(#circleGradient)" opacity="0.6" />
            <circle cx="200" cy="700" r="180" fill="url(#circleGradient)" opacity="0.8" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              Get in Touch With Us
            </h1>
            <div className="h-1 w-24 mx-auto bg-white rounded-full mb-6"></div>
            <p className="text-lg text-white max-w-2xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have a question about our services, pricing, 
              or anything else, our team is ready to answer all your questions.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-10 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 lg:sticky lg:top-20"
          >
            <div 
              className="rounded-xl p-6 md:p-8 shadow-xl overflow-hidden relative"
              style={{ background: `linear-gradient(to bottom right, ${colors.secondary}, ${colors.primary})` }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full" style={{ background: colors.highlight, opacity: 0.1 }}></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full" style={{ background: colors.bright, opacity: 0.1 }}></div>
              
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-6 md:mb-8 relative">
                Contact Information
                <div className="h-1 w-12 bg-white rounded-full mt-2"></div>
              </h2>
              
              <div className="space-y-6 md:space-y-8 relative z-10">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div 
                      className="mr-4 md:mr-5 p-2 md:p-3 rounded-lg transform transition-all duration-300 group-hover:scale-110"
                      style={{ background: `${colors.highlight}` }}
                    >
                      {React.cloneElement(item.icon, { className: "text-white text-xl md:text-2xl" })}
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-medium text-white mb-1 md:mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-sm md:text-base text-gray-100">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 md:mt-12 pt-4 md:pt-6 border-t border-white/20 relative z-10">
                <h3 className="text-base md:text-lg font-medium text-white mb-4">
                  Connect With Us
                </h3>
                <div className="flex space-x-3 md:space-x-4">
                  {socialMedia.map((platform, index) => (
                    <a
                      key={index}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-sm hover:bg-white/20 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:scale-110"
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
            className="lg:col-span-8"
          >
            <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
              <h2 
                className="text-2xl font-semibold mb-6"
                style={{ color: colors.primary }}
              >
                Send Us a Message
                <div className="h-1 w-12 mt-2 rounded-full" style={{ background: colors.highlight }}></div>
              </h2>
              
              {formStatus.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 mb-6 rounded-lg ${
                    formStatus.success
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${
                      formStatus.success ? "bg-green-100" : "bg-red-100"
                    }`}>
                      {formStatus.success ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span>{formStatus.message}</span>
                  </div>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium text-sm md:text-base mb-2"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg border ${
                          formErrors.name
                            ? "border-red-500"
                            : "border-gray-300"
                        } focus:outline-none focus:ring-2 transition-all duration-300`}
                        style={{ 
                          borderColor: formErrors.name ? "#ef4444" : "#e5e7eb",
                          focusRing: colors.accent
                        }}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-xs md:text-sm mt-1">
                          {formErrors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium text-sm md:text-base mb-2"
                    >
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="johndoe@example.com"
                      className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg border ${
                        formErrors.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } focus:outline-none focus:ring-2 transition-all duration-300`}
                      style={{ 
                        focusRing: colors.accent
                      }}
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-xs md:text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium text-sm md:text-base mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (234) 567-890"
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        focusRing: colors.accent
                      }}
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium text-sm md:text-base mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-300"
                      style={{ 
                        focusRing: colors.accent
                      }}
                    />
                  </div>
                </div>
                
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium text-sm md:text-base mb-2"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                    className={`w-full px-3 md:px-4 py-2 md:py-3 text-sm md:text-base rounded-lg border ${
                      formErrors.message
                        ? "border-red-500"
                        : "border-gray-300"
                    } focus:outline-none focus:ring-2 transition-all duration-300`}
                    style={{ 
                      focusRing: colors.accent
                    }}
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="text-white font-medium text-sm md:text-base py-2 md:py-3 px-6 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center w-full md:w-auto"
                  style={{ 
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.accent})`,
                    boxShadow: `0 4px 14px 0 rgba(1, 117, 152, 0.3)`
                  }}
                >
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Map Section with Corporate Styling */}
      <div className="w-full mt-8 relative">
        <div className="container mx-auto px-4 mb-8">
          <h2 
            className="text-2xl font-semibold text-center"
            style={{ color: colors.primary }}
          >
            Visit Our Office
            <div className="h-1 w-16 mx-auto mt-2 rounded-full" style={{ background: colors.highlight }}></div>
          </h2>
        </div>
        
        <div className="relative h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176668558126!2d-73.98787488459448!3d40.75798467932687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5m2!1s!2s"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: `inset 0 4px 12px 0 rgba(1, 117, 152, 0.15), inset 0 -4px 12px 0 rgba(1, 117, 152, 0.15)` }}
          ></div>
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div 
        className="py-16 mt-16 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(to right, ${colors.secondary}, ${colors.primary})`,
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Let's turn your ideas into reality. Our team is ready to help you with your next project.
          </p>
          <button 
            className="bg-white text-lg px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            style={{ color: colors.primary, boxShadow: '0 4px 14px 0 rgba(255, 255, 255, 0.3)' }}
          >
            Start Your Project
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
