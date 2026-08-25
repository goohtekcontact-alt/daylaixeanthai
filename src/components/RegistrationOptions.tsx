import Image from "next/image";
import "@/styles/registration-options.scss";
import { Building2, Headphones, PhoneCall, MapPin, CheckCircle2 } from "lucide-react";

const OPTIONS = [
  {
    id: "01",
    icon: <Building2 size={22} color="#FFFFFF" strokeWidth={2.2} />,
    title: "Tới trực tiếp văn phòng",
    desc: "Nộp hồ sơ trực tiếp tại văn phòng tuyển sinh để được thầy cô tư vấn chu đáo.",
    extra: (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "6px", backgroundColor: "#F8FAFC", padding: "4px 10px", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
        <MapPin size={12} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>141 DT743, TP. Dĩ An</span>
      </div>
    )
  },
  {
    id: "02",
    icon: <Headphones size={22} color="#FFFFFF" strokeWidth={2.2} />,
    title: "Nộp online qua Zalo",
    desc: "Chụp gửi CCCD qua Zalo & chuyển khoản nhanh gọn, nhận thẻ học viên ngay.",
    extra: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "0.82rem", color: "#475569", fontWeight: 600 }}>Hotline tư vấn:</span>
        <a
          href="tel:0786300900"
          className="registration-hotline-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
            background: "var(--accent-gradient)",
            color: "#FFFFFF",
            padding: "4px 14px",
            borderRadius: "9999px",
            fontSize: "0.82rem",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 2px 8px rgba(192, 10, 0, 0.25)",
            letterSpacing: "0.2px"
          }}
        >
          <PhoneCall size={12} strokeWidth={2.4} />
          <span>0786 300 900</span>
        </a>
      </div>
    )
  }
];

export default function RegistrationOptions() {
  return (
    <section
      id="phuong-thuc-dang-ky"
      className="registration-options-section"
      style={{
        width: "100%",
        padding: "70px 24px",
        backgroundColor: "#FAFAFA",
        borderTop: "1px solid rgba(0, 0, 0, 0.04)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div
        className="registration-options-container"
        style={{
          maxWidth: "1320px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "44px",
          alignItems: "center"
        }}
      >
        {/* Left Column: Image Card Showcase */}
        <div className="registration-image-col reveal-left">
          <div
            className="registration-image-wrapper"
            style={{
              position: "relative",
              width: "100%",
              minHeight: "440px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 18px 48px rgba(0, 0, 0, 0.1), 0 4px 14px rgba(0, 0, 0, 0.04)",
              border: "1px solid rgba(0, 0, 0, 0.06)",
              backgroundColor: "#E2E8F0"
            }}
          >
            <Image
              src="/images/image_dang_ky.png"
              alt="Hội trường đào tạo và đăng ký học lái xe An Thái"
              fill
              sizes="(max-width: 900px) 100vw, 680px"
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Bottom Overlay Pill / Glassmorphic Badge */}
            <div
              className="registration-image-badge"
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                backdropFilter: "blur(14px)",
                WebkitBackdropFilter: "blur(14px)",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                color: "#FFFFFF",
                padding: "12px 18px",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "50%", backgroundColor: "rgba(192, 10, 0, 0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF4D4D", flexShrink: 0 }}>
                  <CheckCircle2 size={18} strokeWidth={2.4} />
                </div>
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, lineHeight: 1.2 }}>Trung Tâm GDNN An Thái</div>
                  <div style={{ fontSize: "0.72rem", color: "#CBD5E1", marginTop: "2px" }}>Hội trường khai giảng & đào tạo lý thuyết</div>
                </div>
              </div>

              <span style={{ backgroundColor: "var(--primary)", color: "#FFFFFF", fontSize: "0.72rem", fontWeight: 800, padding: "5px 12px", borderRadius: "9999px", flexShrink: 0 }}>
                Chuẩn GTVT
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Section Header & 3 Option Cards */}
        <div className="registration-content-col reveal-right" style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
          {/* Header Title */}
          <div>
            <div className="registration-options-tagline">
              <span className="registration-options-tagline-line" />
              <span>Phương Thức Đăng Ký</span>
              <span className="registration-options-tagline-line" />
            </div>

            <h2
              className="registration-options-title"
              style={{
                fontSize: "clamp(1.55rem, 2.2vw, 2.1rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.25,
                letterSpacing: "-0.3px",
                marginBottom: "6px"
              }}
            >
              <div>Nộp hồ sơ học tại An Thái</div>
              <div style={{ color: "var(--primary)", fontWeight: 900 }}>Có 2 phương án hỗ trợ</div>
            </h2>
          </div>

          {/* Cards List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {OPTIONS.map((opt, idx) => (
              <div
                key={opt.id}
                className={`registration-card-box reveal-up reveal-delay-${idx + 1}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "16px 20px",
                  boxShadow: "0 6px 22px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  border: "1.5px solid rgba(226, 232, 240, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  position: "relative",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"
                }}
              >
                {/* Numbered Icon Badge */}
                <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                  {/* Red Icon Box */}
                  <div
                    className="registration-card-icon-box"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      background: "linear-gradient(135deg, #C00A00 0%, #E01E00 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 14px rgba(192, 10, 0, 0.25)"
                    }}
                  >
                    {opt.icon}
                  </div>

                  {/* Overlapping Number Badge Pill */}
                  <div
                    className="registration-card-number-badge"
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.15)",
                      border: "1.5px solid var(--primary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.72rem",
                      fontWeight: 900,
                      color: "var(--primary)",
                      position: "absolute",
                      top: "-5px",
                      left: "-5px",
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
                      fontSize: "1.02rem",
                      fontWeight: 800,
                      color: "#0F172A",
                      lineHeight: 1.3,
                      marginBottom: "3px"
                    }}
                  >
                    {opt.title}
                  </h3>

                  <p
                    className="registration-card-desc"
                    style={{
                      fontSize: "0.85rem",
                      color: "#475569",
                      lineHeight: 1.45,
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
