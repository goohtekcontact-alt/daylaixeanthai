import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: "#F8FAFC",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ width: "100%", height: "auto", position: "relative", aspectRatio: "1717 / 916" }}>
        <Image
          src="/images/banner_hero2.webp"
          alt="Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Banner Đào Tạo Lái Xe"
          width={1717}
          height={916}
          priority
          fetchPriority="high"
          loading="eager"
          quality={75}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1400px"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </section>
  );
}
