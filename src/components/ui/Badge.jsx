import React from 'react';
import { motion } from 'framer-motion';

const Badge = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  glow = false,
  pulse = false,
  className = '',
  ...props 
}) => {
  // Size variations
  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };
  
  // Variant styling
  const variantClasses = {
    default: 'bg-white/10 dark:bg-black/30 border border-cyan/30 text-black dark:text-cyan',
    primary: 'bg-cyan text-black border border-transparent',
    secondary: 'bg-black text-white border border-cyan/30',
    outline: 'bg-transparent border border-cyan text-black dark:text-cyan',
    dot: 'flex items-center gap-1.5', // For dot indicator variant
  };
  
  // Effects
  const effectClasses = [
    glow ? 'shadow-md shadow-cyan/20' : '',
    pulse ? 'animate-cyan-pulse' : '',
  ].join(' ');
  
  // Combined classes
  const badgeClass = `
    inline-flex items-center justify-center 
    rounded-full font-medium
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    ${effectClasses}
    ${className}
  `;

  // Default badge rendering
  if (variant !== 'dot') {
    return (
      <span className={badgeClass} {...props}>
        {children}
      </span>
    );
  }
  
  // Special case for dot indicator
  return (
    <span className={`${badgeClass} bg-transparent border-0 text-black dark:text-white`} {...props}>
      <span className="w-2 h-2 rounded-full bg-cyan" />
      {children}
    </span>
  );
};

export default Badge;
