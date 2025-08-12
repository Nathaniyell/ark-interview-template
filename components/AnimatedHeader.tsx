"use client";

import { m } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedHeader = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const floatingRef1 = useRef<HTMLDivElement>(null);
  const floatingRef2 = useRef<HTMLDivElement>(null);
  const floatingRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    // Create floating animations with GSAP
    gsap.to(floatingRef1.current, {
      y: -20,
      x: 10,
      rotation: 5,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(floatingRef2.current, {
      y: -15,
      x: -8,
      rotation: -3,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    gsap.to(floatingRef3.current, {
      y: -25,
      x: 15,
      rotation: 8,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 2,
    });

    // Parallax effect for header elements
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const header = headerRef.current;
      
      if (header) {
        gsap.to(header, {
          y: scrollY * 0.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <m.div
        ref={floatingRef1}
        className="absolute top-20 left-10 w-16 h-16 border-2 border-[#4de209]/30 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      <m.div
        ref={floatingRef2}
        className="absolute top-32 right-20 w-12 h-12 bg-gradient-to-br from-[#4de209]/20 to-green-400/20 rounded-lg"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.4, rotate: 0 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
      />
      
      <m.div
        ref={floatingRef3}
        className="absolute bottom-40 left-1/4 w-8 h-8 border border-green-400/40"
        style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ duration: 2, ease: "easeOut", delay: 1 }}
      />

      {/* Animated grid pattern */}
      <m.div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(77, 226, 9, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(77, 226, 9, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPositionX: ["0px", "50px"],
          backgroundPositionY: ["0px", "50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Glowing orbs */}
      <m.div
        className="absolute top-1/3 right-1/3 w-32 h-32 bg-[#4de209]/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <m.div
        className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-green-400/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
};

export default AnimatedHeader;