"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  Clock,
  ChevronRight,
  Menu,
  X,
  Home,
  GraduationCap,
  Car,
  Truck,
  Bike,
  FileText
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Topbar Announcement & Hotline (Cuộn tự nhiên theo trang) */}
      <div className="header-topbar" style={{
        background: "var(--accent-gradient)",
        color: "#FFFFFF",
        padding: "5px 16px",
        fontSize: "0.76rem",
        fontWeight: 600,
        letterSpacing: "0.1px",
        lineHeight: 1.35,
        position: "relative",
        zIndex: 10
      }}>
        <div className="header-topbar-content" style={{
          maxWidth: "1240px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "6px 14px"
        }}>
          <div className="header-topbar-title" style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.74rem" }}>
            <MapPin size={13} strokeWidth={2.2} style={{ flexShrink: 0 }} />
            <span>TRUNG TÂM GIÁO DỤC NGHỀ NGHIỆP AN THÁI</span>
          </div>

          <div className="header-topbar-info" style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", fontSize: "0.74rem" }}>
            <div className="header-topbar-clock" style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <Clock size={13} strokeWidth={2.2} style={{ flexShrink: 0 }} />
              <span>08:00 - 20:00 (Cả Thứ 7 & CN)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar Sticky Bar (Ghim cố định top: 0 khi cuộn) */}
      <header
        className="header-glass"
        style={{
          width: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.94)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          position: "sticky",
          top: 0,
          zIndex: 999,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)"
        }}
      >
        <div
          className="header-main-bar"
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative"
          }}
        >
          {/* Brand Logo (Desktop) */}
          <a href="#" className="header-logo-link" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Image
              src="/logo_anthai.png"
              alt="Trung Tâm Giáo Dục Nghề Nghiệp An Thái"
              width={165}
              height={52}
              style={{ objectFit: "contain" }}
              priority
            />
          </a>

          {/* Animated Quick Call Button (Mobile Left) */}
          <a
            href="tel:0786300900"
            className="mobile-call-btn"
            aria-label="Gọi ngay 0786 300 900"
            style={{
              display: "none",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              backgroundColor: "var(--primary-light)",
              border: "1.5px solid rgba(192, 10, 0, 0.2)",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              boxShadow: "0 2px 8px rgba(192, 10, 0, 0.15)",
              transition: "transform 0.2s ease"
            }}
          >
            <div
              className="call-pulse-circle"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #C00A00 0%, #E01E00 100%)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <PhoneCall size={16} className="ring-wiggle-icon" strokeWidth={2.4} />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav style={{
            display: "none",
            alignItems: "center",
            gap: "28px",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.2px"
          }} className="desktop-nav">
            <a href="#" className="desktop-nav-link" style={{ color: "var(--primary)", textDecoration: "none", transition: "color 0.2s" }}>TRANG CHỦ</a>
            <a href="#khoa-hoc" className="desktop-nav-link" style={{ color: "var(--foreground)", textDecoration: "none", transition: "color 0.2s" }}>DANH MỤC ĐÀO TẠO</a>
            <a href="#bang-b" className="desktop-nav-link" style={{ color: "var(--foreground)", textDecoration: "none", transition: "color 0.2s" }}>BẰNG B</a>
            <a href="#bang-c1" className="desktop-nav-link" style={{ color: "var(--foreground)", textDecoration: "none", transition: "color 0.2s" }}>BẰNG C1</a>
            <a href="#bang-a1" className="desktop-nav-link" style={{ color: "var(--foreground)", textDecoration: "none", transition: "color 0.2s" }}>BẰNG A1 & A</a>
            <a href="#quy-trinh" className="desktop-nav-link" style={{ color: "var(--foreground)", textDecoration: "none", transition: "color 0.2s" }}>QUY TRÌNH</a>
            <a href="#lien-he" className="desktop-nav-link" style={{ color: "var(--foreground)", textDecoration: "none", transition: "color 0.2s" }}>LIÊN HỆ</a>
          </nav>

          {/* Action CTA Button & Mobile Toggle */}
          <div className="header-actions-wrapper" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a href="#dang-ky" className="header-cta-btn" style={{
              background: "var(--accent-gradient)",
              color: "#FFFFFF",
              padding: "10px 22px",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "0.875rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 6px 18px rgba(255, 43, 0, 0.28)",
              transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
              textDecoration: "none"
            }}>
              <span>Đăng Ký Học</span>
              <ChevronRight size={16} strokeWidth={2.5} />
            </a>

            {/* Mobile Toggle Button (Right side) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Mở menu"
              className="mobile-toggle"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                backgroundColor: "#F8FAFC",
                border: "1px solid #E2E8F0",
                display: "none",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "var(--primary)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                transition: "all 0.2s ease"
              }}
            >
              <Menu size={24} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Backdrop (Fixed overlay with blur) */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          zIndex: 999998,
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.3s ease"
        }}
      />

      {/* Left Off-Canvas Slide Drawer (Sliding in from Left) */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "86%",
          maxWidth: "320px",
          backgroundColor: "#FFFFFF",
          zIndex: 999999,
          boxShadow: "12px 0 40px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px 16px",
          overflowY: "auto",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Top Header & Navigation Links inside Drawer */}
        <div>
          {/* Drawer Topbar */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "14px", marginBottom: "14px", borderBottom: "1px solid #F1F5F9" }}>
            <Image
              src="/logo_anthai.png"
              alt="An Thái Logo"
              width={120}
              height={38}
              style={{ objectFit: "contain" }}
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Đóng menu"
              style={{
                background: "#F1F5F9",
                border: "none",
                borderRadius: "50%",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#475569",
                cursor: "pointer"
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Menu List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {[
              { label: "TRANG CHỦ", href: "#", icon: <Home size={17} color="var(--primary)" /> },
              { label: "DANH MỤC ĐÀO TẠO", href: "#khoa-hoc", icon: <GraduationCap size={17} color="var(--primary)" /> },
              { label: "BẰNG LÁI B (SÀN & TỰ ĐỘNG)", href: "#bang-b", icon: <Car size={17} color="var(--primary)" /> },
              { label: "BẰNG LÁI C1 (XE TẢI)", href: "#bang-c1", icon: <Truck size={17} color="var(--primary)" /> },
              { label: "BẰNG LÁI A1 & A (XE MÁY)", href: "#bang-a1", icon: <Bike size={17} color="var(--primary)" /> },
              { label: "QUY TRÌNH ĐÀO TẠO", href: "#quy-trinh", icon: <FileText size={17} color="var(--primary)" /> },
              { label: "LIÊN HỆ TRUNG TÂM", href: "#lien-he", icon: <PhoneCall size={17} color="var(--primary)" /> }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  backgroundColor: "#FAFAFC",
                  color: "#0F172A",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "0.84rem",
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "8px", backgroundColor: "var(--primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <span>{item.label}</span>
                </div>
                <ChevronRight size={14} style={{ color: "#94A3B8" }} />
              </a>
            ))}
          </div>
        </div>

        {/* Drawer Bottom Actions: Đăng Ký Học CTA & Hotline */}
        <div style={{ marginTop: "16px", paddingTop: "14px", borderTop: "1px solid #F1F5F9", display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Nút Đăng Ký Học inside Drawer */}
          <a
            href="#dang-ky"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              width: "100%",
              padding: "12px 16px",
              borderRadius: "12px",
              background: "var(--accent-gradient)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textDecoration: "none",
              fontWeight: 800,
              fontSize: "0.95rem",
              boxShadow: "0 4px 16px rgba(192, 10, 0, 0.3)"
            }}
          >
            <span>Đăng Ký Học Ngay</span>
            <ChevronRight size={18} strokeWidth={2.5} />
          </a>

          {/* Hotline 24/7 Card */}
          <a
            href="tel:0786300900"
            style={{
              padding: "10px 14px",
              borderRadius: "12px",
              backgroundColor: "#F8FAFC",
              border: "1px solid #E2E8F0",
              color: "#0F172A",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none"
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "var(--primary-light)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <PhoneCall size={16} />
              </div>
              <div>
                <div style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 600 }}>TƯ VẤN TRỰC TIẾP</div>
                <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "var(--primary)" }}>0786 300 900</div>
              </div>
            </div>
            <ChevronRight size={15} color="#94A3B8" />
          </a>
        </div>
      </aside>
    </>
  );
}
