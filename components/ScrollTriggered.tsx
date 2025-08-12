"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTriggeredProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "rotate" | "custom";
  customAnimation?: (element: HTMLElement) => void;
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  once?: boolean;
}

const ScrollTriggered = ({
  children,
  className = "",
  animation = "fadeIn",
  customAnimation,
  trigger,
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  once = true,
}: ScrollTriggeredProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state based on animation type
    const initialStates = {
      fadeIn: { opacity: 0 },
      slideUp: { opacity: 0, y: 100 },
      slideLeft: { opacity: 0, x: 100 },
      slideRight: { opacity: 0, x: -100 },
      scale: { opacity: 0, scale: 0.5 },
      rotate: { opacity: 0, rotation: 45, scale: 0.5 },
      custom: {},
    };

    const finalStates = {
      fadeIn: { opacity: 1 },
      slideUp: { opacity: 1, y: 0 },
      slideLeft: { opacity: 1, x: 0 },
      slideRight: { opacity: 1, x: 0 },
      scale: { opacity: 1, scale: 1 },
      rotate: { opacity: 1, rotation: 0, scale: 1 },
      custom: {},
    };

    gsap.set(element, initialStates[animation]);

    if (animation === "custom" && customAnimation) {
      customAnimation(element);
    } else {
      gsap.to(element, {
        ...finalStates[animation],
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger || element,
          start,
          end,
          scrub,
          once,
          onToggle: (self) => {
            if (!self.isActive && once) return;
            
            gsap.to(element, {
              ...finalStates[animation],
              duration: 1.2,
              ease: "power3.out",
            });
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, customAnimation, trigger, start, end, scrub, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollTriggered;