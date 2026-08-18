import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

const CARDS = [
  {
    title: "Cam kết 100% đầu ra",
    icon: (
      <Image
        src="/images/ten_lua.png"
        alt="Cam kết 100% đầu ra"
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "Đào tạo 1 thầy / 1 trò, vững vàng tay lái.",
      "Cam kết hỗ trợ học & ôn tới khi thi đỗ.",
      "Nhận bằng chính thức đầy đủ hồ sơ gốc.",
      "Hỗ trợ mẹo học & phần mềm thi thử miễn phí."
    ]
  },
  {
    title: "Dẫn đầu về chất lượng",
    icon: (
      <Image
        src="/images/huy_hieu.png"
        alt="Dẫn đầu về chất lượng"
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "Sân tập chuẩn sa hình sát hạch ISO 9001.",
      "Xe tập đời mới 100% trang bị máy lạnh.",
      "Hỗ trợ trọn gói phần mềm học Bộ GTVT.",
      "Thủ tục đăng ký hồ sơ thi B1, B2 nhanh gọn."
    ]
  },
  {
    title: "Giáo viên tận tâm",
    icon: (
      <Image
        src="/images/user.png"
        alt="Giáo viên tận tâm"
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "Đội ngũ thầy dạy +10 năm kinh nghiệm.",
      "Lịch học linh hoạt rảnh lúc nào học lúc đó.",
      "Hỗ trợ đưa đón học viên thực hành tận nơi.",
      "Giảng dạy tận tình, không phát sinh chi phí."
    ]
  },
  {
    title: "Hỗ trợ trọn đời",
    icon: (
      <Image
        src="/images/ho_tro.png"
        alt="Hỗ trợ trọn đời"
        width={28}
        height={28}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "Cập nhật kiến thức & luật giao thông mới.",
      "Hỗ trợ gia hạn, cấp lại hoặc nâng hạng bằng.",
      "Bổ túc tay lái đường trường sau khóa học.",
      "Tư vấn giải đáp luật & kinh nghiệm lái an toàn."
    ]
  }
];

export default function Differences() {
  return (
    <section
      className="differences-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/image_section_girl.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "70px 0",
      }}
    >
      <div className="differences-container">
        {/* Left Column: Title & Subtitle */}
        <div className="differences-left">
          <div className="differences-header reveal-up" style={{ marginTop: "-50px", marginBottom: "16px" }}>
            <div className="differences-tagline">
              <span className="differences-tagline-line" />
              <span>Sự Khác Biệt</span>
              <span className="differences-tagline-line" />
            </div>

            <h2 className="differences-title" style={{ fontSize: "clamp(1.4rem, 2.1vw, 1.85rem)", lineHeight: 1.3, letterSpacing: "0.3px" }}>
              KHI HỌC<br />
              <span className="differences-title-highlight" style={{ display: "inline-block", marginTop: "4px" }}>
                BẰNG LÁI XE TẠI AN THÁI
              </span>
            </h2>
          </div>
        </div>

        {/* Right Column: 4 Main Feature Cards Grid */}
        <div className="differences-right">
          {/* 2x2 Feature Cards Grid */}
          <div className="differences-cards-grid">
            {CARDS.map((card, idx) => (
              <div key={idx} className={`differences-card reveal-up reveal-delay-${idx + 1}`}>
                <div className="differences-card-header">
                  <div className="differences-card-icon-box">
                    {card.icon}
                  </div>
                  <h3 className="differences-card-title">
                    {card.title}
                  </h3>
                </div>

                <ul className="differences-card-list">
                  {card.items.map((item, i) => (
                    <li key={i} className="differences-card-item">
                      <div className="differences-check-dot">
                        <FaCheck size={9} color="#FFFFFF" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
