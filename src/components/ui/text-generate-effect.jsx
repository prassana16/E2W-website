"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export const TextGenerateEffect = ({ words, className }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const currentWord = words[wordIndex].text;
    
    if (charIndex < currentWord.length && isGenerating) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + currentWord[charIndex]);
        setCharIndex(charIndex + 1);
      }, 40); // Speed of text generation

      return () => clearTimeout(timeout);
    } else {
      setIsGenerating(false);
    }
  }, [words, wordIndex, charIndex, isGenerating]);

  if (!words || words.length === 0) {
    return null;
  }

  return (
    <div className={cn("", className)}>
      {words.map((word, idx) => (
        <motion.div 
          key={`word-${idx}`}
          className={cn("inline-block", word.className)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {displayedText}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block ml-1 w-[4px] h-6 md:h-10 bg-white"
          />
        </motion.div>
      ))}
    </div>
  );
};