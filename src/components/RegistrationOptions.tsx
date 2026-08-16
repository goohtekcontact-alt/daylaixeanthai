"use client";

import { FaGraduationCap, FaBuilding, FaFileSignature, FaHeadphones, FaLocationDot } from "react-icons/fa6";

export default function RegistrationOptions() {
  const options = [
    {
      id: "01",
      icon: <FaBuilding size={18} color="#FFFFFF" />,
      title: "Tới Trực Tiếp Văn Phòng",
      desc: "Nộp hồ sơ trực tiếp để được tư vấn chu đáo.",
      extra: (
        <div style={{ marginTop: "3px", fontSize: "0.8rem", color: "#64748B" }}>
          <span><strong>VP:</strong> Số 6 Độc Lập, TP. Dĩ An</span>
        </div>
      )
    },
    {
      id: "02",
      icon: <FaFileSignature size={18} color="#FFFFFF" />,
      title: "Cử Nhân Viên Thu Tại Nhà",
      desc: "Hỗ trợ tận nơi từ 8h – 21h (đủ biên lai & tài liệu).",
      extra: null
    },
    {
      id: "03",
      icon: <FaHeadphones size={18} color="#FFFFFF" />,
      title: "Nộp Online Qua Zalo",
      desc: "Gửi CCCD qua Zalo & chuyển khoản nhanh gọn.",
      extra: (
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
          <span style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>Tư vấn nhanh:</span>
          <a
            href="tel:0786300900"
            className="registration-hotline-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #C00A00 0%, #E01E00 100%)",
              color: "#FFFFFF",
              padding: "2px 10px",
              borderRadius: "6px",
              fontSize: "0.8rem",
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 2px 6px rgba(192, 10, 0, 0.25)",
              letterSpacing: "0.2px"
            }}
          >
            0786 300 900
          </a>
        </div>
      )
    }
  ];

  return (
    <section
      className="registration-options-section"
      style={{
        width: "100%",
        minHeight: "clamp(420px, 32vw, 520px)",
        padding: "28px 24px",
        backgroundImage: "url('/images/image_dang_ky.png')",
        backgroundSize: "cover",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(280px, 1fr) minmax(400px, 1.2fr)",
          gap: "24px",
          alignItems: "center"
        }}
        className="registration-options-container"
      >
        {/* Left Column: Spacer to display background student image artwork */}
        <div className="registration-left-spacer" style={{ minHeight: "340px" }} />

        {/* Right Column: Section Header & 3 Option Cards */}
        <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "540px" }}>
          {/* Header Title */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "3px" }}>
              <div style={{ width: "20px", height: "3px", backgroundColor: "var(--primary)", borderRadius: "2px" }} />
              <FaGraduationCap size={18} style={{ color: "var(--primary)" }} />
            </div>

            <h2
              className="registration-options-title"
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.25,
                letterSpacing: "-0.2px",
                marginBottom: "4px"
              }}
            >
              <div>Nộp Hồ Sơ Học Tại An Thái</div>
              <div style={{ color: "var(--primary)", fontWeight: 900 }}>Có 3 Phương Án Hỗ Trợ</div>
            </h2>
          </div>

          {/* Cards List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {options.map((opt, idx) => (
              <div
                key={opt.id}
                className={`registration-card-box reveal-up reveal-delay-${idx + 1}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  padding: "10px 14px",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
                  border: "1px solid rgba(192, 10, 0, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  position: "relative",
                  transition: "all 0.2s ease"
                }}
              >
                {/* Numbered Icon Badge */}
                <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                  {/* Red Icon Box */}
                  <div
                    className="registration-card-icon-box"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #C00A00 0%, #E01E00 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 3px 10px rgba(192, 10, 0, 0.22)"
                    }}
                  >
                    {opt.icon}
                  </div>

                  {/* Overlapping Number Badge Pill */}
                  <div
                    className="registration-card-number-badge"
                    style={{
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
                      border: "1.5px solid var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.68rem",
                      fontWeight: 900,
                      color: "var(--primary)",
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      zIndex: 2
                    }}
                  >
                    {opt.id}
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <h3
                    className="registration-card-title"
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      lineHeight: 1.25,
                      marginBottom: "2px"
                    }}
                  >
                    {opt.title}
                  </h3>

                  <p
                    className="registration-card-desc"
                    style={{
                      fontSize: "0.82rem",
                      color: "#475569",
                      lineHeight: 1.35,
                      margin: 0,
                      fontWeight: 500
                    }}
                  >
                    {opt.desc}
                  </p>

                  {opt.extra}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
