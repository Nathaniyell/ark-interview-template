"use client";

import { m, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  stagger?: boolean;
}

const TextReveal = ({ 
  children, 
  className = "",
  delay = 0,
  direction = "up",
  stagger = false 
}: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  };

  if (stagger && typeof children === 'string') {
    const words = children.split(' ');
    return (
      <div ref={ref} className={className}>
        {words.map((word, index) => (
          <m.span
            key={index}
            initial={directionVariants[direction]}
            animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="inline-block mr-2"
          >
            {word}
          </m.span>
        ))}
      </div>
    );
  }

  return (
    <m.div
      ref={ref}
      initial={directionVariants[direction]}
      animate={isInView ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

export default TextReveal;