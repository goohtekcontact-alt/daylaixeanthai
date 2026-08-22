import { Building2, FileSignature, Headphones, PhoneCall, MapPin } from "lucide-react";

const OPTIONS = [
  {
    id: "01",
    icon: <Building2 size={22} color="#FFFFFF" strokeWidth={2.2} />,
    title: "Tới trực tiếp văn phòng",
    desc: "Nộp hồ sơ trực tiếp tại văn phòng tuyển sinh để được thầy cô tư vấn chu đáo.",
    extra: (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "6px", backgroundColor: "#F8FAFC", padding: "3px 10px", borderRadius: "6px", border: "1px solid #E2E8F0" }}>
        <MapPin size={12} color="var(--primary)" strokeWidth={2.5} style={{ flexShrink: 0 }} />
        <span style={{ fontSize: "0.8rem", color: "#475569", fontWeight: 600 }}>Số 6 Độc Lập, P. Dĩ An, TP. Dĩ An</span>
      </div>
    )
  },
  {
    id: "02",
    icon: <FileSignature size={22} color="#FFFFFF" strokeWidth={2.2} />,
    title: "Cử nhân viên thu tại nhà",
    desc: "Hỗ trợ làm hồ sơ tận nơi miễn phí từ 8h – 21h hàng ngày (đầy đủ biên lai & tài liệu học).",
    extra: null
  },
  {
    id: "03",
    icon: <Headphones size={22} color="#FFFFFF" strokeWidth={2.2} />,
    title: "Nộp online qua Zalo",
    desc: "Chụp gửi CCCD qua Zalo & chuyển khoản nhanh gọn, nhận thẻ học viên ngay.",
    extra: (
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" }}>
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
            padding: "3px 12px",
            borderRadius: "6px",
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
      className="registration-options-section"
      style={{
        width: "100%",
        minHeight: "clamp(500px, 38vw, 620px)",
        padding: "54px 24px",
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
          maxWidth: "1320px",
          width: "100%",
          margin: "0 auto",
          padding: "0 12px",
          display: "grid",
          gridTemplateColumns: "minmax(320px, 1.15fr) minmax(460px, 1fr)",
          gap: "32px",
          alignItems: "center"
        }}
        className="registration-options-container"
      >
        {/* Left Column: Spacer to display background student image artwork */}
        <div className="registration-left-spacer" style={{ minHeight: "420px" }} />

        {/* Right Column: Section Header & 3 Option Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", width: "100%", maxWidth: "580px" }}>
          {/* Header Title */}
          <div className="reveal-up">
            <div className="registration-options-tagline">
              <span className="registration-options-tagline-line" />
              <span>Phương Thức Đăng Ký</span>
              <span className="registration-options-tagline-line" />
            </div>

            <h2
              className="registration-options-title"
              style={{
                fontSize: "clamp(1.6rem, 2.3vw, 2.15rem)",
                fontWeight: 900,
                color: "#0F172A",
                lineHeight: 1.25,
                letterSpacing: "-0.3px",
                marginBottom: "4px"
              }}
            >
              <div>Nộp hồ sơ học tại An Thái</div>
              <div style={{ color: "var(--primary)", fontWeight: 900 }}>Có 3 phương án hỗ trợ</div>
            </h2>

            <p style={{ fontSize: "0.9rem", color: "#64748B", lineHeight: 1.45, marginTop: "4px" }}>
              Lựa chọn hình thức đăng ký thuận tiện nhất giúp bạn tiết kiệm tối đa thời gian và công sức.
            </p>
          </div>

          {/* Cards List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {OPTIONS.map((opt, idx) => (
              <div
                key={opt.id}
                className={`registration-card-box reveal-up reveal-delay-${idx + 1}`}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "14px 18px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02)",
                  border: "1.5px solid rgba(226, 232, 240, 0.85)",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  position: "relative",
                  transition: "all 0.25s ease"
                }}
              >
                {/* Numbered Icon Badge */}
                <div style={{ position: "relative", flexShrink: 0, display: "flex", alignItems: "center" }}>
                  {/* Red Icon Box */}
                  <div
                    className="registration-card-icon-box"
                    style={{
                      width: "48px",
                      height: "48px",
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
                      width: "20px",
                      height: "20px",
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
                      lineHeight: 1.4,
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
