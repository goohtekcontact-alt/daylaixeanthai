"use client";

import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let lastState = false;
    const toggleVisibility = () => {
      const shouldBeVisible = window.scrollY > 300;
      if (shouldBeVisible !== lastState) {
        lastState = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Cuộn lên đầu trang"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 99,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: "var(--accent-gradient)",
        border: "2px solid rgba(255, 255, 255, 0.6)",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        outline: "none",
        boxShadow: isHovered
          ? "0 14px 32px rgba(192, 10, 0, 0.55), 0 4px 12px rgba(0, 0, 0, 0.15)"
          : "0 10px 25px rgba(192, 10, 0, 0.38), 0 2px 8px rgba(0, 0, 0, 0.1)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isHovered
            ? "translateY(-4px) scale(1.08)"
            : "translateY(0) scale(1)"
          : "translateY(20px) scale(0.8)",
        pointerEvents: isVisible ? "auto" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <FiChevronUp size={24} />
      <span className="sr-only">Cuộn lên đầu trang</span>
    </button>
  );
}
