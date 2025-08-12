"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AnimatedFAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.div 
      className="border-b border-white/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <m.button
        onClick={onToggle}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="w-full py-6 text-left flex justify-between items-center text-white relative overflow-hidden group"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Hover background effect */}
        <m.div
          className="absolute inset-0 bg-gradient-to-r from-[#4de209]/5 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "0%" : "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        {/* Glowing border on hover */}
        <m.div
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4de209] to-green-400"
          animate={{ scaleY: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        
        <m.span 
          className="text-lg font-medium text-white relative z-10"
          animate={{ color: isHovered ? "#4de209" : "#ffffff" }}
          transition={{ duration: 0.2 }}
        >
          {question}
        </m.span>
        
        <m.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10"
        >
          <m.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ 
              scale: isHovered ? 1.1 : 1,
              color: isHovered ? "#4de209" : "currentColor"
            }}
            transition={{ duration: 0.2 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </m.svg>
        </m.div>
      </m.button>
      
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3 }
            }}
            className="overflow-hidden"
          >
            <m.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="pb-6"
            >
              <div className="text-[#bcc0c5] text-justify leading-snug tracking-tight mr-6">
                {answer.split("\n\n").map((section, index) => {
                  const lines = section.split("\n");
                  const sectionTitle = lines[0];
                  const sectionContent = lines.slice(1);

                  if (sectionTitle.endsWith(":")) {
                    return (
                      <m.div 
                        key={index} 
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <h4 className="font-semibold text-[#bcc0c5] mb-2">
                          {sectionTitle}
                        </h4>
                        {sectionContent.map((line, lineIndex) => {
                          const numberedMatch = line.match(/^(\d+)\.\s*(.*)$/);
                          if (numberedMatch) {
                            return (
                              <m.div
                                key={lineIndex}
                                className="ml-4 mb-2 flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (lineIndex * 0.05), duration: 0.4 }}
                              >
                                <span className="text-[#4de209] mr-2 mt-0 font-medium min-w-[1.5rem]">
                                  {numberedMatch[1]}.
                                </span>
                                <span className="flex-1">{numberedMatch[2]}</span>
                              </m.div>
                            );
                          } else if (line.startsWith("•")) {
                            return (
                              <m.div
                                key={lineIndex}
                                className="ml-4 mb-1 flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (index * 0.1) + (lineIndex * 0.05), duration: 0.4 }}
                              >
                                <span className="text-[#4de209] mr-2 mt-[3px] text-sm leading-none">
                                  •
                                </span>
                                <span className="flex-1">
                                  {line.replace(/^•\s*/, "")}
                                </span>
                              </m.div>
                            );
                          } else if (line.trim()) {
                            const boldRegex = /\*\*(.*?)\*\*/g;
                            if (boldRegex.test(line)) {
                              const parts = line.split(/(\*\*.*?\*\*)/g);
                              return (
                                <m.p 
                                  key={lineIndex} 
                                  className="mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: (index * 0.1) + (lineIndex * 0.05), duration: 0.4 }}
                                >
                                  {parts.map((part, partIndex) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                      return (
                                        <strong key={partIndex} className="font-bold text-[#4de209]">
                                          {part.slice(2, -2)}
                                        </strong>
                                      );
                                    }
                                    return part;
                                  })}
                                </m.p>
                              );
                            } else {
                              return (
                                <m.p 
                                  key={lineIndex} 
                                  className="mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: (index * 0.1) + (lineIndex * 0.05), duration: 0.4 }}
                                >
                                  {line}
                                </m.p>
                              );
                            }
                          }
                          return null;
                        })}
                      </m.div>
                    );
                  } else {
                    return (
                      <m.div 
                        key={index} 
                        className="mb-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        {lines.map((line, lineIndex) => {
                          // Same logic as above but for regular content
                          if (line.trim()) {
                            const boldRegex = /\*\*(.*?)\*\*/g;
                            if (boldRegex.test(line)) {
                              const parts = line.split(/(\*\*.*?\*\*)/g);
                              return (
                                <m.p 
                                  key={lineIndex} 
                                  className="mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: (index * 0.1) + (lineIndex * 0.05), duration: 0.4 }}
                                >
                                  {parts.map((part, partIndex) => {
                                    if (part.startsWith('**') && part.endsWith('**')) {
                                      return (
                                        <strong key={partIndex} className="font-bold text-[#4de209]">
                                          {part.slice(2, -2)}
                                        </strong>
                                      );
                                    }
                                    return part;
                                  })}
                                </m.p>
                              );
                            } else {
                              return (
                                <m.p 
                                  key={lineIndex} 
                                  className="mb-2"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: (index * 0.1) + (lineIndex * 0.05), duration: 0.4 }}
                                >
                                  {line}
                                </m.p>
                              );
                            }
                          }
                          return null;
                        })}
                      </m.div>
                    );
                  }
                })}
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export default AnimatedFAQItem;