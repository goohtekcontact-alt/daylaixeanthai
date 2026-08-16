"use client";

import { useState } from "react";
import { User, Phone, MapPin, Car, ArrowRight, FileSignature } from "lucide-react";

export default function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    licenseType: "Hạng B",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const licenseOptions = ["Hạng B (Ô tô)", "Hạng C1 (Xe tải)", "Hạng A1 (Xe máy)", "Hạng A (Mô tô PKL)"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Vui lòng điền đầy đủ Họ và tên và Số điện thoại!");
      return;
    }
    setIsSubmitted(true);
    setTimeout(() => {
      alert("Gửi thông tin đăng ký thành công! Trung tâm An Thái sẽ liên hệ với bạn trong thời gian sớm nhất.");
      setIsSubmitted(false);
      setFormData({ fullName: "", phone: "", address: "", licenseType: "B1" });
    }, 500);
  };

  return (
    <section
      id="dang-ky-form"
      className="registration-form-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(500px, 44vw, 750px)",
        padding: "36px 20px",
        backgroundImage: "url('/images/image_background-form.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="registration-form-container"
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          alignItems: "center",
        }}
      >
        {/* Left Column Spacer */}
        <div className="registration-form-spacer" style={{ minHeight: "180px" }} />

        {/* Right Column: Form Registration Card */}
        <div className="registration-form-card-wrapper" style={{ display: "flex", justifyContent: "flex-end" }}>
          <div
            className="registration-form-card"
            style={{
              width: "100%",
              maxWidth: "420px",
              backgroundColor: "#FFFFFF",
              borderRadius: "22px",
              padding: "24px 22px 18px 22px",
              boxShadow: "0 16px 45px rgba(192, 10, 0, 0.18), 0 4px 14px rgba(0, 0, 0, 0.05)",
              border: "2px solid var(--primary)",
              position: "relative",
              transform: "translateX(-30px)",
            }}
          >
            {/* Top Red Circular Icon Badge */}
            <div
              style={{
                position: "absolute",
                top: "-22px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--accent-gradient)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 14px rgba(192, 10, 0, 0.35)",
                border: "3px solid #FFFFFF",
              }}
            >
              <FileSignature size={20} color="#FFFFFF" strokeWidth={2.2} />
            </div>

            {/* Form Title */}
            <div style={{ textAlign: "center", marginTop: "4px", marginBottom: "12px" }}>
              <h2
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 800,
                  color: "var(--primary)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.2px",
                  margin: 0,
                }}
              >
                Đăng Ký Học Lái Xe Ô Tô <br />
                <span style={{ color: "#1E293B" }}>Ngay Hôm Nay</span>
              </h2>

              {/* Red Star Line Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  marginTop: "6px",
                }}
              >
                <div style={{ width: "30px", height: "1px", backgroundColor: "rgba(192, 10, 0, 0.3)" }} />
                <div style={{ color: "var(--primary)", fontSize: "0.65rem", letterSpacing: "2px" }}>★ ★ ★</div>
                <div style={{ width: "30px", height: "1px", backgroundColor: "rgba(192, 10, 0, 0.3)" }} />
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {/* Field 1: Họ và tên */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <User size={15} style={{ color: "var(--primary)" }} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "#1E293B",
                      marginBottom: "2px",
                    }}
                  >
                    Họ và tên: <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên của bạn"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "5px 10px",
                      borderRadius: "7px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#FAFAFA",
                      fontSize: "0.76rem",
                      color: "#1E293B",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Field 2: Số điện thoại */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={15} style={{ color: "var(--primary)" }} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "#1E293B",
                      marginBottom: "2px",
                    }}
                  >
                    Số điện thoại: <span style={{ color: "var(--primary)" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Nhập số điện thoại"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "5px 10px",
                      borderRadius: "7px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#FAFAFA",
                      fontSize: "0.76rem",
                      color: "#1E293B",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Field 3: Địa chỉ */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <MapPin size={15} style={{ color: "var(--primary)" }} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "#1E293B",
                      marginBottom: "2px",
                    }}
                  >
                    Địa chỉ:
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập địa chỉ của bạn"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "5px 10px",
                      borderRadius: "7px",
                      border: "1px solid #E2E8F0",
                      backgroundColor: "#FAFAFA",
                      fontSize: "0.76rem",
                      color: "#1E293B",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Field 4: Nhu cầu học bằng lái */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    backgroundColor: "var(--primary-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <Car size={15} style={{ color: "var(--primary)" }} />
                </div>
                <div style={{ flexGrow: 1, minWidth: 0 }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.76rem",
                      fontWeight: 700,
                      color: "#1E293B",
                      marginBottom: "4px",
                    }}
                  >
                    Nhu cầu học bằng lái: <span style={{ color: "var(--primary)" }}>*</span>
                  </label>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap" }}>
                    {licenseOptions.map((type) => (
                      <label
                        key={type}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "3px",
                          cursor: "pointer",
                          fontSize: "0.76rem",
                          fontWeight: formData.licenseType === type ? 800 : 600,
                          color: formData.licenseType === type ? "var(--primary)" : "#475569",
                        }}
                      >
                        <input
                          type="radio"
                          name="licenseType"
                          value={type}
                          checked={formData.licenseType === type}
                          onChange={(e) => setFormData({ ...formData, licenseType: e.target.value })}
                          style={{
                            accentColor: "var(--primary)",
                            width: "12px",
                            height: "12px",
                            cursor: "pointer",
                          }}
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitted}
                style={{
                  width: "100%",
                  height: "36px",
                  marginTop: "4px",
                  borderRadius: "9px",
                  background: "var(--accent-gradient)",
                  color: "#FFFFFF",
                  border: "none",
                  fontWeight: 800,
                  fontSize: "0.82rem",
                  letterSpacing: "0.4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(192, 10, 0, 0.35)",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{isSubmitted ? "ĐANG XỬ LÝ..." : "ĐĂNG KÝ HỌC"}</span>
                <div
                  style={{
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <ArrowRight size={11} style={{ color: "var(--primary)" }} strokeWidth={3} />
                </div>
              </button>

              {/* Divider: Hoặc */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#E2E8F0" }} />
                <span style={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 600 }}>Hoặc</span>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#E2E8F0" }} />
              </div>

              {/* Sub-note */}
              <p style={{ textAlign: "center", fontSize: "0.68rem", color: "#475569", margin: 0, lineHeight: 1.2 }}>
                Gọi ngay cho đội ngũ tư vấn viên để được hỗ trợ tốt nhất
              </p>

              {/* Hotline Pill */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="tel:0786300900"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    padding: "3px 12px",
                    borderRadius: "20px",
                    textDecoration: "none",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      background: "var(--accent-gradient)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Phone size={11} fill="#FFFFFF" color="#FFFFFF" />
                  </div>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 900,
                      color: "var(--primary)",
                      letterSpacing: "0.2px",
                    }}
                  >
                    0786 300 900
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
