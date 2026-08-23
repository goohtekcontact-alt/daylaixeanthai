"use client";

import "@/styles/practice-grounds.scss";
import { useRef, useState, useCallback, useEffect } from "react";
import { FaLocationDot, FaArrowRight, FaPlay, FaPause } from "react-icons/fa6";

const GROUNDS = [
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

export default function PracticeGrounds() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay prevented by browser power-saving policy
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  }, [isPlaying]);

  return (
    <section
      id="san-tap"
      className="grounds-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.68) 45%, rgba(255, 255, 255, 0.3) 100%), url('/images/background_section_5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        padding: "80px 0",
      }}
    >
      <div className="grounds-container">
        {/* Left Column: Heading and 2 Ground Cards */}
        <div className="grounds-left">
          <div className="grounds-header reveal-up">
            <div className="grounds-tagline">
              <span className="grounds-tagline-line" />
              <span>Hệ Thống Đào Tạo</span>
              <span className="grounds-tagline-line" />
            </div>

            <h2
              className="grounds-title"
              style={{
                fontSize: "clamp(1.4rem, 2vw, 1.8rem)",
                fontWeight: 900,
                color: "#1E293B",
                lineHeight: 1.3,
                letterSpacing: "0.2px",
                textTransform: "uppercase"
              }}
            >
              HỆ THỐNG CÁC SÂN TẬP CỦA{" "}
              <span style={{ color: "var(--primary)" }}>HỌC LÁI XE</span>
            </h2>
          </div>

          {/* 2 Ground Cards List */}
          <div className="grounds-list">
            {GROUNDS.map((ground, idx) => (
              <a
                key={ground.num}
                href={ground.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`grounds-card reveal-up reveal-delay-${idx + 1}`}
              >
                <div className="grounds-card-icon-box">
                  <FaLocationDot size={22} />
                </div>

                <div className="grounds-card-content">
                  <div className="grounds-card-header-row">
                    <span className="grounds-card-tag">Sân {ground.num}</span>
                  </div>
                  <h3 className="grounds-card-name">
                    {ground.name}
                  </h3>
                  <div className="grounds-card-address">
                    {ground.address}
                  </div>
                </div>

                <div className="grounds-card-action">
                  <FaArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Video Playback Showcase */}
        <div className="grounds-right">
          <div
            className="grounds-video-wrapper grounds-video-container reveal-zoom reveal-delay-2"
            style={{
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 48px rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.05)",
              backgroundColor: "#000000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {/* Native HTML5 Video Player */}
            <video
              ref={videoRef}
              className="grounds-video-element"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/images/poster_san_tap.jpg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "460px",
                borderRadius: "24px",
                objectFit: "cover",
                display: "block",
                backgroundColor: "#000000",
                outline: "none"
              }}
            >
              <source
                src="/videos/san_tap_lai_an_thai.mp4"
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
                bottom: "20px",
                right: "20px",
                width: "50px",
                height: "50px",
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
              {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} style={{ marginLeft: "3px" }} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
