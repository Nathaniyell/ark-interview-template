"use client";

import { m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Clare O.",
      shop: `Praise & Bloom`,
      location: "Northwich, UK",
      quote: "How do we set up a store with you please? This is so exciting we cannot wait to get started!!",
      avatar: "CO",
      rating: 5,
      gradient: "from-pink-400 to-purple-600",
    },
    {
      id: 2,
      name: "Sarah M.",
      shop: `Faith & Crafts`,
      location: "Austin, TX",
      quote: "ARK has transformed our business! The support and platform are amazing for Christian entrepreneurs.",
      avatar: "SM",
      rating: 5,
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      id: 3,
      name: "Michael R.",
      shop: `Blessed Books`,
      location: "Nashville, TN",
      quote: "The community here is incredible. Sales have increased 300% since joining ARK!",
      avatar: "MR",
      rating: 5,
      gradient: "from-green-400 to-emerald-600",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <m.div 
      className="relative rounded-3xl md:max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="text-center mb-8">
        <m.h2 
          className="text-4xl font-medium text-white mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Visit Anointed ARK Stores Worldwide
        </m.h2>
      </div>

      <m.div 
        className="rounded-2xl py-14 md:px-20 px-4 bg-accent backdrop-blur-sm relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        {/* Animated background gradient */}
        <m.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #4de209 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #4de209 0%, transparent 50%)",
              "radial-gradient(circle at 40% 50%, #4de209 0%, transparent 50%)",
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="flex flex-wrap items-center justify-between border-b-2 pb-2 border-white mb-6 relative z-10">
          <div>
            <m.p 
              className="text-[#bcc0c5] text-sm mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Ekklesia Comments, Praises & Testimonies
            </m.p>
            <AnimatePresence mode="wait">
              <m.h3
                key={currentTestimonial.id}
                className="text-3xl font-semibold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {currentTestimonial.shop}
              </m.h3>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-4 md:my-0 my-5">
            <m.button
              onClick={prevSlide}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.1, borderColor: "#4de209" }}
              whileTap={{ scale: 0.95 }}
            >
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-[#4de209]/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </m.button>

            <m.span 
              className="text-[#bcc0c5] text-sm font-mono"
              animate={{ color: isAutoPlaying ? "#4de209" : "#bcc0c5" }}
            >
              {String(currentSlide + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </m.span>

            <m.button
              onClick={nextSlide}
              className="p-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.1, borderColor: "#4de209" }}
              whileTap={{ scale: 0.95 }}
            >
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-[#4de209]/20 to-transparent"
                initial={{ x: "100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </m.button>
          </div>
        </div>

        <div className="grid md:grid-cols-7 gap-8 items-center relative z-10">
          <div className="md:col-span-4">
            <div className="mb-6">
              <m.svg
                className="w-12 h-12 text-white/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
              </m.svg>
              
              <AnimatePresence mode="wait">
                <m.p
                  key={currentTestimonial.id}
                  className="text-white text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  "{currentTestimonial.quote}"
                </m.p>
              </AnimatePresence>

              {/* Star rating */}
              <m.div 
                className="flex items-center mt-4 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <m.svg
                    key={i}
                    className="w-5 h-5 text-[#4de209]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, duration: 0.3 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </m.svg>
                ))}
              </m.div>
            </div>

            <AnimatePresence mode="wait">
              <m.div
                key={currentTestimonial.id}
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
              >
                <m.div 
                  className={`w-12 h-12 bg-gradient-to-br ${currentTestimonial.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {currentTestimonial.avatar}
                </m.div>
                <div>
                  <p className="text-white font-medium">{currentTestimonial.name}</p>
                  <p className="text-[#bcc0c5] text-sm">
                    Shop <span className="text-[#4de209]">{currentTestimonial.shop}</span> • {currentTestimonial.location}
                  </p>
                </div>
              </m.div>
            </AnimatePresence>
          </div>

          <div className="md:col-span-3">
            <div className="relative">
              {/* Floating elements */}
              <m.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#4de209]/30 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <m.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400/40 rounded-full blur-sm"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Testimonial indicators */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, index) => (
                  <m.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="relative group"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#4de209] shadow-lg shadow-[#4de209]/50' 
                        : 'bg-white/30 hover:bg-white/60'
                    }`} />
                    {index === currentSlide && (
                      <m.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 w-3 h-3 rounded-full bg-[#4de209] shadow-lg shadow-[#4de209]/50"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </m.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Auto-play indicator */}
        <m.div
          className="absolute bottom-4 left-4 text-xs text-white/50 flex items-center gap-2"
          animate={{ opacity: isAutoPlaying ? 1 : 0.3 }}
        >
          <m.div
            className="w-2 h-2 bg-[#4de209] rounded-full"
            animate={{ scale: isAutoPlaying ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          Auto-play {isAutoPlaying ? 'ON' : 'OFF'}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default AnimatedTestimonials;