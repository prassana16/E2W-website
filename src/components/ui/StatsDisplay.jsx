import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsDisplay = ({
  items = [],
  variant = 'default',
  columns = 4,
  className = '',
  ...props
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    },
  };
  
  // Helper function to determine grid columns class
  const getGridClass = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-3';
      case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  // Stats counter animation
  const CounterAnimation = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!inView) return;
      
      let start = 0;
      const end = parseInt(value.toString().replace(/,/g, ''));
      const increment = end / (duration * 60); // 60fps
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 1000 / 60);
      
      return () => clearInterval(timer);
    }, [value, duration, inView]);
    
    // Format the number with commas
    const formatNumber = (num) => {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    
    return <>{formatNumber(count)}</>;
  };
  
  // Variants
  const renderVariant = {
    default: (
      <div className={`grid ${getGridClass()} gap-8 ${className}`} {...props}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-white dark:bg-black rounded-2xl p-6 text-center border border-cyan/20 transition-all duration-300 hover:border-cyan hover:shadow-lg"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-3">
              {item.prefix || ''}<CounterAnimation value={item.value} />{item.suffix || ''}
            </h3>
            <p className="text-black/70 dark:text-white/70 text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    ),
    
    minimal: (
      <div className={`grid ${getGridClass()} gap-8 ${className}`} {...props}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
              {item.prefix || ''}<CounterAnimation value={item.value} />{item.suffix || ''}
            </h3>
            <div className="w-12 h-1 bg-cyan mx-auto my-3"></div>
            <p className="text-black/70 dark:text-white/70">{item.label}</p>
          </motion.div>
        ))}
      </div>
    ),
    
    inline: (
      <div className={`flex flex-wrap justify-center gap-8 md:gap-16 ${className}`} {...props}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white inline-flex items-center">
              {item.prefix || ''}<CounterAnimation value={item.value} />{item.suffix || ''}
            </h3>
            <p className="text-black/70 dark:text-white/70 text-sm md:text-base ml-2 md:ml-3 inline-block">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    ),
    
    highlight: (
      <div className={`grid ${getGridClass()} gap-8 ${className}`} {...props}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative bg-gradient-to-br from-black to-black/90 text-white rounded-2xl p-8 text-center overflow-hidden border border-cyan/30"
          >
            {/* Background glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-cyan/20 blur-xl rounded-full"></div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-cyan mb-2">
              {item.prefix || ''}<CounterAnimation value={item.value} />{item.suffix || ''}
            </h3>
            <p className="text-white/90 relative z-10">{item.label}</p>
          </motion.div>
        ))}
      </div>
    ),
  };
  
  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {renderVariant[variant]}
    </motion.div>
  );
};

export default StatsDisplay;
