"use client";

import { useRef, useState } from "react";
import { MapPin, Play, Pause } from "lucide-react";

export default function PracticeGrounds() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const grounds = [
    {
      num: "01",
      name: "Sân tập lái xe Dĩ An 1",
      address: "Số 6 Độc Lập, Dĩ An, Bình Dương 820000, Vietnam",
      mapUrl: "https://maps.google.com/?q=Số+6+Độc+Lập,+Dĩ+An,+Bình+Dương"
    },
    {
      num: "02",
      name: "Sân tập lái xe Dĩ An 2",
      address: "VPRR+JVX, Dĩ An, Hồ Chí Minh, Vietnam",
      mapUrl: "https://maps.google.com/?q=Dĩ+An,+Hồ+Chí+Minh"
    }
  ];

  return (
    <section
      id="san-tap"
      className="grounds-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/background_section_5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
      }}
    >
      <div className="grounds-container">
        {/* Left Column: Header, Practice Grounds List & Bottom Bar */}
        <div className="grounds-left">
          <div className="grounds-header" style={{ marginBottom: "20px" }}>
            <div className="grounds-tagline">
              <span className="grounds-tagline-line" />
              <span>Hệ thống sân tập</span>
              <span className="grounds-tagline-line" />
            </div>

            <h2
              className="grounds-title"
              style={{
                fontSize: "clamp(2.1rem, 3.5vw, 2.85rem)",
                fontWeight: 900,
                color: "#1E293B",
                lineHeight: 1.32,
                letterSpacing: "0.3px",
                textTransform: "uppercase",
                margin: 0
              }}
            >
              CÁC SÂN TẬP<br />
              <span className="grounds-title-highlight" style={{ color: "var(--primary)", display: "inline-block", marginTop: "4px" }}>
                CỦA HỌC LÁI XE
              </span>
            </h2>
          </div>

          {/* Ground Cards List */}
          <div className="grounds-list">
            {grounds.map((ground) => (
              <a
                key={ground.num}
                href={ground.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="grounds-card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  backgroundColor: "#FFFFFF",
                  padding: "16px 20px",
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.04)",
                  textDecoration: "none",
                  transition: "all 0.2s ease"
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <MapPin size={22} style={{ color: "var(--primary)" }} />
                </div>

                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--primary)", marginBottom: "2px" }}>
                    {ground.num}
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A", marginBottom: "2px" }}>
                    {ground.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748B", lineHeight: 1.35 }}>
                    {ground.address}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Video Frame Curved/Arched top-right corner to match background_section_5.png */}
        <div className="grounds-right">
          <div
            className="grounds-video-wrapper"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "36px 160px 36px 36px",
              overflow: "hidden",
              boxShadow: "0 16px 45px rgba(0, 0, 0, 0.12)",
              border: "4px solid #FFFFFF",
              backgroundColor: "#FFFFFF",
              isolation: "isolate"
            }}
          >
            <video
              ref={videoRef}
              className="grounds-video-element"
              autoPlay
              loop
              muted
              playsInline
              poster="/images/bacground_section_4.png"
              style={{
                width: "100%",
                height: "100%",
                minHeight: "460px",
                borderRadius: "32px 156px 32px 32px",
                objectFit: "cover",
                display: "block",
                backgroundColor: "#FFFFFF",
                outline: "none"
              }}
            >
              <source
                src="/videos/sân_tập_lái_an_thái.MOV"
                type="video/mp4"
              />
              <source
                src="/videos/sân_tập_lái_an_thái.MOV"
                type="video/quicktime"
              />
              Trình duyệt của bạn không hỗ trợ thẻ video.
            </video>

            {/* Floating Glassmorphism Play/Pause Toggle Button */}
            <button
              className={`grounds-play-btn ${!isPlaying ? "is-paused" : ""}`}
              onClick={togglePlay}
              aria-label={isPlaying ? "Tạm dừng video" : "Phát video sân tập"}
              title={isPlaying ? "Tạm dừng video" : "Phát video sân tập"}
              style={{
                position: "absolute",
                bottom: "24px",
                right: "24px",
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "rgba(192, 10, 0, 0.9)",
                color: "#FFF",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 24px rgba(192, 10, 0, 0.4)",
                zIndex: 10
              }}
            >
              {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: "4px" }} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
