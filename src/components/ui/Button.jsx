import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  to, 
  href,
  className = '', 
  animate = true,
  icon,
  iconPosition = 'right',
  ...props 
}) => {
  // Base styles for all buttons
  const baseClass = `
    inline-flex items-center justify-center 
    rounded-full font-medium 
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;
  
  // Size variations
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
  };
  
  // Variant styling
  const variantClasses = {
    primary: `
      bg-cyan text-black
      hover:bg-black hover:text-cyan 
      focus:ring-cyan shadow-lg shadow-cyan/20
      hover:shadow-xl hover:shadow-cyan/30
      border border-transparent
    `,
    secondary: `
      bg-black text-white
      hover:bg-cyan hover:text-black
      focus:ring-cyan shadow-lg shadow-black/10
      hover:shadow-xl hover:shadow-cyan/20
      border border-cyan/30
    `,
    outline: `
      bg-transparent text-black dark:text-white
      hover:bg-cyan hover:text-black 
      focus:ring-cyan
      border border-cyan 
    `,
    ghost: `
      bg-transparent text-black dark:text-white
      hover:bg-cyan/10 
      focus:ring-cyan/40
      border border-transparent
    `,
  };
  
  // Icon positioning
  const iconClass = iconPosition === 'left' ? 'mr-2' : 'ml-2';
  
  // Combined classes
  const buttonClass = `
    ${baseClass} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    ${className}
  `;

  // Component to render (button, Link from react-router-dom, or anchor)
  const Component = to ? Link : href ? 'a' : 'button';
  const navigationProps = to ? { to } : href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};
  
  // If animation is disabled, return regular component
  if (!animate) {
    return (
      <Component className={buttonClass} {...navigationProps} {...props}>
        {iconPosition === 'left' && icon && <span className={iconClass}>{icon}</span>}
        {children}
        {iconPosition === 'right' && icon && <span className={iconClass}>{icon}</span>}
      </Component>
    );
  }
  
  // With animation
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      <Component className={buttonClass} {...navigationProps} {...props}>
        {iconPosition === 'left' && icon && <span className={iconClass}>{icon}</span>}
        {children}
        {iconPosition === 'right' && icon && <span className={iconClass}>{icon}</span>}
      </Component>
    </motion.div>
  );
};

export default Button;
