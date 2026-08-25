import Image from "next/image";
import "@/styles/differences.scss";
import { Check } from "lucide-react";

const CARDS = [
  {
    title: "Cam kết 100% đầu ra",
    icon: (
      <Image
        src="/images/ten_lua.png"
        alt="Cam kết 100% đầu ra"
        width={34}
        height={34}
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
        width={34}
        height={34}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "Sân tập chuẩn sa hình sát hạch ISO 9001.",
      "Dàn xe Hyundai Accent đời mới 100% trang bị máy lạnh.",
      "Hỗ trợ trọn gói phần mềm học Bộ GTVT.",
      "Thực hành đường trường DAT đủ số km."
    ]
  },
  {
    title: "Đội ngũ giảng viên",
    icon: (
      <Image
        src="/images/user.png"
        alt="Đội ngũ giảng viên"
        width={34}
        height={34}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "100% giáo viên có chứng chỉ sư phạm dạy nghề.",
      "Đội ngũ giáo viên nhiều kinh nghiệm, tận tâm.",
      "Kiên nhẫn, nhiệt tình, tuyệt đối không vòi vĩnh.",
      "Được đổi giáo viên nếu học viên không hài lòng."
    ]
  },
  {
    title: "Chăm sóc trọn đời",
    icon: (
      <Image
        src="/images/ho_tro.png"
        alt="Chăm sóc trọn đời"
        width={34}
        height={34}
        style={{ objectFit: "contain" }}
      />
    ),
    items: [
      "Nhắc lịch học, lịch thi tự động qua Zalo/SMS.",
      "Hỗ trợ thủ tục cấp đổi & gia hạn bằng lái.",
      "Bổ túc tay lái đường trường sau khóa học.",
      "Tư vấn giải đáp luật & kinh nghiệm lái an toàn."
    ]
  }
];

export default function Differences() {
  return (
    <section
      id="su-khac-biet"
      className="differences-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/image_section_girl.png')",
        backgroundSize: "cover",
        backgroundPosition: "center left",
        backgroundRepeat: "no-repeat",
        paddingTop: "20px",
        paddingBottom: "40px",
        display: "flex",
        alignItems: "flex-start"
      }}
    >
      <div className="differences-container">
        {/* Left Column: Title & Headline */}
        <div className="differences-left">
          <div className="differences-header reveal-up">
            <div className="differences-tagline">
              <span className="differences-tagline-line" />
              <span>Sự Khác Biệt</span>
              <span className="differences-tagline-line" />
            </div>

            <h2
              className="differences-title"
              style={{
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.25,
                letterSpacing: "0.2px",
                textTransform: "uppercase"
              }}
            >
              <span>KHI HỌC </span>
              <span style={{ color: "var(--primary)" }}>
                BẰNG LÁI XE TẠI AN THÁI
              </span>
            </h2>
          </div>
        </div>

        {/* Right Column: 4 Main Feature Cards Grid */}
        <div className="differences-right">
          <div className="differences-cards-grid">
            {CARDS.map((card, idx) => (
              <div key={idx} className={`differences-card reveal-up reveal-delay-${idx + 1}`}>
                {/* Card Header: Round Pastel Icon Box + Title + Red Accent Dash */}
                <div className="differences-card-header">
                  <div className="differences-card-icon-box">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="differences-card-title">
                      {card.title}
                    </h3>
                    <div className="differences-card-dash" />
                  </div>
                </div>

                {/* Card Features List with Red Outline Check Dots */}
                <ul className="differences-card-list">
                  {card.items.map((item, i) => (
                    <li key={i} className="differences-card-item">
                      <div className="differences-check-circle">
                        <Check size={11} color="var(--primary)" strokeWidth={3} />
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
