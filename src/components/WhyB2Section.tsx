import Image from "next/image";
import "@/styles/why-b2.scss";
import { Award, Calendar, Users, Building2, GraduationCap, Trophy } from "lucide-react";

const POINTS = [
  {
    icon: <Award size={16} color="#FFF" strokeWidth={2.2} />,
    title: (
      <>
        Trên <strong style={{ color: "var(--primary)", fontWeight: 800 }}>25 năm</strong> kinh nghiệm đào tạo lái xe
      </>
    ),
  },
  {
    icon: <Calendar size={16} color="#FFF" strokeWidth={2.2} />,
    title: (
      <>
        Lịch học <strong style={{ color: "var(--primary)", fontWeight: 800 }}>đa dạng</strong> – Tự chọn sân tập
      </>
    ),
  },
  {
    icon: <Users size={16} color="#FFF" strokeWidth={2.2} />,
    title: (
      <>
        Luôn lấy <strong style={{ color: "var(--primary)", fontWeight: 800 }}>học viên</strong> làm trung tâm để phục vụ
      </>
    ),
  },
  {
    icon: <Building2 size={16} color="#FFF" strokeWidth={2.2} />,
    title: (
      <>
        Cơ sở vật chất <strong style={{ color: "var(--primary)", fontWeight: 800 }}>đầy đủ, hiện đại</strong>
      </>
    ),
  },
  {
    icon: <GraduationCap size={16} color="#FFF" strokeWidth={2.2} />,
    title: (
      <>
        Đào tạo <strong style={{ color: "var(--primary)", fontWeight: 800 }}>chuyên nghiệp</strong>
      </>
    ),
  },
  {
    icon: <Trophy size={16} color="#FFF" strokeWidth={2.2} />,
    title: (
      <>
        Tỷ lệ <strong style={{ color: "var(--primary)", fontWeight: 800 }}>đỗ cao</strong>
      </>
    ),
  },
];

export default function WhyB2Section() {
  return (
    <section
      className="why-b2-section"
      style={{
        width: "100%",
        padding: "50px 20px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        overflow: "hidden"
      }}
    >
      <div className="why-b2-container">
        {/* Left Side: Graphic Image */}
        <div className="why-b2-image-wrapper reveal-up">
          <Image
            src="/images/bacground_section_4.png"
            alt="Sân tập lái xe An Thái"
            width={1531}
            height={1027}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover"
            }}
          />
        </div>

        {/* Right Side: Reasons & Highlights List */}
        <div className="why-b2-content">
          <h2
            className="why-b2-title reveal-up"
            style={{
              fontSize: "clamp(1.3rem, 1.85vw, 1.65rem)",
              fontWeight: 900,
              color: "var(--primary)",
              letterSpacing: "-0.3px",
              marginBottom: "6px",
              lineHeight: 1.25,
              textTransform: "uppercase"
            }}
          >
            TẠI SAO NÊN THI BẰNG LÁI XE B2 ?
          </h2>

          {/* Underline Accent Line */}
          <div
            style={{
              width: "60px",
              height: "3px",
              backgroundColor: "var(--primary)",
              borderRadius: "3px",
              marginBottom: "14px"
            }}
          />

          {/* List of 6 points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {POINTS.map((pt, idx) => (
              <div
                key={idx}
                className={`reveal-up reveal-delay-${idx + 1}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "6px 0",
                  borderBottom: idx < POINTS.length - 1 ? "1px dashed rgba(0,0,0,0.06)" : "none"
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 2px 8px rgba(192, 10, 0, 0.22)"
                  }}
                >
                  {pt.icon}
                </div>

                <div
                  style={{
                    fontSize: "0.92rem",
                    color: "#1E293B",
                    fontWeight: 500,
                    lineHeight: 1.35
                  }}
                >
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
