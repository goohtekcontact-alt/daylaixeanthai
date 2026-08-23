"use client";

import { useEffect } from "react";

export default function ScrollAnimationProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .course-card").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: 0.02,
    });

    const initObserver = () => {
      const elementsToObserve = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger, .course-card"
      );
      elementsToObserve.forEach((el) => observer.observe(el));
    };

    initObserver();
    const rafId = requestAnimationFrame(initObserver);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, []);

  return null;
}
