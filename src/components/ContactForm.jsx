import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaRegPaperPlane, FaCheck, FaExclamationTriangle, FaMapMarkerAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import emailjs from 'emailjs-com';

const ContactForm = () => {  // Main color scheme based on the updated design system
  const colors = {
    primary: "#000000", // Black
    secondary: "#05f4f9", // Cyan
    accent: "#ffffff", // White
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
    isLoading: false,
  });

  const [formErrors, setFormErrors] = useState({});
  const [formTouched, setFormTouched] = useState({});
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        duration: 0.6,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (!formData.message.trim()) errors.message = "Message is required";
    else if (formData.message.trim().length < 10) errors.message = "Message should be at least 10 characters";
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Mark field as touched
    if (!formTouched[name]) {
      setFormTouched(prev => ({ ...prev, [name]: true }));
    }
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Validate touched fields on blur
  const handleBlur = (e) => {
    const { name } = e.target;
    
    setFormTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate just this field
    const errors = { ...formErrors };
    
    if (name === 'name' && !formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (name === 'email') {
      if (!formData.email.trim()) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errors.email = "Please enter a valid email address";
      }
    }
    
    if (name === 'phone' && formData.phone && !/^\+?[0-9\s\-()]{8,20}$/.test(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    
    if (name === 'message') {
      if (!formData.message.trim()) {
        errors.message = "Message is required";
      } else if (formData.message.trim().length < 10) {
        errors.message = "Message should be at least 10 characters";
      }
    }
    
    setFormErrors(errors);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setFormStatus(prev => ({ ...prev, isLoading: true }));
    
    try {      // Send email to sales@esy2work.in using emailjs
      const updatedFormData = {
        ...formData,
        to_email: 'sales@esy2work.in',
        subject: 'WEBSITE LEAD',
      };
      
      // Use emailjs to send the form data
      await emailjs.send(
        'service_yq1c62d',
        'template_t1rxszr',
        updatedFormData,
        'ywtm-2mqEWbpTQIux'
      );
      
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you! Your message has been sent successfully. We'll get back to you soon.",
        isLoading: false
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setFormTouched({});
      
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Oops! Something went wrong. Please try again later or contact us directly via email.",
        isLoading: false
      });
    }
  };

  const clearStatus = () => {
    setFormStatus(prev => ({ ...prev, submitted: false, message: "" }));
  };
  // Contact information items for display
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-cyan" />,
      title: "Our Office",
      content: "No.32, 3rd Cross St, Kasturba Nagar, Adyar, Chennai, Tamil Nadu 600020",
      link: "https://maps.google.com/maps?q=Easy2Work+No.32+3rd+Cross+St+Kasturba+Nagar+Adyar+Chennai+Tamil+Nadu+600020&t=&z=13&ie=UTF8&iwloc=&output=embed"
    },    {
      icon: <FaEnvelope className="text-cyan" />,
      title: "Email Us",
      content: "sales@esy2work.in",
      link: "mailto:sales@esy2work.in"
    },
    {      icon: <FaGlobe className="text-cyan" />,
      title: "Global Presence",
      content: "USA, Canada, Germany, Singapore, Dubai",
    }
  ];

  return (    <div ref={ref} className="relative py-16 lg:py-24 bg-gradient-to-br from-white to-white dark:from-black dark:to-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute right-0 top-0 w-1/3 h-1/3 opacity-20 dark:opacity-10 bg-gradient-to-b from-cyan to-cyan blur-3xl rounded-full transform -translate-y-1/2 translate-x-1/4"
        ></div>
        <div 
          className="absolute left-0 bottom-0 w-1/4 h-1/4 opacity-20 dark:opacity-10 bg-gradient-to-t from-cyan to-black blur-3xl rounded-full transform translate-y-1/3 -translate-x-1/4"
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}          <motion.div 
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h5 className="text-cyan font-medium mb-2">Get in Touch</h5>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-Tinos font-bold mb-4 text-black dark:text-white">
              <span className="relative">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-cyan/20"></span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-black/80 dark:text-white/80">
              Have questions or want to discuss how we can help your business grow? 
              Reach out to our team and we'll get back to you shortly.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Contact information column */}
            <motion.div 
              variants={itemVariants} 
              className="lg:w-1/3"
            >              <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-6 lg:p-8 h-full border border-cyan/20 elegant-shadow">
                <h3 className="text-xl font-bold mb-6 text-black dark:text-white">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-black dark:bg-black/30 p-3 rounded-lg mr-4 border border-cyan/30">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-black dark:text-white">{item.title}</h4>
                        {item.link ? (
                          <a 
                            href={item.link} 
                            className="text-black/70 dark:text-white hover:text-cyan dark:hover:text-cyan transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-white dark:text-white">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                  {/* Google Map */}
                <div className="mt-8 rounded-lg overflow-hidden bg-black dark:bg-black h-64">
                  <iframe 
                    src="https://maps.google.com/maps?q=Easy2Work+No.32+3rd+Cross+St+Kasturba+Nagar+Adyar+Chennai+Tamil+Nadu+600020&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0"
                    title="Easy2Work Chennai Office Location"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Easy2Work office location map"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact form column */}
            <motion.div 
              variants={itemVariants}
              className="lg:w-2/3"
            >
              <div className="bg-white dark:bg-black rounded-2xl shadow-xl p-6 lg:p-8 border border-cyan/20">
                {/* Form status messages */}
                <AnimatePresence>
                  {formStatus.submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`mb-6 p-4 rounded-lg flex items-start ${
                        formStatus.success 
                          ? "bg-white text-black dark:bg-black dark:text-white" 
                          : "bg-red-50 text-red-800 dark:bg-red-900/30 dark:text-red-200"
                      }`}
                    >
                      <div className="mr-3 mt-0.5">
                        {formStatus.success ? (
                          <FaCheck className="text-cyan dark:text-cyan" />
                        ) : (
                          <FaExclamationTriangle className="text-red-500 dark:text-red-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p>{formStatus.message}</p>
                      </div>
                      <button 
                        onClick={clearStatus}
                        className="ml-3 text-black hover:text-cyan dark:text-white dark:hover:text-cyan"
                        aria-label="Close message"
                      >
                        &times;
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name field */}
                    <div>
                      <label 
                        htmlFor="name" 
                        className="block text-sm font-medium text-black dark:text-white mb-1"
                      >
                        Full Name <span className="text-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="John Doe"                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.name && formTouched.name
                            ? "border-red-500 dark:border-red-400"
                            : "border-black dark:border-cyan"
                        } focus:outline-none focus:ring-2 focus:ring-cyan dark:focus:ring-cyan dark:bg-black dark:text-white`}
                        aria-invalid={formErrors.name ? "true" : "false"}
                      />
                      {formErrors.name && formTouched.name && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email field */}
                    <div>                      <label 
                        htmlFor="email" 
                        className="block text-sm font-medium text-black dark:text-white mb-1"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="john@example.com"                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.email && formTouched.email
                            ? "border-red-500 dark:border-red-400"
                            : "border-black dark:border-cyan"
                        } focus:outline-none focus:ring-2 focus:ring-cyan dark:focus:ring-cyan dark:bg-black dark:text-white`}
                        aria-invalid={formErrors.email ? "true" : "false"}
                      />
                      {formErrors.email && formTouched.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                    
                    {/* Phone field */}
                    <div>                      <label 
                        htmlFor="phone" 
                        className="block text-sm font-medium text-black dark:text-white mb-1"
                      >
                        Phone Number <span className="text-black dark:text-white font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="+1 (234) 567-8910"                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.phone && formTouched.phone
                            ? "border-red-500 dark:border-red-400"
                            : "border-black dark:border-cyan"
                        } focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan dark:bg-black dark:text-white`}
                        aria-invalid={formErrors.phone ? "true" : "false"}
                      />
                      {formErrors.phone && formTouched.phone && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.phone}</p>
                      )}
                    </div>

                    {/* Subject field */}
                    <div>                      <label 
                        htmlFor="subject" 
                        className="block text-sm font-medium text-black dark:text-white mb-1"
                      >
                        Subject <span className="text-black dark:text-white font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is your inquiry about?"
                        className="w-full px-4 py-3 rounded-lg border border-black dark:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan focus:border-cyan dark:bg-black dark:text-white"
                      />
                    </div>

                    {/* Message field */}
                    <div className="md:col-span-2">
                      <label 
                        htmlFor="message" 
                        className="block text-sm font-medium text-black dark:text-white mb-1"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Please tell us how we can help you..."
                        rows={5}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          formErrors.message && formTouched.message
                            ? "border-red-500 dark:border-red-400"
                            : "border-black dark:border-cyan"
                        } focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 dark:bg-black dark:text-white`}
                        aria-invalid={formErrors.message ? "true" : "false"}
                      ></textarea>
                      {formErrors.message && formTouched.message && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{formErrors.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Submit button */}
                  <div className="flex justify-end">                    <motion.button
                      type="submit"
                      disabled={formStatus.isLoading}
                      className={`px-6 py-3 bg-cyan text-black rounded-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:bg-black hover:text-cyan elegant-transition ${
                        formStatus.isLoading ? "opacity-80 cursor-not-allowed" : ""
                      } border border-cyan/20`}
                      whileHover={{ scale: formStatus.isLoading ? 1 : 1.03 }}
                      whileTap={{ scale: formStatus.isLoading ? 1 : 0.98 }}
                    >
                      {formStatus.isLoading ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin mr-2"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaRegPaperPlane className="mr-2" />
                          <span>Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
