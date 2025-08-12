"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export type RevealOptions = {
  selector?: string;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars & { scrollTrigger?: ScrollTrigger.Vars };
};

export function useReveal(options: RevealOptions = {}) {
  const {
    selector = "[data-reveal]",
    from = { y: 24, opacity: 0 },
    to = {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.06,
    },
  } = options;

  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const tweens: gsap.core.Tween[] = [];

    elements.forEach((el) => {
      const tween = gsap.fromTo(
        el,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
      tweens.push(tween);
    });

    return () => {
      tweens.forEach((t) => t.kill());
    };
  }, [selector]);
}
