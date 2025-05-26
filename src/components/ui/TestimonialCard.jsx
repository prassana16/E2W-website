import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaUser } from 'react-icons/fa';

const TestimonialCard = ({
  name,
  role,
  company,
  image,
  quote,
  rating = 5,
  variant = 'default',
  className = '',
  ...props
}) => {
  // Helper function to render star ratings
  const renderRating = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-cyan" />);
    }
    
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-cyan" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-black/20 dark:text-white/20" />);
    }
    
    return stars;
  };
  
  // Variants for different card styles
  const cardVariants = {
    default: (
      <div
        className={`
          bg-white dark:bg-black 
          rounded-2xl p-8 
          border border-cyan/20 
          shadow-lg
          transition-all duration-300
          hover:border-cyan hover:shadow-xl
          ${className}
        `}
        {...props}
      >
        {/* Quote icon */}
        <FaQuoteLeft className="text-3xl text-cyan/30 mb-6" />
        
        {/* Testimonial content */}
        <p className="text-black/80 dark:text-white/80 mb-6">"{quote}"</p>
        
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-6">
            {renderRating()}
          </div>
        )}
        
        {/* Author info */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-black/10 dark:bg-white/10 mr-4 border border-cyan/30">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FaUser className="text-black/30 dark:text-white/30" />
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-bold text-black dark:text-white">{name}</h4>
            <p className="text-sm text-black/60 dark:text-white/60">
              {role && `${role}, `}{company}
            </p>
          </div>
        </div>
      </div>
    ),
    
    modern: (
      <div
        className={`
          relative
          bg-gradient-to-br from-black to-black/90
          rounded-2xl p-8 
          border border-cyan/30
          shadow-lg text-white
          overflow-hidden
          ${className}
        `}
        {...props}
      >
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/10 blur-xl rounded-full"></div>
        
        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-6">
            {renderRating()}
          </div>
        )}
        
        {/* Testimonial content */}
        <p className="text-white/90 relative z-10 mb-6 text-lg">"{quote}"</p>
        
        {/* Bottom border */}
        <div className="h-px w-16 bg-cyan mb-6"></div>
        
        {/* Author info */}
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 mr-4 border border-cyan/30">
            {image ? (
              <img src={image} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FaUser className="text-white/50" />
              </div>
            )}
          </div>
          
          <div>
            <h4 className="font-bold text-white">{name}</h4>
            <p className="text-sm text-white/70">
              {role && `${role}, `}{company}
            </p>
          </div>
        </div>
      </div>
    ),
    
    minimal: (
      <div
        className={`
          p-6
          border-l-4 border-cyan
          ${className}
        `}
        {...props}
      >
        {/* Testimonial content */}
        <p className="text-black/80 dark:text-white/80 mb-4 italic">"{quote}"</p>
        
        {/* Author info */}
        <div>
          <h4 className="font-bold text-black dark:text-white">{name}</h4>
          <p className="text-sm text-black/60 dark:text-white/60">
            {role && `${role}, `}{company}
          </p>
        </div>
      </div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      {cardVariants[variant]}
    </motion.div>
  );
};

export default TestimonialCard;
