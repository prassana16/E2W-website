import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '',
  ...props 
}) => {
  // Base styles for all cards
  const baseClass = `
    rounded-2xl 
    overflow-hidden 
    transition-all duration-300
  `;
  
  // Variant styling
  const variantClasses = {
    default: `
      bg-white dark:bg-black 
      border border-cyan/20
      shadow-lg
    `,
    elevated: `
      bg-white dark:bg-black 
      border border-cyan/30
      shadow-xl
    `,
    outline: `
      bg-transparent
      border border-cyan
    `,
    glass: `
      bg-white/30 dark:bg-black/30
      backdrop-blur-lg
      border border-white/20 dark:border-cyan/20
      shadow-lg
    `,
  };
  
  // Hover effects if enabled
  const hoverClass = hover ? `
    hover:shadow-xl
    hover:border-cyan/50
    hover:-translate-y-1
  ` : '';
  
  // Combined classes
  const cardClass = `
    ${baseClass} 
    ${variantClasses[variant]}
    ${hoverClass}
    ${className}
  `;

  return (
    <motion.div 
      className={cardClass} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
