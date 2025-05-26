import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = ({ 
  variant = 'center',
  className = '',
  animate = true,
  width = "80%",
  ...props 
}) => {
  // Variants for different divider styles
  const dividerVariants = {
    center: (
      <div className={`relative h-0.5 ${width} mx-auto my-16 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-cyan rounded-full"></div>
        
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div 
            className="w-6 h-6 rounded-full border border-cyan/30"
            animate={animate ? { scale: [0.8, 1.2, 0.8] } : {}}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    ),
    
    lines: (
      <div className={`flex items-center justify-center gap-3 my-16 ${className}`}>
        <div className="h-px bg-cyan w-16 md:w-32"></div>
        <div className="w-3 h-3 rounded-full bg-cyan"></div>
        <div className="h-px bg-cyan w-16 md:w-32"></div>
      </div>
    ),
    
    gradient: (
      <div className={`relative h-px ${width} mx-auto my-16 ${className}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-cyan to-black dark:from-white dark:via-cyan dark:to-white"></div>
        
        <motion.div 
          className="absolute inset-y-0 left-0 right-0 bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={animate ? {
            x: ['-100%', '100%'],
          } : {}}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      </div>
    ),
    
    dots: (
      <div className={`flex justify-center gap-2 my-16 ${className}`}>
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i}
            className="w-2 h-2 rounded-full bg-cyan"
            animate={animate ? {
              scale: [1, 1.5, 1],
            } : {}}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    ),
    
    wave: (
      <div className={`relative h-8 ${width} mx-auto my-16 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, transparent, transparent)",
          }}
        >
          <svg viewBox="0 0 1200 120" className="absolute h-full w-full">
            <motion.path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#05f4f9"
              opacity="0.1"
              initial={{ x: -1200 }}
              animate={animate ? { x: 0 } : {}}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
            />
            <motion.path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              fill="#05f4f9"
              opacity="0.2"
              initial={{ x: -1200 }}
              animate={animate ? { x: 0 } : {}}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
                delay: 0.2,
              }}
            />
          </svg>
        </motion.div>
      </div>
    ),
  };
  
  return dividerVariants[variant] || dividerVariants.center;
};

export default SectionDivider;
