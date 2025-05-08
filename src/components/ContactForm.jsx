import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  // Color palette from the provided colors
  const colors = {
    primary: "#017598",
    secondary: "#087ea2",
    accent: "#05a7be",
    highlight: "#18c4b8",
    bright: "#1ed7cd",
  };

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 overflow-hidden relative">
        {/* Decorative elements */}
        <div 
          className="absolute -right-16 -bottom-16 w-32 h-32 rounded-full opacity-10"
          style={{ background: `linear-gradient(135deg, ${colors.accent}, ${colors.highlight})` }}
        ></div>
        <div 
          className="absolute -left-16 -top-16 w-32 h-32 rounded-full opacity-10"
          style={{ background: `linear-gradient(135deg, ${colors.secondary}, ${colors.primary})` }}
        ></div>
        
        <h2 
          className="text-2xl md:text-3xl font-semibold mb-6 relative z-10"
          style={{ color: colors.primary }}
        >
          Get In Touch
          <div className="h-1 w-12 mt-2 rounded-full" style={{ background: colors.highlight }}></div>
        </h2>
        
        {formStatus.submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 mb-6 rounded-lg ${
              formStatus.success
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-blue-50 text-blue-800 border border-blue-200"
            }`}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-full mr-3 ${
                formStatus.success ? "bg-green-100" : "bg-blue-100"
              }`}>
                {formStatus.success ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span>{formStatus.message}</span>
            </div>
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="group">
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium text-sm mb-2 transition-colors duration-300 group-focus-within:text-accent"
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
                  className={`w-full px-4 py-3 text-gray-700 rounded-lg border ${
                    formErrors.name
                      ? "border-red-400 focus:border-red-500"
                      : "border-gray-300 focus:border-transparent"
                  } focus:outline-none focus:ring-2 transition-all duration-300`}
                  style={{ 
                    boxShadow: formErrors.name ? '0 0 0 1px #f87171' : 'none',
                    background: 'white',
                    focusRing: colors.accent,
                    '--tw-ring-color': colors.accent
                  }}
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {formErrors.name}
                  </p>
                )}
              </div>
            </div>
            
            <div className="group">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium text-sm mb-2 transition-colors duration-300 group-focus-within:text-accent"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className={`w-full px-4 py-3 text-gray-700 rounded-lg border ${
                  formErrors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-300 focus:border-transparent"
                } focus:outline-none focus:ring-2 transition-all duration-300`}
                style={{ 
                  boxShadow: formErrors.email ? '0 0 0 1px #f87171' : 'none',
                  '--tw-ring-color': colors.accent
                }}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {formErrors.email}
                </p>
              )}
            </div>
            
            <div className="group">
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium text-sm mb-2 transition-colors duration-300 group-focus-within:text-accent"
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
                className="w-full px-4 py-3 text-gray-700 rounded-lg border border-gray-300 focus:border-transparent focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ '--tw-ring-color': colors.accent }}
              />
            </div>
            
            <div className="group">
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium text-sm mb-2 transition-colors duration-300 group-focus-within:text-accent"
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
                className="w-full px-4 py-3 text-gray-700 rounded-lg border border-gray-300 focus:border-transparent focus:outline-none focus:ring-2 transition-all duration-300"
                style={{ '--tw-ring-color': colors.accent }}
              />
            </div>
          </div>
          
          <div className="group">
            <label
              htmlFor="message"
              className="block text-gray-700 font-medium text-sm mb-2 transition-colors duration-300 group-focus-within:text-accent"
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
              className={`w-full px-4 py-3 text-gray-700 rounded-lg border ${
                formErrors.message
                  ? "border-red-400 focus:border-red-500"
                  : "border-gray-300 focus:border-transparent"
              } focus:outline-none focus:ring-2 transition-all duration-300`}
              style={{ 
                boxShadow: formErrors.message ? '0 0 0 1px #f87171' : 'none',
                '--tw-ring-color': colors.accent
              }}
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-xs mt-1">
                {formErrors.message}
              </p>
            )}
          </div>
          
          <div className="pt-2">
            <button
              type="submit"
              className="text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              style={{ 
                background: `linear-gradient(to right, ${colors.primary}, ${colors.highlight})`,
                boxShadow: `0 4px 14px 0 rgba(1, 117, 152, 0.25)`
              }}
            >
              <div className="flex items-center justify-center">
                <span>Send Message</span>
                <svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;