import Image from "next/image";

const STEPS = [
  {
    num: 1,
    icon: (
      <Image
        src="/images/step_1_hoso.svg"
        alt="Nộp hồ sơ, học phí"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Nộp Hồ Sơ, Học Phí",
    desc: "Thủ tục nhanh gọn chỉ cần CCCD, đóng phí linh hoạt."
  },
  {
    num: 2,
    icon: (
      <Image
        src="/images/step_2_lythuyet.svg"
        alt="Học lý thuyết"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Học Lý Thuyết",
    desc: "Mẹo học 600 câu & 120 tình huống mô phỏng GTVT."
  },
  {
    num: 3,
    icon: (
      <Image
        src="/images/step_3_thuchanh.svg"
        alt="Thực hành lái xe"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Thực Hành Lái Xe",
    desc: "Học 1 kèm 1 xe đời mới, sa hình ISO & đường trường DAT."
  },
  {
    num: 4,
    icon: (
      <Image
        src="/images/step_4_chungchi.svg"
        alt="Thi chứng chỉ nghề"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Thi Chứng Chỉ Nghề",
    desc: "Thi tốt nghiệp và cấp chứng chỉ nghề tại An Thái."
  },
  {
    num: 5,
    icon: (
      <Image
        src="/images/step_5_sathach.svg"
        alt="Thi sát hạch"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Thi Sát Hạch",
    desc: "Thi sát hạch chính thức do Sở GTVT tổ chức."
  },
  {
    num: 6,
    icon: (
      <Image
        src="/images/step_6_nhanbang.svg"
        alt="Nhận bằng"
        width={32}
        height={32}
        style={{ objectFit: "contain" }}
      />
    ),
    title: "Nhận Bằng",
    desc: "Nhận bằng lái xe chính thức chỉ sau 7 - 10 ngày."
  }
];

export default function Process() {
  return (
    <section id="quy-trinh" className="process-section" style={{
      width: "100%",
      padding: "64px 0",
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)"
    }}>
      <div className="process-container">
        {/* Section Heading */}
        <div className="process-header reveal-up">
          <h2 className="process-title">
            QUY TRÌNH ĐÀO TẠO CHUẨN GTVT
          </h2>
          <p className="process-subtitle">
            Lộ trình học và thi rõ ràng giúp học viên an tâm và đạt kết quả cao nhất
          </p>
        </div>

        {/* Stepper Grid with Connector Line */}
        <div className="process-stepper-wrapper">
          <div className="process-connector-line" />

          <div className="process-grid">
            {STEPS.map((step, idx) => (
              <div
                key={step.num}
                className={`process-step-item reveal-up reveal-delay-${idx + 1}`}
              >
                {/* Circle Icon Box with Number Badge */}
                <div className="process-circle-box">
                  <div className="process-number-badge">
                    {step.num}
                  </div>
                  {step.icon}
                </div>

                {/* Step Title & Desc */}
                <h3 className="process-step-title">
                  {step.title}
                </h3>
                <p className="process-step-desc">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
