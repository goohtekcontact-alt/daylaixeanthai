import React from "react";
import "@/styles/course-pricing.scss";
import Image from "next/image";
import { FaCar, FaTruck, FaMotorcycle, FaUsers, FaBookOpen, FaShieldHalved, FaCalendarDays, FaCompass } from "react-icons/fa6";
import { FiCheck, FiChevronRight, FiFileText, FiDisc } from "react-icons/fi";
import { HiOutlineFire } from "react-icons/hi2";

const COURSES = [
  {
    id: "bang-a1",
    icon: <FaMotorcycle size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />,
    title: "HẠNG A1 (XE MÁY)",
    subtitle: "Xe Mô Mô 2 Bánh (Dưới 175cc)",
    imageSrc: "/images/image_card_price_moto.png",
    price: "650.000đ",
    numericPrice: "650000",
    priceDetail: "trọn gói phí đào tạo",
    features: [
      {
        icon: <FaBookOpen size={18} style={{ color: "var(--primary)" }} />,
        text: <>Mẹo lý thuyết <strong style={{ color: "var(--primary)", fontWeight: 800 }}>200 câu</strong> sát hạch</>
      },
      {
        icon: <FiDisc size={18} style={{ color: "var(--primary)" }} />,
        text: <>Thực hành sa hình vòng 8 thi chuẩn</>
      },
      {
        icon: <FiFileText size={18} style={{ color: "var(--primary)" }} />,
        text: <>Thủ tục đơn giản chỉ cần <strong style={{ color: "var(--primary)", fontWeight: 800 }}>CCCD</strong></>
      },
      {
        icon: <FaCalendarDays size={18} style={{ color: "var(--primary)" }} />,
        text: <>Lịch học & thi linh hoạt hàng tuần</>
      }
    ]
  },
  {
    id: "bang-a",
    icon: <HiOutlineFire size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />,
    title: "HẠNG A (MÔ TÔ PKL)",
    subtitle: "Xe Mô Tô PKL (Trên 175cc)",
    imageSrc: "/images/image_card_price_motopkl.png",
    price: "1.350.000đ",
    numericPrice: "1350000",
    priceDetail: "trọn gói phí đào tạo",
    features: [
      {
        icon: <FaBookOpen size={18} style={{ color: "var(--primary)" }} />,
        text: <>Bộ mẹo lý thuyết <strong style={{ color: "var(--primary)", fontWeight: 800 }}>450 câu</strong> GTVT</>
      },
      {
        icon: <HiOutlineFire size={18} style={{ color: "var(--primary)" }} />,
        text: <>Thực hành xe PKL đời mới 100%</>
      },
      {
        icon: <FiFileText size={18} style={{ color: "var(--primary)" }} />,
        text: <>Thủ tục nhanh gọn chỉ cần <strong style={{ color: "var(--primary)", fontWeight: 800 }}>CCCD</strong></>
      },
      {
        icon: <FaCalendarDays size={18} style={{ color: "var(--primary)" }} />,
        text: <>Xếp lịch thi sát hạch <strong style={{ color: "var(--primary)", fontWeight: 800 }}>sớm nhất</strong></>
      }
    ]
  },
  {
    id: "bang-b",
    icon: <FaCar size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />,
    title: "HẠNG B (SÀN & TỰ ĐỘNG)",
    subtitle: "Xe Ô Tô Số Sàn & Số Tự Động",
    imageSrc: "/images/image_card_price_o_to.png",
    price: "19.300.000đ",
    numericPrice: "19300000",
    priceDetail: "trọn gói phí đào tạo",
    features: [
      {
        icon: <FaUsers size={18} style={{ color: "var(--primary)" }} />,
        text: <>Học xe <strong style={{ color: "var(--primary)", fontWeight: 800 }}>4 - 9 chỗ</strong> đời mới 100%</>
      },
      {
        icon: <FiFileText size={18} style={{ color: "var(--primary)" }} />,
        text: <>Học phí <strong style={{ color: "var(--primary)", fontWeight: 800 }}>trọn gói</strong> cam kết hợp đồng</>
      },
      {
        icon: <FiDisc size={18} style={{ color: "var(--primary)" }} />,
        text: <>Học <strong style={{ color: "var(--primary)", fontWeight: 800 }}>1 thầy / 1 trò</strong> cầm tay chỉ việc</>
      },
      {
        icon: <FaCompass size={18} style={{ color: "var(--primary)" }} />,
        text: <>Thực hành <strong style={{ color: "var(--primary)", fontWeight: 800 }}>DAT đường trường</strong> đủ</>
      }
    ]
  },
  {
    id: "bang-c1",
    icon: <FaTruck size={20} style={{ color: "var(--primary)", flexShrink: 0 }} />,
    title: "HẠNG C1 (XE TẢI)",
    subtitle: "Xe Tải & Vận Tải Chuyên Nghiệp",
    imageSrc: "/images/image_card_price_c1.png",
    price: "23.100.000đ",
    numericPrice: "23100000",
    priceDetail: "trọn gói phí đào tạo",
    features: [
      {
        icon: <FaTruck size={18} style={{ color: "var(--primary)" }} />,
        text: <>Đào tạo xe tải chuẩn <strong style={{ color: "var(--primary)", fontWeight: 800 }}>Bộ GTVT</strong></>
      },
      {
        icon: <FaShieldHalved size={18} style={{ color: "var(--primary)" }} />,
        text: <>Sa hình thực hành <strong style={{ color: "var(--primary)", fontWeight: 800 }}>ISO sát hạch</strong></>
      },
      {
        icon: <FiFileText size={18} style={{ color: "var(--primary)" }} />,
        text: <>Học phí <strong style={{ color: "var(--primary)", fontWeight: 800 }}>trọn gói</strong> cam kết hợp đồng</>
      },
      {
        icon: <FaCompass size={18} style={{ color: "var(--primary)" }} />,
        text: <>Chạy <strong style={{ color: "var(--primary)", fontWeight: 800 }}>DAT đường trường</strong> thực tế</>
      }
    ]
  }
];

// Schema.org Structured Data cho Googlebot đọc giá & khóa học cho Rich Snippets SEO
const SCHEMA_DATA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": COURSES.map((course, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Course",
      "name": `Khóa học đào tạo lái xe ${course.title}`,
      "description": course.subtitle,
      "url": `https://daylaixeanthai.edu.vn/#${course.id}`,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
        "url": "https://daylaixeanthai.edu.vn"
      },
      "offers": {
        "@type": "Offer",
        "price": course.numericPrice,
        "priceCurrency": "VND",
        "availability": "https://schema.org/InStock"
      }
    }
  }))
};

export default function CoursePricing() {
  return (
    <section id="khoa-hoc" className="course-pricing-section" style={{
      padding: "64px 24px",
      backgroundColor: "#FFFFFF"
    }}>
      {/* Schema.org Structured Data cho Google Search Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_DATA) }}
      />

      <div className="course-pricing-container" style={{ maxWidth: "1360px", margin: "0 auto" }}>
        <div className="reveal-up" style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 className="course-pricing-title" style={{ fontSize: "clamp(1.55rem, 2.6vw, 2rem)", fontWeight: 800, color: "var(--primary)", letterSpacing: "-0.5px" }}>
            BẢNG GIÁ & CÁC KHÓA HỌC LÁI XE
          </h2>
          <p style={{ color: "#64748B", fontSize: "0.925rem", marginTop: "4px" }}>
            Học phí trọn gói minh bạch - Cam kết bằng hợp đồng pháp lý rõ ràng
          </p>
        </div>

        <div
          className="course-pricing-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "16px"
          }}
        >
          {COURSES.map((course, idx) => (
            <div
              key={course.id}
              id={course.id}
              className={`course-card reveal-up reveal-delay-${(idx % 4) + 1}`}
              style={{
                borderRadius: "20px",
                backgroundColor: "#FFFFFF",
                border: "1.5px solid #E2E8F0",
                boxShadow: "0 6px 24px rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease"
              }}
            >
              {/* Header Box */}
              <div
                className="course-card-header-box"
                style={{
                  padding: "16px 20px 14px",
                  borderBottom: "1px solid #F1F5F9",
                  backgroundColor: "#FAFAFC"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        backgroundColor: "var(--primary-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      {course.icon}
                    </div>
                    <div>
                      <h3
                        className="course-card-title"
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 900,
                          color: "#0F172A",
                          margin: 0,
                          lineHeight: 1.2
                        }}
                      >
                        {course.title}
                      </h3>
                      <div style={{ fontSize: "0.76rem", color: "#64748B", marginTop: "2px" }}>
                        {course.subtitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price Display Tag */}
                <div style={{ display: "flex", alignItems: "baseline", gap: "5px", marginTop: "12px", flexWrap: "nowrap" }}>
                  <span
                    className="course-card-price"
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 900,
                      color: "var(--primary)",
                      letterSpacing: "-0.5px",
                      whiteSpace: "nowrap",
                      flexShrink: 0
                    }}
                  >
                    {course.price}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "#64748B", fontWeight: 600, whiteSpace: "nowrap" }}>
                    / {course.priceDetail}
                  </span>
                </div>
              </div>

              {/* Graphic Banner Image inside Card */}
              <div style={{ position: "relative", width: "100%", height: "140px", backgroundColor: "#F1F5F9", overflow: "hidden" }}>
                <Image
                  src={course.imageSrc}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Features List Box */}
              <div
                className="course-card-features"
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  flexGrow: 1
                }}
              >
                {course.features.map((f, idx) => (
                  <div
                    key={idx}
                    className="course-feature-item"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      paddingBottom: idx < course.features.length - 1 ? "6px" : "0",
                      borderBottom: idx < course.features.length - 1 ? "1px solid #F1F5F9" : "none"
                    }}
                  >
                    <div
                      className="course-feature-icon-box"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      {f.icon}
                    </div>

                    <div className="course-feature-text" style={{ flex: 1, fontSize: "0.8rem", color: "#334155", lineHeight: 1.3 }}>
                      {f.text}
                    </div>

                    <div
                      className="course-feature-check"
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "var(--primary-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <FiCheck size={11} style={{ color: "var(--primary)" }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA Button */}
              <div style={{ padding: "0 20px 20px" }}>
                <a
                  href="#dang-ky"
                  className="course-card-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    textAlign: "center",
                    background: "var(--accent-gradient)",
                    color: "#FFFFFF",
                    padding: "10px 14px",
                    borderRadius: "9999px",
                    fontWeight: 800,
                    fontSize: "0.88rem",
                    letterSpacing: "0.2px",
                    textDecoration: "none",
                    boxShadow: "0 4px 16px rgba(255, 43, 0, 0.25)",
                    transition: "transform 0.2s ease"
                  }}
                >
                  <span>Đăng Ký Ngay</span>
                  <FiChevronRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
