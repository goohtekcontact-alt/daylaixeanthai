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
      rootMargin: "50px 0px -10px 0px",
      threshold: 0.01,
    });

    const initObserver = () => {
      const elementsToObserve = document.querySelectorAll(
        ".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom, .course-card"
      );
      elementsToObserve.forEach((el) => observer.observe(el));
    };

    if ("requestIdleCallback" in window) {
      const idleId = (window as unknown as { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(initObserver);
      return () => {
        if ("cancelIdleCallback" in window) {
          (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
        }
        observer.disconnect();
      };
    } else {
      const timeoutId = setTimeout(initObserver, 30);
      return () => {
        clearTimeout(timeoutId);
        observer.disconnect();
      };
    }
  }, []);

  return null;
}
