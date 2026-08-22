import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  ChevronRight,
  GraduationCap,
  Users,
  Headset,
} from "lucide-react";
import { FaFacebookF, FaYoutube, FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id="lien-he"
      className="footer-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/background_footer.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        color: "#FFFFFF",
        paddingTop: "clamp(160px, 14vw, 220px)",
        paddingBottom: "56px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1320px",
          margin: "0 auto",
          padding: "0 24px",
          boxSizing: "border-box",
        }}
      >
        {/* Top Grid Sections */}
        <div
          className="footer-top-grid reveal-up"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 1.3fr) repeat(3, minmax(110px, 1fr)) minmax(240px, 1.1fr)",
            gap: "18px",
            alignItems: "start",
            marginBottom: "40px",
          }}
        >
          {/* Column 1: Brand Info (Wider Column with Vertical Border & Moderate Top Offset) */}
          <div style={{ paddingRight: "16px", borderRight: "1px solid rgba(255,255,255,0.08)", marginTop: "clamp(60px, 5vw, 90px)" }}>
            <div className="footer-logo-box" style={{ marginBottom: "16px" }}>
              <Image
                src="/logo_anthai.png"
                alt="Logo An Thái - Đào Tạo Lái Xe"
                width={405}
                height={130}
                style={{ objectFit: "contain", maxWidth: "100%" }}
              />
            </div>

            <h3
              style={{
                fontSize: "0.88rem",
                fontWeight: 800,
                color: "#FFFFFF",
                textTransform: "uppercase",
                margin: "0 0 2px 0",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
              }}
            >
              TRUNG TÂM GIÁO DỤC NGHỀ NGHIỆP
            </h3>
            <h3
              style={{
                fontSize: "0.88rem",
                fontWeight: 900,
                color: "var(--primary)",
                textTransform: "uppercase",
                margin: "0 0 10px 0",
                lineHeight: 1.3,
                whiteSpace: "nowrap",
              }}
            >
              AN THÁI - ĐÀO TẠO LÁI XE
            </h3>

            <p
              style={{
                fontSize: "0.75rem",
                color: "#94A3B8",
                lineHeight: 1.5,
                marginBottom: "14px",
              }}
            >
              Uy tín - Chất lượng - Tận tâm. Chúng tôi cam kết mang đến chương trình đào tạo lái xe chuyên nghiệp, an toàn và hiệu quả nhất cho học viên.
            </p>

            {/* Contact details list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.75rem", color: "#CBD5E1", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                  <MapPin size={12} color="#FFF" />
                </div>
                <span>Số 6 Độc Lập, P. Dĩ An, TP. Dĩ An, Bình Dương</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone size={12} color="#FFF" />
                </div>
                <a href="tel:0786300900" style={{ color: "#FFF", textDecoration: "none", fontWeight: 700 }}>0786 300 900</a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail size={12} color="#FFF" />
                </div>
                <span>hotro@trungtamlaixeanthai.edu.vn</span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Globe size={12} color="#FFF" />
                </div>
                <span>www.trungtamlaixeanthai.edu.vn</span>
              </div>
            </div>

            {/* Social Circle Icon Buttons (React Icons - Fa6 Vector Icons) */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <a
                href="#"
                aria-label="Facebook"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
              >
                <FaYoutube size={17} />
              </a>

              <a
                href="#"
                aria-label="Zalo"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "0.62rem",
                  fontFamily: "var(--font-plus-jakarta), sans-serif",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
              >
                Zalo
              </a>

              <a
                href="#"
                aria-label="TikTok"
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                }}
              >
                <FaTiktok size={15} />
              </a>
            </div>
          </div>

          {/* Column 2: KHÓA HỌC (Lowered Position + Compact Width + Vertical Border) */}
          <div className="footer-col-courses" style={{ paddingRight: "12px", borderRight: "1px solid rgba(255,255,255,0.08)", marginTop: "clamp(240px, 21vw, 295px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "8px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={14} color="#FFF" />
              </div>
              <h4 style={{ fontSize: "0.86rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.4px", margin: 0 }}>KHÓA HỌC</h4>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.76rem", color: "#CBD5E1" }}>
              {[
                { title: "Khóa học B1 (Tự động)", href: "#khoa-hoc" },
                { title: "Khóa học B2 (Số sàn)", href: "#khoa-hoc" },
                { title: "Khóa học C (Xe tải)", href: "#khoa-hoc" },
                { title: "Khóa học A1 & A (Xe máy)", href: "#khoa-hoc" },
                { title: "Khóa học nâng hạng", href: "#khoa-hoc" },
                { title: "Bổ túc tay lái DAT", href: "#khoa-hoc" },
                { title: "Lịch khai giảng mới", href: "#khoa-hoc" },
                { title: "Học phí trọn gói", href: "#khoa-hoc" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} style={{ display: "flex", alignItems: "center", gap: "5px", color: "#CBD5E1", textDecoration: "none", transition: "color 0.2s" }}>
                    <ChevronRight size={12} style={{ color: "var(--primary)" }} />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: VỀ CHÚNG TÔI (Lowered Position + Compact Width + Vertical Border) */}
          <div style={{ paddingRight: "12px", borderRight: "1px solid rgba(255,255,255,0.08)", marginTop: "clamp(240px, 21vw, 295px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "8px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Users size={14} color="#FFF" />
              </div>
              <h4 style={{ fontSize: "0.86rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.4px", margin: 0 }}>VỀ CHÚNG TÔI</h4>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.76rem", color: "#CBD5E1" }}>
              {[
                { title: "Giới thiệu trung tâm", href: "#tai-sao-chon" },
                { title: "Sứ mệnh - Tầm nhìn", href: "#tai-sao-chon" },
                { title: "Đội ngũ giáo viên", href: "#tai-sao-chon" },
                { title: "Cơ sở vật chất ISO", href: "#san-tap" },
                { title: "Hình ảnh sân tập", href: "#san-tap" },
                { title: "Cam kết chất lượng", href: "#tai-sao-chon" },
                { title: "Tuyển dụng giáo viên", href: "#lien-he" },
                { title: "Liên hệ trung tâm", href: "#lien-he" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} style={{ display: "flex", alignItems: "center", gap: "5px", color: "#CBD5E1", textDecoration: "none", transition: "color 0.2s" }}>
                    <ChevronRight size={12} style={{ color: "var(--primary)" }} />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: HỖ TRỢ HỌC VIÊN (Lowered Position + Compact Width) */}
          <div style={{ paddingRight: "12px", marginTop: "clamp(240px, 21vw, 295px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "8px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Headset size={14} color="#FFF" />
              </div>
              <h4 style={{ fontSize: "0.86rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "0.4px", margin: 0 }}>HỖ TRỢ HỌC VIÊN</h4>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.76rem", color: "#CBD5E1" }}>
              {[
                { title: "Quy trình 6 bước GTVT", href: "#quy-trinh" },
                { title: "Hướng dẫn làm hồ sơ", href: "#ho-so" },
                { title: "Phương án nộp hồ sơ", href: "#ho-so" },
                { title: "Quy định học viên", href: "#quy-trinh" },
                { title: "Chính sách bảo mật", href: "#lien-he" },
                { title: "Điều khoản dịch vụ", href: "#lien-he" },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} style={{ display: "flex", alignItems: "center", gap: "5px", color: "#CBD5E1", textDecoration: "none", transition: "color 0.2s" }}>
                    <ChevronRight size={12} style={{ color: "var(--primary)" }} />
                    <span>{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Map Preview & Hotline Box (Lowered Position - Matched Reference Image 100%) */}
          <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box", marginTop: "clamp(240px, 21vw, 295px)" }}>
            {/* Folder-Tab Map Card Container */}
            <div style={{ position: "relative", marginBottom: "16px" }}>
              {/* Folder Tab "BẢN ĐỒ" Header with Concave S-Curve (Lõm xuống dưới) */}
              <div style={{ height: "28px", position: "relative", zIndex: 2, marginBottom: "-1px" }}>
                <svg
                  width="170"
                  height="28"
                  viewBox="0 0 170 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: "block" }}
                >
                  <defs>
                    <linearGradient id="tabGrad" x1="0" y1="0" x2="0" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#D50000" />
                      <stop offset="100%" stopColor="#900000" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,28 L 0,8 C 0,3 3,0 8,0 L 100,0 C 118,0 128,28 162,28 Z"
                    fill="url(#tabGrad)"
                  />
                  <text
                    x="18"
                    y="18"
                    fill="#FFFFFF"
                    fontSize="11.5"
                    fontWeight="700"
                    fontFamily="var(--font-inter), system-ui, sans-serif"
                    letterSpacing="0.6"
                  >
                    BẢN ĐỒ
                  </text>
                </svg>
              </div>

              {/* Map View Box with Red Border & Rounded Corners */}
              <div
                style={{
                  borderRadius: "0 16px 16px 16px",
                  overflow: "hidden",
                  border: "2px solid #C00A00",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
                  height: "135px",
                  width: "100%",
                  position: "relative",
                  marginTop: "-1px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <iframe
                  title="Bản đồ Trung tâm An Thái"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.0491469828103!2d106.7436319!3d10.883866599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9375d001205%3A0x6d30dd52c7860e9a!2zVHJ1bmcgVMOibSDEkMOgbyBU4bqhbyB2w6A5U8OhdCBI4bqhY2ggTMOhaSBYZSBBbiBUaMOhaQ!5e0!3m2!1sen!2s!4v1786724979494!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Deep Red Call Banner Box */}
            <a
              href="tel:0786300900"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "linear-gradient(180deg, #D00900 0%, #8A0000 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "16px",
                padding: "10px 12px",
                textDecoration: "none",
                color: "#FFFFFF",
                boxShadow: "0 8px 22px rgba(180, 0, 0, 0.45)",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              {/* Large White Circle Icon Badge */}
              <div
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                }}
              >
                <Phone size={20} style={{ color: "#C00A00", transform: "rotate(-10deg)" }} />
              </div>

              {/* Text Information (Single Line Guaranteed) */}
              <div style={{ minWidth: 0, flexGrow: 1 }}>
                <div
                  style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.3px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    opacity: 0.95,
                    whiteSpace: "nowrap",
                  }}
                >
                  TƯ VẤN & ĐĂNG KÝ NGAY
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-plus-jakarta), system-ui, sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 900,
                    letterSpacing: "0.4px",
                    color: "#FFFFFF",
                    margin: "1px 0",
                    lineHeight: 1.15,
                    whiteSpace: "nowrap",
                  }}
                >
                  0786 300 900
                </div>
                <div style={{ fontSize: "0.64rem", color: "rgba(255,255,255,0.85)", fontWeight: 500, whiteSpace: "nowrap" }}>
                  Hỗ trợ tư vấn miễn phí
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div
          className="footer-copyright-bar"
          style={{
            position: "absolute",
            bottom: "0px",
            left: 0,
            width: "100%",
            padding: "0 8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "nowrap",
            gap: "10px",
            fontSize: "0.68rem",
            color: "#FFFFFF",
            fontWeight: 500,
            zIndex: 10,
            boxSizing: "border-box"
          }}
        >
          <div>
            © {new Date().getFullYear()} All rights reserved.
          </div>
          <div>
            Designed by <a href="https://goohtek.com/" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>goohtek.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
