import Image from "next/image";
import "@/styles/why-choose-us.scss";

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us-section" style={{
      width: "100%",
      padding: "56px 24px 64px",
      backgroundColor: "#FFFFFF",
      borderBottom: "1px solid rgba(0, 0, 0, 0.08)"
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        {/* Title Heading */}
        <h2 className="why-choose-us-title reveal-up" style={{
          fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
          fontWeight: 800,
          color: "var(--primary)",
          textAlign: "center",
          marginBottom: "32px",
          letterSpacing: "-0.5px",
          lineHeight: 1.25
        }}>
          Vì sao nên chọn học lái xe tại trung tâm An Thái?
        </h2>

        {/* Centered Graphic Image */}
        <div className="reveal-zoom reveal-delay-2" style={{
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
          borderRadius: "16px",
          overflow: "hidden"
        }}>
          <Image
            src="/images/background_section_3.png"
            alt="Vì sao nên chọn học lái xe tại Trung tâm An Thái?"
            width={1164}
            height={508}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    </section>
  );
}
