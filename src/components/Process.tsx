import Image from "next/image";

export default function Process() {
  const steps = [
    {
      num: 1,
      icon: (
        <Image
          src="/images/step_1_hoso.svg"
          alt="Nộp hồ sơ, học phí"
          width={48}
          height={48}
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
          width={48}
          height={48}
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
          width={48}
          height={48}
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
          width={48}
          height={48}
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
          width={48}
          height={48}
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
          width={48}
          height={48}
          style={{ objectFit: "contain" }}
        />
      ),
      title: "Nhận Bằng",
      desc: "Nhận bằng & hồ sơ gốc sau 10 – 14 ngày thi đỗ."
    },
  ];

  return (
    <section
      id="quy-trinh"
      className="process-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/background_seciton_quytrinh.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "70px 0",
      }}
    >
      <div className="process-container">
        <div className="process-header reveal-up">
          <h2 className="process-title">
            QUY TRÌNH ĐÀO TẠO ĐẠT CHUẨN KHI HỌC LÁI XE
          </h2>
        </div>

        <div className="process-stepper-wrapper">
          <div className="process-connector-line" />

          <div className="process-grid">
            {steps.map((step) => (
              <div key={step.num} className={`process-step-item reveal-zoom reveal-delay-${step.num}`}>
                <div className="process-circle-box">
                  <div className="process-icon">{step.icon}</div>
                  <div className="process-number-badge">{step.num}</div>
                </div>

                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
