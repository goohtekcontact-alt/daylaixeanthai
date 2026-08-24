"use client";

import "@/styles/floating-zalo.scss";

export default function FloatingZaloButton() {
  return (
    <a
      href="https://zalo.me/0786300900"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-zalo-btn"
      aria-label="Chat Zalo 0786 300 900"
      title="Chat Zalo tư vấn: 0786 300 900"
    >
      <div className="floating-zalo-icon-box">
        {/* Official Crisp Zalo Logo SVG */}
        <svg
          width="26"
          height="26"
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

      <div className="floating-zalo-text">
        <span className="floating-zalo-label">Chat Zalo</span>
        <span className="floating-zalo-number">0786 300 900</span>
      </div>
    </a>
  );
}
