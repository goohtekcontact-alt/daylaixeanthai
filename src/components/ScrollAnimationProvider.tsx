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
      const visibleElements: Element[] = [];
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleElements.push(entry.target);
          observer.unobserve(entry.target);
        }
      });

      if (visibleElements.length > 0) {
        requestAnimationFrame(() => {
          visibleElements.forEach((target) => {
            target.classList.add("is-visible");
          });
        });
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -20px 0px",
      threshold: 0.02,
    });

    const timeoutId = setTimeout(() => {
      const elementsToObserve = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .course-card"
      );
      elementsToObserve.forEach((el) => observer.observe(el));
    }, 50);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null;
}
