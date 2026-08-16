"use client";

import { useRef, useState } from "react";
import { FaLocationDot, FaArrowRight, FaPlay, FaPause } from "react-icons/fa6";

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
        {/* Left Column: Heading and 2 Ground Cards */}
        <div className="grounds-left reveal-left">
          <div className="grounds-header">
            <div className="grounds-tagline">
              <span className="grounds-tagline-line" />
              <span>Hệ Thống Đào Tạo</span>
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
            {grounds.map((ground, idx) => (
              <a
                key={ground.num}
                href={ground.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`grounds-card reveal-up reveal-delay-${idx + 1}`}
                aria-label={`${ground.name} - ${ground.address} (Mở bản đồ Google Maps)`}
              >
                <div className="grounds-card-icon-box">
                  <FaLocationDot size={20} />
                </div>

                <div className="grounds-card-content">
                  <div className="grounds-card-header-row">
                    <span className="grounds-card-tag">Cơ sở {ground.num}</span>
                  </div>
                  <h3 className="grounds-card-name">
                    {ground.name}
                  </h3>
                  <div className="grounds-card-address">
                    {ground.address}
                  </div>
                </div>

                <div className="grounds-card-action" aria-hidden="true">
                  <FaArrowRight size={13} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Video Frame */}
        <div className="grounds-right reveal-right reveal-delay-2">
          <div
            className="grounds-video-wrapper"
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              borderRadius: "28px",
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
                borderRadius: "24px",
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
              {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} style={{ marginLeft: "3px" }} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
