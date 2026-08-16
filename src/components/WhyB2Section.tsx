"use client";

import Image from "next/image";
import { Award, Calendar, Users, Building2, GraduationCap, Trophy } from "lucide-react";

export default function WhyB2Section() {
  const points = [
    {
      icon: <Award size={18} color="#FFF" strokeWidth={2.2} />,
      title: (
        <>
          Trên <strong style={{ color: "var(--primary)", fontWeight: 800 }}>25 năm</strong> kinh nghiệm đào tạo lái xe
        </>
      ),
    },
    {
      icon: <Calendar size={18} color="#FFF" strokeWidth={2.2} />,
      title: (
        <>
          Lịch học <strong style={{ color: "var(--primary)", fontWeight: 800 }}>đa dạng</strong> – Tự chọn sân tập
        </>
      ),
    },
    {
      icon: <Users size={18} color="#FFF" strokeWidth={2.2} />,
      title: (
        <>
          Luôn lấy <strong style={{ color: "var(--primary)", fontWeight: 800 }}>học viên</strong> làm trung tâm để phục vụ
        </>
      ),
    },
    {
      icon: <Building2 size={18} color="#FFF" strokeWidth={2.2} />,
      title: (
        <>
          Cơ sở vật chất <strong style={{ color: "var(--primary)", fontWeight: 800 }}>đầy đủ, hiện đại</strong>
        </>
      ),
    },
    {
      icon: <GraduationCap size={18} color="#FFF" strokeWidth={2.2} />,
      title: (
        <>
          Đào tạo <strong style={{ color: "var(--primary)", fontWeight: 800 }}>chuyên nghiệp</strong>
        </>
      ),
    },
    {
      icon: <Trophy size={18} color="#FFF" strokeWidth={2.2} />,
      title: (
        <>
          Tỷ lệ <strong style={{ color: "var(--primary)", fontWeight: 800 }}>đỗ cao</strong>
        </>
      ),
    },
  ];

  return (
    <section className="why-b2-section" style={{
      width: "100%",
      padding: "64px 24px",
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      overflow: "hidden"
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "48px",
        alignItems: "center"
      }}>
        {/* Left Side: Graphic Image */}
        <div className="reveal-left" style={{ width: "100%", borderRadius: "16px", overflow: "hidden" }}>
          <Image
            src="/images/bacground_section_4.png"
            alt="Trung Tâm Dạy Lái Xe An Thái"
            width={1531}
            height={1027}
            priority
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain"
            }}
          />
        </div>

        {/* Right Side: Reasons & Highlights List */}
        <div className="reveal-right reveal-delay-2">
          <h2 className="why-b2-title" style={{
            fontSize: "clamp(1.5rem, 2.6vw, 2.05rem)",
            fontWeight: 800,
            color: "var(--primary)",
            letterSpacing: "-0.5px",
            marginBottom: "8px",
            lineHeight: 1.2
          }}>
            TẠI SAO NÊN THI BẰNG LÁI XE B2 ?
          </h2>

          {/* Underline Accent Line */}
          <div style={{
            width: "80px",
            height: "3px",
            backgroundColor: "var(--primary)",
            borderRadius: "2px",
            marginBottom: "22px"
          }} />

          {/* List of 6 points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {points.map((pt, idx) => (
              <div
                key={idx}
                className={`reveal-up reveal-delay-${idx + 1}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  paddingBottom: "10px",
                  borderBottom: idx < points.length - 1 ? "1px dashed rgba(0,0,0,0.08)" : "none"
                }}
              >
                <div style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  backgroundColor: "var(--secondary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 3px 8px rgba(255, 107, 0, 0.25)"
                }}>
                  {pt.icon}
                </div>

                <div style={{
                  fontSize: "1rem",
                  color: "#1E293B",
                  fontWeight: 500,
                  lineHeight: 1.45
                }}>
                  {pt.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
