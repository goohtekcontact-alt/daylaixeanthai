"use client";

import "@/styles/floating-contact.scss";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { SiZalo } from "react-icons/si";

export default function FloatingContactWidget() {
  return (
    <div className="floating-contact-container" aria-label="Kênh liên hệ nhanh">
      {/* 1. Hotline Call */}
      <a
        href="tel:0786300900"
        className="floating-icon-btn item-call"
        title="Gọi hotline: 0786 300 900"
        aria-label="Gọi hotline 0786 300 900"
      >
        <span className="floating-tooltip">Gọi Hotline: 0786 300 900</span>
        <div className="icon-wrapper">
          <FiPhoneCall size={22} className="ring-wiggle" />
        </div>
      </a>

      {/* 2. Zalo Chat */}
      <a
        href="https://zalo.me/0786300900"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon-btn item-zalo"
        title="Chat Zalo: 0786 300 900"
        aria-label="Chat Zalo 0786 300 900"
      >
        <span className="floating-tooltip">Chat Zalo: 0786 300 900</span>
        <div className="icon-wrapper">
          <SiZalo size={24} className="zalo-heartbeat" />
        </div>
      </a>

      {/* 3. Facebook Fanpage */}
      <a
        href="https://www.facebook.com/anthaidaotaolaixe?locale=vi_VN"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon-btn item-facebook"
        title="Facebook Fanpage An Thái"
        aria-label="Facebook Fanpage An Thái"
      >
        <span className="floating-tooltip">Facebook Fanpage An Thái</span>
        <div className="icon-wrapper">
          <FaFacebook size={22} className="fb-tilt" />
        </div>
      </a>

      {/* 4. Google Maps Chỉ Đường */}
      <a
        href="https://maps.google.com/?q=Trung+T%C3%A2m+%C4%90%C3%A0o+T%E1%BA%A1o+v%C3%A0+S%C3%A1t+H%E1%BA%A1ch+L%C3%A1i+Xe+An+Th%C3%A1i"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon-btn item-maps"
        title="Chỉ đường Google Maps đến An Thái"
        aria-label="Chỉ đường Google Maps"
      >
        <span className="floating-tooltip">Chỉ đường Google Maps</span>
        <div className="icon-wrapper">
          <FiMapPin size={22} className="maps-bounce" />
        </div>
      </a>
    </div>
  );
}
