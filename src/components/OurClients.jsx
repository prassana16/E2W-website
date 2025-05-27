import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Gracescans from '../assets/images/Grace-Scans.png';
import Baleen from '../assets/images/thumbnail.png';
import BajajAuto from '../assets/images/bajaj Auto.png';
import BajajFinance from '../assets/images/Bajaj.png';
import { FaHandshake, FaChartLine, FaUsers, FaStar } from 'react-icons/fa';
import { preloadImages } from '../utils/imagePreloader';

function OurClients() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images on component mount
  useEffect(() => {
    const imageSources = [
      Gracescans,
      Baleen,
      BajajAuto,
      BajajFinance
    ];
    
    preloadImages(imageSources)
      .then(() => {
        console.log('Client images preloaded successfully');
        setImagesLoaded(true);
      });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // Client logos
  const trustedClients = [
    { name: "Grace Scans", logo: Gracescans, description: "Healthcare Solutions" },
    { name: "Baleen Media", logo: Baleen, description: "Digital Media Agency" },
    { name: "Bajaj Auto", logo: BajajAuto, description: "Automotive Manufacturing" },
    { name: "Bajaj Finance", logo: BajajFinance, description: "Financial Services" },
    // Add more clients as needed
  ];

  // Revenue sharing models benefits
  const benefits = [
    {
      icon: <FaHandshake />,
      title: "Partnership-Driven",
      description: "True collaboration where success is shared between both parties"
    },
    {
      icon: <FaChartLine />,
      title: "Performance-Based",
      description: "Payments and rewards directly tied to measurable business outcomes"
    },
    {
      icon: <FaUsers />,
      title: "Risk Distribution",
      description: "Reduced upfront costs with shared investment in long-term success"
    },
    {
      icon: <FaStar />,
      title: "Aligned Interests",
      description: "Both parties motivated to achieve the highest quality results"
    },
  ];

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden py-20"
    >
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Decorative lines */}
        <div className="absolute top-0 left-0 right-0 flex justify-between h-96 opacity-20">
          {Array(12).fill().map((_, i) => (
            <motion.div
              key={i}
              className="bg-white w-px h-full"
              initial={{ scaleY: 0, opacity: 0.1 }}
              animate={{ 
                scaleY: [0.3, 1, 0.6, 0.9, 0.4, 0.7, 1, 0.5], 
                opacity: [0.1, 0.3, 0.2, 0.4, 0.2, 0.3, 0.4, 0.1] 
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.4,
              }}
              style={{ transformOrigin: "top" }}
            />
          ))}
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array(15).fill().map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 6 + 2,
                height: Math.random() * 6 + 2,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50],
                x: [0, (Math.random() - 0.5) * 50],
                opacity: [0, 0.5, 0],
                scale: [0, 1, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h5 className="text-purple-300 font-medium mb-3">Our Partnerships</h5>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-Tinos mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="max-w-3xl mx-auto text-white/80 text-lg">
              We work with innovative companies across various sectors, combining technical expertise 
              and strategic insight to deliver exceptional digital experiences.
            </p>
          </motion.div>

        

          {/* Revenue Sharing Model */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-to-br from-white/10 to-purple-900/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 overflow-hidden relative">
              {/* Background decoration */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
              <div className="absolute -left-20 -top-20 w-40 h-40 rounded-full bg-pink-500/10 blur-3xl"></div>
              
              <h3 className="text-2xl md:text-3xl font-Tinos font-bold text-white text-center mb-3">
                Revenue Sharing Model
              </h3>
              
              <p className="text-white/80 text-center max-w-3xl mx-auto mb-12">
                Our innovative partnership approach that aligns our success with yours, creating a truly collaborative relationship focused on growth and results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors"
                    whileHover={{ y: -5, outlineColor: '#05f4f9', outlineWidth: '2px', outlineStyle: 'solid' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-black text-cyan w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl">
                      {benefit.icon}
                    </div>
                    <h4 className="text-white font-medium text-lg mb-2">{benefit.title}</h4>
                    <p className="text-white/70 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
         {/* Revenue Sharing Clients */}
<motion.div variants={itemVariants} className="mt-10">
  <div className="bg-gradient-to-br from-white/5 to-purple-900/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
    <h3 className="text-2xl font-Tinos font-bold text-white text-center mb-6">
      Revenue Sharing Success Stories
    </h3>

    <p className="text-white/80 text-center max-w-3xl mx-auto mb-10">
      Easy2Work collaborates with forward-thinking organizations under our Revenue Share Model, fostering
      partnerships that go beyond traditional client relationships.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Grace Scans */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(98, 0, 120, 0.2)' }}
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-10 rounded-full overflow-hidden bg-white/20 border border-white/30">
            <img
              src={Gracescans}
              alt="Grace Scans"
              className="w-full h-full object-contain"
              onError={(e) => {
                console.log("Failed to load Grace Scans image");
                e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="64" height="64" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="64" height="64" fill="%23333"/%3E%3Ctext x="32" y="37" font-size="10" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23FFFFFF"%3EGrace%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          <div>
            <h4 className="text-xl font-medium text-white mb-2">Grace Scans</h4>
            <p className="text-white/70 mb-4">
              A revolutionary healthcare diagnostics platform leveraging AI to optimize patient care and operational efficiency.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-purple-300">Healthcare Technology</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                Active Partnership
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Baleen Media */}
      <motion.div
        className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(98, 0, 120, 0.2)' }}
      >
        <div className="flex items-start gap-4">
          <div className="w-16  rounded-full overflow-hidden bg-white/20 border border-white/30">
            <img
              src={Baleen}
              alt="Baleen Media"
              className="w-full h-full object-contain"
              onError={(e) => {
                console.log("Failed to load Baleen Media image");
                e.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg width="64" height="64" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="64" height="64" fill="%23333"/%3E%3Ctext x="32" y="37" font-size="10" text-anchor="middle" alignment-baseline="middle" font-family="Arial, sans-serif" fill="%23FFFFFF"%3EBaleen%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
          <div>
            <h4 className="text-xl font-medium text-white mb-2">Baleen Media</h4>
            <p className="text-white/70 mb-4">
              A dynamic digital media agency specializing in content creation, marketing strategy, and brand development.
            </p>
            <div className="flex justify-between items-center text-sm">
              <span className="text-purple-300">Digital Marketing</span>
              <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">
                Active Partnership
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</motion.div>


        </motion.div>
      </div>
    </section>
  );
}

export default OurClients;
