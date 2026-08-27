"use client";

import "@/styles/student-gallery.scss";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const GALLERY_ITEMS = [
  {
    id: 1,
    type: "image",
    src: "/images/real_image/IMG_7059.JPG",
    title: "Học viên nhận bằng tốt nghiệp lái xe tại An Thái",
    customer: {
      name: "Nguyễn Thị Mai Anh",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Cơ sở vật chất hiện đại, sân tập rộng rãi, giáo viên tận tâm hướng dẫn. Môi trường học tập chuyên nghiệp, giúp mình tự tin khi thi và lái xe thực tế."
    }
  },
  {
    id: 2,
    type: "video",
    src: "/videos/Bản sao của 2024_09_13_09_30_IMG_0582.MOV",
    title: "Video học viên thực hành lái xe trên sân sa hình An Thái",
    customer: {
      name: "Trần Thu Hà",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Giáo viên dạy rất nhiệt tình, hướng dẫn chi tiết từng bài thi sa hình. Nhờ vậy mà mình thi một lần là đỗ ngay cả lý thuyết lẫn thực hành!"
    }
  },
  {
    id: 3,
    type: "image",
    src: "/images/real_image/IMG_7066.JPG",
    title: "Trao chứng chỉ tốt nghiệp cho học viên lái xe xuất sắc",
    customer: {
      name: "Hoàng Bích Ngọc",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Được học thực hành nhiều giờ trên xe đời mới, thầy chỉ dẫn rất kỹ lưỡng và điềm đạm. Rất cảm ơn trung tâm An Thái!"
    }
  },
  {
    id: 4,
    type: "video",
    src: "/videos/Bản sao của 2024_09_13_09_33_IMG_0558.MOV",
    title: "Video buổi diễn tập sa hình chuẩn sát hạch GTVT",
    customer: {
      name: "Phạm Phương Anh",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Chi phí hợp lý, cam kết không phát sinh thêm bất kỳ khoản phụ phí nào. Trung tâm hỗ trợ thủ tục hồ sơ rất chu đáo."
    }
  },
  {
    id: 5,
    type: "image",
    src: "/images/real_image/IMG_7074.JPG",
    title: "Hình ảnh học viên vui mừng nhận giấy phép lái xe",
    customer: {
      name: "Lê Thu Trang",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Lịch học vô cùng linh hoạt, phù hợp với người đi làm bận rộn. Xe tập lái đời mới, máy lạnh mát rượi, học rất thoải mái."
    }
  },
  {
    id: 6,
    type: "video",
    src: "/videos/Bản sao của 2024_09_13_09_35_IMG_0567.MOV",
    title: "Video học viên luyện tập đường trường và sa hình thực tế",
    customer: {
      name: "Lê Đức Minh",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Khóa học rất chất lượng, sa hình chuẩn Sở GTVT giúp mình tự tin và phản xạ tốt trong mọi tình huống khi cầm lái."
    }
  },
  {
    id: 7,
    type: "image",
    src: "/images/real_image/IMG_7096.JPG",
    title: "Khoảnh khắc trao bằng và chụp ảnh kỷ niệm tại trung tâm",
    customer: {
      name: "Đặng Minh Anh",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Sân thi chuẩn sát hạch GTVT giúp học viên làm quen áp lực trước khi thi thật. Rất hài lòng với chất lượng đào tạo tại An Thái!"
    }
  },
  {
    id: 8,
    type: "image",
    src: "/images/real_image/IMG_7143.JPG",
    title: "Học viên xuất sắc vượt qua kỳ thi sát hạch ô tô",
    customer: {
      name: "Nguyễn Hoàng Nam",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Thầy dạy có tâm, chỉ bảo từng mẹo nhỏ khi lùi chuồng và qua vệt bánh xe. Thi đậu bằng Hạng B ngay lần đầu tiên!"
    }
  },
  {
    id: 9,
    type: "image",
    src: "/images/real_image/IMG_7147.JPG",
    title: "Thực hành tập lái thực tế cùng giảng viên An Thái",
    customer: {
      name: "Vũ Hải Đăng",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Thời gian đào tạo đúng tiến độ cam kết, xe tập lái số tự động và số sàn đều mới toanh. Rất khuyên mọi người nên học tại đây!"
    }
  },
  {
    id: 10,
    type: "image",
    src: "/images/real_image/IMG_7148.JPG",
    title: "Hình ảnh khóa học lái xe hạng B chất lượng cao",
    customer: {
      name: "Phan Thanh Tùng",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Trung tâm uy tín, đội ngũ giảng viên giàu kinh nghiệm. Môi trường thực hành sát thực tế thi giúp nâng cao tay lái nhanh chóng."
    }
  },
  {
    id: 11,
    type: "image",
    src: "/images/real_image/Bản sao của 2025_04_28_08_07_IMG_5487.JPG",
    title: "Buổi trao bằng tốt nghiệp cho học viên lái xe",
    customer: {
      name: "Trịnh Hoài Nam",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Quy trình đăng ký nhanh gọn, được chủ động sắp xếp thời gian rảnh. Rất tuyệt vời!"
    }
  },
  {
    id: 12,
    type: "image",
    src: "/images/real_image/Bản sao của 2025_04_28_08_38_IMG_5513.JPG",
    title: "Không khí học tập sôi nổi tại Trung Tâm An Thái",
    customer: {
      name: "Đỗ Quốc Việt",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Học 1 thầy 1 trò vô cùng hiệu quả, nắm chắc kiến thức và tự tin tay lái ngay từ buổi học đầu tiên."
    }
  },
  {
    id: 13,
    type: "image",
    src: "/images/real_image/Bản sao của 2025_04_28_08_39_IMG_5514.JPG",
    title: "Niềm vui nhận bằng lái xe sau khóa đào tạo",
    customer: {
      name: "Bùi Khánh Linh",
      avatar: "/images/avatar_customer.png",
      rating: 5,
      quote: "Nhân viên tư vấn siêu nhiệt tình, thầy giáo hiền lành kiên nhẫn. 10/10 điểm cho chất lượng dịch vụ!"
    }
  }
];

export default function StudentGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentCustomer = GALLERY_ITEMS[activeIndex]?.customer || GALLERY_ITEMS[0].customer;

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
        <div className="reveal-up" style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "6px" }}>
          <div style={{ width: "24px", height: "2px", backgroundColor: "var(--primary)" }} />
          <span
            className="student-gallery-subtitle"
            style={{
              fontFamily: "var(--font-dancing), 'Dancing Script', cursive",
              fontSize: "1.45rem",
              fontWeight: 700,
              color: "var(--primary)",
              letterSpacing: "0.5px"
            }}
          >
            Thư viện hình ảnh & Feedback
          </span>
          <div style={{ width: "24px", height: "2px", backgroundColor: "var(--primary)" }} />
        </div>

        {/* Section Headline */}
        <h2
          className="student-gallery-title reveal-up reveal-delay-1"
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
            fontWeight: 900,
            color: "#0F172A",
            lineHeight: 1.25,
            letterSpacing: "-0.3px",
            marginBottom: "8px"
          }}
        >
          Hình Ảnh Thực Tế <span style={{ color: "var(--primary)" }}>Từ Học Viên</span>
        </h2>

        {/* Sub-description */}
        <p className="student-gallery-desc reveal-up reveal-delay-2" style={{ color: "#64748B", fontSize: "0.92rem", margin: "0 auto 30px", maxWidth: "680px", lineHeight: 1.5 }}>
          Những khoảnh khắc học tập và trải nghiệm thực tế tại Trung Tâm Giáo Dục Nghề Nghiệp An Thái
        </p>

        {/* Top 4 Highlight Badges */}
        <div
          className="student-gallery-badges-grid reveal-up reveal-delay-3"
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
                15.000+ TỐT NGHIỆP
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>Học viên mỗi năm</div>
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
                TỶ LỆ ĐẬU &gt;95%
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>Ngay lần thi đầu tiên</div>
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

        {/* Swiper Interactive Showcase Carousel Container */}
        <div className="gallery-carousel-wrapper reveal-zoom reveal-delay-4">
          {/* Custom Prev Arrow Button */}
          <button
            aria-label="Previous Slide"
            className="gallery-prev-btn"
          >
            <FaChevronLeft />
          </button>

          {/* Swiper Core Track */}
          <div className="gallery-swiper-container">
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              loop={true}
              centeredSlides={true}
              speed={550}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              navigation={{
                prevEl: ".gallery-prev-btn",
                nextEl: ".gallery-next-btn"
              }}
              pagination={{
                el: ".gallery-swiper-pagination",
                clickable: true,
                bulletClass: "gallery-custom-bullet",
                bulletActiveClass: "is-active"
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.realIndex);
              }}
              slidesPerView="auto"
              spaceBetween={8}
              breakpoints={{
                0: {
                  slidesPerView: "auto",
                  spaceBetween: 5,
                  centeredSlides: true
                },
                640: {
                  slidesPerView: "auto",
                  spaceBetween: 8,
                  centeredSlides: true
                },
                900: {
                  slidesPerView: "auto",
                  spaceBetween: 12,
                  centeredSlides: true
                }
              }}
              className="gallery-swiper"
            >
              {GALLERY_ITEMS.map((item) => (
                <SwiperSlide key={item.id} className="gallery-swiper-slide">
                  <div className="gallery-card-item">
                    {item.type === "video" ? (
                      <video
                        src={item.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block"
                        }}
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 78vw, 640px"
                        style={{ objectFit: "cover" }}
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Next Arrow Button */}
          <button
            aria-label="Next Slide"
            className="gallery-next-btn"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Swiper Custom Pagination Dots */}
        <div className="gallery-swiper-pagination" />

        {/* Student Testimonial Quote Card */}
        <div
          className="testimonial-card-grid"
          style={{
            maxWidth: "820px",
            margin: "0 auto 35px",
            backgroundColor: "#FFFFFF",
            borderRadius: "24px",
            padding: "20px 30px",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)",
            border: "1px solid rgba(0, 0, 0, 0.04)",
            alignItems: "center",
            textAlign: "left"
          }}
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
