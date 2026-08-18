"use client";

import { useEffect } from "react";

export default function ScrollAnimationProvider() {
  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      // Fallback: make all elements immediately visible
      document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          // Once animated in, unobserve to keep performance high and prevent reflow
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: 0.04,
    });

    const elementsToObserve = document.querySelectorAll(
      ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger"
    );

    elementsToObserve.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
