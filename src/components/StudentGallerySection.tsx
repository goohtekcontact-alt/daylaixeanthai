"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaCamera,
  FaUsers,
  FaAward,
  FaShieldHalved,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaQuoteLeft,
  FaQuoteRight,
  FaArrowRight
} from "react-icons/fa6";

export default function StudentGallerySection() {
  const [activeIndex, setActiveIndex] = useState(1);

  const galleryItems = [
    {
      id: 1,
      imageSrc: "/images/image_card_price_car.png",
      title: "Sân tập sa hình chuẩn GTVT An Thái",
      customer: {
        name: "Nguyễn Thị Mai Anh",
        avatar: "/images/avatar_customer.png",
        rating: 5,
        quote: "Cơ sở vật chất hiện đại, sân tập rộng rãi, giáo viên tận tâm hướng dẫn. Môi trường học tập chuyên nghiệp, giúp mình tự tin khi thi và lái xe thực tế."
      }
    },
    {
      id: 2,
      imageSrc: "/images/image_card_price_o_to.png",
      title: "Học viên thực hành lái xe DAT đường trường",
      customer: {
        name: "Trần Thu Hà",
        avatar: "/images/avatar_customer.png",
        rating: 5,
        quote: "Giáo viên dạy rất nhiệt tình, hướng dẫn chi tiết từng bài thi sa hình. Nhờ vậy mà mình thi một lần là đỗ ngay cả lý thuyết lẫn thực hành!"
      }
    },
    {
      id: 3,
      imageSrc: "/images/image_card_price_c1.png",
      title: "Dàn xe tập lái đời mới trang bị điều hòa",
      customer: {
        name: "Lê Thu Trang",
        avatar: "/images/avatar_customer.png",
        rating: 5,
        quote: "Lịch học vô cùng linh hoạt, phù hợp với người đi làm bận rộn. Xe tập lái đời mới, máy lạnh mát rượi, học rất thoải mái."
      }
    },
    {
      id: 4,
      imageSrc: "/images/image_card_price_motopkl.png",
      title: "Buổi tổng duyệt sa hình trước ngày sát hạch",
      customer: {
        name: "Phạm Phương Anh",
        avatar: "/images/avatar_customer.png",
        rating: 5,
        quote: "Chi phí hợp lý, cam kết không phát sinh thêm bất kỳ khoản phụ phí nào. Trung tâm hỗ trợ thủ tục hồ sơ rất chu đáo."
      }
    },
    {
      id: 5,
      imageSrc: "/images/image_card_price_moto.png",
      title: "Hình ảnh học viên vui mừng nhận bằng lái xe",
      customer: {
        name: "Đặng Minh Anh",
        avatar: "/images/avatar_customer.png",
        rating: 5,
        quote: "Sân thi chuẩn sát hạch GTVT giúp học viên làm quen áp lực trước khi thi thật. Rất hài lòng với chất lượng đào tạo tại An Thái!"
      }
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  const currentCustomer = galleryItems[activeIndex].customer;

  return (
    <section
      id="hinh-anh-thuc-te"
      className="student-gallery-section"
      style={{
        width: "100%",
        padding: "60px 20px 70px",
        backgroundImage: "url('/images/background_section_hinh_anh_thuc_te.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#FDFDFD"
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
        {/* Section Subtitle Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "8px" }}>
          <div style={{ width: "32px", height: "2px", backgroundColor: "var(--primary)" }} />
          <span
            style={{
              fontFamily: "var(--font-dancing), 'Dancing Script', cursive",
              fontSize: "1.55rem",
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "0.5px"
            }}
          >
            Thư viện hình ảnh & Feedback
          </span>
          <div style={{ width: "32px", height: "2px", backgroundColor: "var(--primary)" }} />
        </div>

        {/* Section Headline */}
        <h2
          style={{
            fontSize: "clamp(1.6rem, 2.6vw, 2.3rem)",
            fontWeight: 900,
            color: "#0F172A",
            lineHeight: 1.25,
            letterSpacing: "-0.3px",
            marginBottom: "8px",
            textTransform: "uppercase"
          }}
        >
          HÌNH ẢNH THỰC TẾ <span style={{ color: "var(--primary)" }}>TỪ HỌC VIÊN</span>
        </h2>

        {/* Sub-description */}
        <p className="student-gallery-desc" style={{ color: "#64748B", fontSize: "0.92rem", margin: "0 auto 30px", maxWidth: "680px", lineHeight: 1.5 }}>
          Những khoảnh khắc học tập và trải nghiệm thực tế tại Trung Tâm Giáo Dục Nghề Nghiệp An Thái
        </p>

        {/* Top 4 Highlight Badges */}
        <div
          className="student-gallery-badges-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
            marginBottom: "40px",
            maxWidth: "1080px",
            margin: "0 auto 40px"
          }}
        >
          {/* Badge 1 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              padding: "12px 18px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <FaCamera size={18} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
                HÌNH ẢNH THỰC TẾ
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>Cập nhật liên tục</div>
            </div>
          </div>

          {/* Badge 2 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              padding: "12px 18px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <FaUsers size={18} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
                FEEDBACK HỌC VIÊN
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>Đánh giá chân thực</div>
            </div>
          </div>

          {/* Badge 3 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              padding: "12px 18px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <FaAward size={18} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
                CHẤT LƯỢNG ĐÀO TẠO
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>Uy tín hàng đầu</div>
            </div>
          </div>

          {/* Badge 4 */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              padding: "12px 18px",
              boxShadow: "0 6px 20px rgba(0, 0, 0, 0.05)",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "var(--primary)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <FaShieldHalved size={18} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>
                CAM KẾT ĐỒNG HÀNH
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>Hỗ trợ trọn đời</div>
            </div>
          </div>
        </div>

        {/* Interactive 3D Perspective Carousel Container */}
        <div className="gallery-carousel-wrapper" style={{ position: "relative", width: "100%", margin: "0 auto 35px", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "330px" }}>
          {/* Prev Arrow Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="gallery-prev-btn"
            style={{
              position: "absolute",
              left: "4%",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
              transition: "transform 0.2s ease, backgroundColor 0.2s ease"
            }}
          >
            <FaChevronLeft size={18} />
          </button>

          {/* Carousel Slide Cards */}
          <div className="gallery-slides-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px", width: "100%", overflow: "hidden" }}>
            {galleryItems.map((item, index) => {
              const isActive = index === activeIndex;
              const isPrev = index === (activeIndex === 0 ? galleryItems.length - 1 : activeIndex - 1);
              const isNext = index === (activeIndex === galleryItems.length - 1 ? 0 : activeIndex + 1);

              let cardStyle: React.CSSProperties = {
                display: "none"
              };

              if (isActive) {
                cardStyle = {
                  width: "580px",
                  height: "320px",
                  borderRadius: "22px",
                  overflow: "hidden",
                  boxShadow: "0 14px 36px rgba(0, 0, 0, 0.16)",
                  position: "relative",
                  zIndex: 5,
                  transform: "scale(1)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  flexShrink: 0
                };
              } else if (isPrev || isNext) {
                cardStyle = {
                  width: "380px",
                  height: "260px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  zIndex: 2,
                  opacity: 0.75,
                  transform: "scale(0.88)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  flexShrink: 0
                };
              }

              return (
                <div
                  key={item.id}
                  className={`gallery-card-item ${isActive ? "is-active" : isPrev ? "is-prev" : isNext ? "is-next" : ""}`}
                  style={cardStyle}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    style={{ objectFit: "cover" }}
                    priority={isActive}
                  />
                </div>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="gallery-next-btn"
            style={{
              position: "absolute",
              right: "4%",
              zIndex: 10,
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
              border: "none",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--primary)",
              transition: "transform 0.2s ease, backgroundColor 0.2s ease"
            }}
          >
            <FaChevronRight size={18} />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "35px" }}>
          {galleryItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === activeIndex ? "12px" : "10px",
                height: idx === activeIndex ? "12px" : "10px",
                borderRadius: "50%",
                backgroundColor: idx === activeIndex ? "var(--primary)" : "#CBD5E1",
                border: "none",
                cursor: "pointer",
                transition: "all 0.25s ease"
              }}
            />
          ))}
        </div>

        {/* Student Testimonial Quote Card (Sử dụng ảnh avatar_customer.png) */}
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto 35px",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            padding: "20px 30px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
            display: "grid",
            gridTemplateColumns: "220px 1fr",
            gap: "24px",
            alignItems: "center",
            textAlign: "left"
          }}
          className="testimonial-card-grid"
        >
          {/* Customer Profile Column */}
          <div className="testimonial-card-profile" style={{ display: "flex", alignItems: "center", gap: "14px", borderRight: "1px solid #E2E8F0", paddingRight: "16px" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
              }}
            >
              <Image
                src={currentCustomer.avatar}
                alt={currentCustomer.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <div>
              <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#0F172A", lineHeight: 1.3 }}>
                {currentCustomer.name}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "3px", marginTop: "4px" }}>
                {[...Array(currentCustomer.rating)].map((_, i) => (
                  <FaStar key={i} size={13} style={{ color: "#F59E0B" }} />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Quote Column */}
          <div className="testimonial-card-quote" style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <FaQuoteLeft size={22} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }} />
            <p style={{ fontSize: "0.86rem", color: "#475569", lineHeight: 1.5, margin: 0, fontWeight: 500, flexGrow: 1 }}>
              {currentCustomer.quote}
            </p>
            <FaQuoteRight size={22} style={{ color: "var(--primary)", flexShrink: 0, alignSelf: "flex-end", marginBottom: "2px" }} />
          </div>
        </div>

        {/* Bottom CTA Action Button */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <a
            href="#dang-ky-tu-van"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "linear-gradient(135deg, #E00A00 0%, #B00000 100%)",
              color: "#FFFFFF",
              padding: "12px 32px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: 900,
              letterSpacing: "0.5px",
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(192, 10, 0, 0.4)",
              transition: "transform 0.25s ease, boxShadow 0.25s ease"
            }}
          >
            <span>ĐĂNG KÝ LÁI XE NGAY</span>
            <div
              style={{
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                color: "var(--primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <FaArrowRight size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
