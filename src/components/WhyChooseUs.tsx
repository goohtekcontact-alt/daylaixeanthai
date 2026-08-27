import Image from "next/image";
import "@/styles/why-choose-us.scss";

export default function WhyChooseUs() {
  return (
    <section
      id="tai-sao-chon"
      className="why-choose-us-section"
      style={{
        width: "100%",
        padding: "56px 24px 64px",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Title Heading */}
        <h2
          className="why-choose-us-title reveal-up"
          style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 800,
            color: "var(--primary)",
            textAlign: "center",
            marginBottom: "32px",
            letterSpacing: "-0.5px",
            lineHeight: 1.25,
          }}
        >
          Vì sao nên chọn học lái xe tại trung tâm An Thái?
        </h2>

        {/* Centered Graphic Image Container */}
        <div
          className="reveal-zoom reveal-delay-2"
          style={{
            width: "100%",
            maxWidth: "960px",
            margin: "0 auto",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <Image
            src="/images/background_section_3.png"
            alt="Lý do nên học lái xe bằng B1, B2 tại Trung tâm An Thái: Đi lại du lịch gia đình, điều khiển xe số sàn & số tự động, lái xe công nghệ Grab kiếm thêm thu nhập, chở sếp và giao lưu đối tác."
            width={1164}
            height={508}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain",
            }}
          />

          {/* Hidden SEO & Screen Reader Text (W3C Standard .sr-only) */}
          <div className="sr-only">
            <h3>Mục đích và lợi ích của việc học bằng lái xe ô tô hạng B tại Trung tâm An Thái:</h3>
            <ul>
              <li>
                <strong>Thuận tiện đi lại và du lịch:</strong> Giúp bạn chủ động lái xe chở gia đình, người thân đi làm, đi du lịch dã ngoại an toàn và tiện lợi.
              </li>
              <li>
                <strong>Lái xe số sàn và số tự động dễ dàng:</strong> Làm chủ kỹ năng điều khiển xe ô tô số sàn, số tự động, tạo nền tảng dễ dàng nâng hạng bằng B lên các hạng cao hơn.
              </li>
              <li>
                <strong>Làm xe dịch vụ, kiếm thêm thu nhập:</strong> Đủ điều kiện đăng ký làm tài xế xe công nghệ (Grab, Gojek, Be), chạy taxi hoặc dịch vụ chở khách nâng cao thu nhập.
              </li>
              <li>
                <strong>Chở sếp, giao lưu đối tác:</strong> Phục vụ tốt cho công việc, chủ động lái xe chở lãnh đạo công tác, giao lưu đối tác và thể hiện sự chuyên nghiệp.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
