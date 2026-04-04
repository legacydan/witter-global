"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in-up" | "fade-in-left" | "fade-in-right" | "fade-in";
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-in-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      el.style.opacity = "1";
      return;
    }

    const animationClasses = {
      "fade-in-up": "animate-fade-in-up",
      "fade-in-left": "animate-fade-in-left",
      "fade-in-right": "animate-fade-in-right",
      "fade-in": "animate-fade-in",
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add(animationClasses[animation]);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, animation]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}
