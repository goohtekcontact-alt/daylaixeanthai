"use client";

import "@/styles/floating-call.scss";
import { PhoneCall } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:0786300900"
      className="floating-call-btn"
      aria-label="Gọi hotline 0786 300 900"
      title="Hotline tư vấn 24/7: 0786 300 900"
    >
      <div className="floating-call-icon-box">
        <PhoneCall size={20} className="ring-wiggle" strokeWidth={2.4} />
      </div>

      <div className="floating-call-text">
        <span className="floating-call-label">Hotline 24/7</span>
        <span className="floating-call-number">0786 300 900</span>
      </div>
    </a>
  );
}
