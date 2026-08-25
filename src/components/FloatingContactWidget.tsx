"use client";

import { useState, useEffect, useRef } from "react";
import "@/styles/floating-contact.scss";
import { PhoneCall, MapPin, X, Headphones } from "lucide-react";

export default function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close menu when pressing Escape key or clicking outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div ref={widgetRef} className="floating-contact-container">
        {/* Expanded Floating Contact Buttons Stack */}
        {isOpen && (
          <div className="floating-contact-menu" role="menu" aria-label="Danh sách kênh liên hệ">
            {/* 1. Hotline Call */}
            <a
              href="tel:0786300900"
              className="floating-item-btn item-call"
              role="menuitem"
              title="Gọi hotline tư vấn: 0786 300 900"
              aria-label="Gọi hotline 0786 300 900"
            >
              <div className="item-icon-box">
                <PhoneCall size={20} className="ring-wiggle" strokeWidth={2.4} />
              </div>
              <div className="item-text">
                <span className="item-label">Gọi Hotline</span>
                <span className="item-detail">0786 300 900</span>
              </div>
            </a>

            {/* 2. Zalo Chat */}
            <a
              href="https://zalo.me/0786300900"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-item-btn item-zalo"
              role="menuitem"
              title="Chat Zalo tư vấn: 0786 300 900"
              aria-label="Chat Zalo 0786 300 900"
            >
              <div className="item-icon-box">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 4C12.9543 4 4 11.835 4 21.5C4 26.5866 7.23467 31.1169 12.3551 34.2084L10.2223 41.6734C10.0152 42.3983 10.7483 43.0135 11.4172 42.6614L19.5103 38.4018C20.9634 38.7937 22.464 39 24 39C35.0457 39 44 31.165 44 21.5C44 11.835 35.0457 4 24 4Z"
                    fill="#0068FF"
                  />
                  <text
                    x="24"
                    y="25.5"
                    fill="#FFFFFF"
                    fontSize="13.5"
                    fontWeight="900"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Plus Jakarta Sans', Arial, sans-serif"
                    letterSpacing="-0.4px"
                  >
                    Zalo
                  </text>
                </svg>
              </div>
              <div className="item-text">
                <span className="item-label">Chat Zalo</span>
                <span className="item-detail">0786 300 900</span>
              </div>
            </a>

            {/* 3. Facebook Fanpage */}
            <a
              href="https://www.facebook.com/anthaidaotaolaixe?locale=vi_VN"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-item-btn item-facebook"
              role="menuitem"
              title="Facebook Fanpage Trung Tâm An Thái"
              aria-label="Facebook Fanpage An Thái"
            >
              <div className="item-icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#1877F2"
                  />
                </svg>
              </div>
              <div className="item-text">
                <span className="item-label">Facebook</span>
                <span className="item-detail">Fanpage An Thái</span>
              </div>
            </a>

            {/* 4. Google Maps Chỉ Đường */}
            <a
              href="https://maps.google.com/?q=Trung+T%C3%A2m+%C4%90%C3%A0o+T%E1%BA%A1o+v%C3%A0+S%C3%A1t+H%E1%BA%A1ch+L%C3%A1i+Xe+An+Th%C3%A1i"
              target="_blank"
              rel="noopener noreferrer"
              className="floating-item-btn item-maps"
              role="menuitem"
              title="Chỉ đường Google Maps đến Trung Tâm An Thái"
              aria-label="Chỉ đường Google Maps"
            >
              <div className="item-icon-box">
                <MapPin size={22} strokeWidth={2.4} />
              </div>
              <div className="item-text">
                <span className="item-label">Chỉ Đường</span>
                <span className="item-detail">Google Maps</span>
              </div>
            </a>
          </div>
        )}

        {/* Main Speed Dial Trigger Button */}
        <button
          onClick={toggleMenu}
          className={`floating-contact-toggle ${isOpen ? "is-active" : ""}`}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Đóng danh sách liên hệ" : "Mở danh sách liên hệ tư vấn"}
          title={isOpen ? "Đóng" : "Tư vấn & Chỉ đường (Hotline, Zalo, FB, Maps)"}
          type="button"
        >
          <div className="toggle-icon-box">
            {isOpen ? (
              <X size={22} strokeWidth={2.5} />
            ) : (
              <Headphones size={22} className="ring-wiggle" strokeWidth={2.4} />
            )}
          </div>

          <div className="toggle-text">
            <span className="toggle-title">{isOpen ? "Thu Gọn" : "Liên Hệ Ngay"}</span>
          </div>

          {!isOpen && <span className="toggle-badge-dot" title="Đang online 24/7" />}
        </button>
      </div>
    );
  }
