import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Accordion = ({ 
  items, 
  variant = 'default',
  allowMultiple = false,
  className = '',
  ...props 
}) => {
  const [activeIndices, setActiveIndices] = useState(new Set());

  const toggleItem = (index) => {
    setActiveIndices(prev => {
      const newIndices = new Set(allowMultiple ? prev : []);
      
      if (newIndices.has(index)) {
        newIndices.delete(index);
      } else {
        newIndices.add(index);
      }
      
      return newIndices;
    });
  };

  const isActive = (index) => {
    return activeIndices.has(index);
  };

  // Variants for different styles
  const renderVariant = {
    default: (
      <div className={`space-y-4 ${className}`} {...props}>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`
              border border-cyan/30 rounded-xl overflow-hidden
              transition-all duration-300
              ${isActive(index) ? 'bg-black/5 dark:bg-white/5 shadow-md' : 'bg-white dark:bg-black'}
            `}
          >
            {/* Header / Question */}
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center w-full text-left px-6 py-4 focus:outline-none"
              aria-expanded={isActive(index)}
              aria-controls={`accordion-content-${index}`}
            >
              <h3 className="font-medium text-lg text-black dark:text-white">
                {item.question || item.title}
              </h3>
              <span className="text-cyan ml-4">
                {isActive(index) ? (
                  <IoIosArrowUp className="text-xl" />
                ) : (
                  <IoIosArrowDown className="text-xl" />
                )}
              </span>
            </button>
            
            {/* Content / Answer */}
            <AnimatePresence>
              {isActive(index) && (
                <motion.div 
                  id={`accordion-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 border-t border-cyan/20 text-black/70 dark:text-white/70">
                    {item.answer || item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    ),
    
    minimal: (
      <div className={`space-y-2 ${className}`} {...props}>
        {items.map((item, index) => (
          <div 
            key={index}
            className="overflow-hidden"
          >
            {/* Header / Question */}
            <button
              onClick={() => toggleItem(index)}
              className={`
                flex justify-between items-center w-full text-left px-4 py-3 
                focus:outline-none rounded-lg
                transition-all duration-300
                ${isActive(index) 
                  ? 'bg-cyan text-black font-medium' 
                  : 'bg-black/10 dark:bg-white/10 text-black dark:text-white hover:bg-black/20 dark:hover:bg-white/20'
                }
              `}
              aria-expanded={isActive(index)}
              aria-controls={`accordion-content-${index}`}
            >
              <span>{item.question || item.title}</span>
              <span className="ml-4">
                {isActive(index) ? (
                  <IoIosArrowUp className="text-lg" />
                ) : (
                  <IoIosArrowDown className="text-lg" />
                )}
              </span>
            </button>
            
            {/* Content / Answer */}
            <AnimatePresence>
              {isActive(index) && (
                <motion.div 
                  id={`accordion-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 py-3 text-black/70 dark:text-white/70">
                    {item.answer || item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    ),
    
    bordered: (
      <div className={`border border-cyan/30 rounded-xl overflow-hidden ${className}`} {...props}>
        {items.map((item, index) => (
          <div 
            key={index}
            className={`
              ${index > 0 ? 'border-t border-cyan/30' : ''}
            `}
          >
            {/* Header / Question */}
            <button
              onClick={() => toggleItem(index)}
              className={`
                flex justify-between items-center w-full text-left px-6 py-4 
                focus:outline-none
                transition-all duration-300
                ${isActive(index) 
                  ? 'bg-black text-white' 
                  : 'bg-white dark:bg-black text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }
              `}
              aria-expanded={isActive(index)}
              aria-controls={`accordion-content-${index}`}
            >
              <h3 className="font-medium">
                {item.question || item.title}
              </h3>
              <span className={isActive(index) ? 'text-cyan' : ''}>
                {isActive(index) ? (
                  <IoIosArrowUp className="text-xl" />
                ) : (
                  <IoIosArrowDown className="text-xl" />
                )}
              </span>
            </button>
            
            {/* Content / Answer */}
            <AnimatePresence>
              {isActive(index) && (
                <motion.div 
                  id={`accordion-content-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 py-4 bg-black/5 dark:bg-white/5 text-black/70 dark:text-white/70">
                    {item.answer || item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    ),
  };

  return renderVariant[variant];
};

export default Accordion;
