import React from 'react';
import { motion } from 'framer-motion';

const FeatureTile = ({ 
  icon,
  title, 
  description,
  variant = 'default',
  animate = true,
  className = '',
  ...props 
}) => {
  // Variants for different tile styles
  const tileVariants = {
    default: (
      <div 
        className={`
          p-8 rounded-2xl 
          bg-white dark:bg-black 
          border border-cyan/20 
          transition-all duration-300 
          hover:border-cyan hover:shadow-lg hover:shadow-cyan/10
          ${className}
        `}
        {...props}
      >
        {/* Icon */}
        {icon && (
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-black/5 dark:bg-white/5 border border-cyan/30 mb-6">
            <span className="text-3xl text-cyan">{icon}</span>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{title}</h3>
        
        {/* Description */}
        <p className="text-black/70 dark:text-white/70">{description}</p>
      </div>
    ),
    
    bordered: (
      <div 
        className={`
          p-8 rounded-2xl 
          bg-transparent
          border-2 border-cyan
          transition-all duration-300 
          hover:bg-cyan/5
          ${className}
        `}
        {...props}
      >
        {/* Icon */}
        {icon && (
          <div className="flex items-center justify-center w-14 h-14 mb-6">
            <span className="text-3xl text-cyan">{icon}</span>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{title}</h3>
        
        {/* Description */}
        <p className="text-black/70 dark:text-white/70">{description}</p>
      </div>
    ),
    
    minimal: (
      <div 
        className={`
          p-8
          transition-all duration-300 
          hover:bg-white/5 dark:hover:bg-white/5
          ${className}
        `}
        {...props}
      >
        {/* Icon */}
        {icon && (
          <div className="flex items-center mb-4">
            <span className="text-2xl text-cyan mr-3">{icon}</span>
            <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
          </div>
        )}
        
        {/* Description */}
        <p className="text-black/70 dark:text-white/70">{description}</p>
      </div>
    ),
    
    card: (
      <div 
        className={`
          relative overflow-hidden p-8 rounded-2xl 
          bg-gradient-to-br from-black to-black/80 
          text-white
          border border-cyan/30 
          transition-all duration-300 
          hover:border-cyan hover:shadow-lg hover:shadow-cyan/20
          ${className}
        `}
        {...props}
      >
        {/* Background decoration */}
        <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-cyan/10 blur-xl"></div>
        
        {/* Icon */}
        {icon && (
          <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <span className="text-3xl text-cyan">{icon}</span>
          </div>
        )}
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        
        {/* Description */}
        <p className="text-white/80">{description}</p>
        
        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan to-transparent"></div>
      </div>
    ),
  };

  if (!animate) {
    return tileVariants[variant];
  }
  
  // With animation
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {tileVariants[variant]}
    </motion.div>
  );
};

export default FeatureTile;
