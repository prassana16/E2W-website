import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = Math.min(prevProgress + Math.random() * 15, 100);
        
        if (newProgress === 100) {
          clearInterval(timer);
          
          // Add a small delay before completing for smoother transition
          setTimeout(() => {
            setIsComplete(true);
            if (onComplete) onComplete();
          }, 300);
        }
        
        return newProgress;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#2D1B69] to-[#5B0737]"
      animate={{ 
        opacity: isComplete ? 0 : 1,
        pointerEvents: isComplete ? 'none' : 'auto'
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-20 h-20 mb-8">
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-white/20"
        />
        
        <motion.div
          className="absolute inset-0 rounded-full border-t-4 border-white"
          style={{ 
            rotate: `${progress * 3.6}deg`,
            transformOrigin: 'center'
          }}
          animate={{ rotate: `${progress * 3.6}deg` }}
          transition={{ duration: 0.2 }}
        />
        
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-white text-lg font-medium"
        >
          {Math.round(progress)}%
        </motion.div>
      </div>
      
      <p className="text-white/80 text-center max-w-xs px-4">
        Loading Easy2Work resources...
      </p>
    </motion.div>
  );
}

export default Preloader;
