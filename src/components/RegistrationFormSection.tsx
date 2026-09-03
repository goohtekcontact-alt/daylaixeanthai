"use client";

import "@/styles/registration-form.scss";
import { useState, useCallback } from "react";
import {
  FaUser,
  FaPhone,
  FaCar,
  FaTruck,
  FaMotorcycle,
  FaBolt,
  FaArrowRight,
  FaFileSignature,
  FaCircleCheck,
  FaRotateRight,
} from "react-icons/fa6";
import { FiMapPin, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const LICENSE_OPTIONS = [
  { id: "Hạng B (Ô tô)", label: "Hạng B (Ô tô)", icon: <FaCar size={13} /> },
  { id: "Hạng C1 (Xe tải)", label: "Hạng C1 (Xe tải)", icon: <FaTruck size={13} /> },
  { id: "Hạng A1 (Xe máy)", label: "Hạng A1 (Xe máy)", icon: <FaMotorcycle size={13} /> },
  { id: "Hạng A (Mô tô PKL)", label: "Hạng A (Mô tô PKL)", icon: <FaBolt size={13} /> },
];

export default function RegistrationFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    licenseType: "Hạng B (Ô tô)",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setErrorMessage("");

      const trimmedName = formData.fullName.trim();
      const trimmedPhone = formData.phone.trim();

      if (!trimmedName) {
        setErrorMessage("Vui lòng nhập Họ và tên của bạn.");
        return;
      }

      // Kiểm tra định dạng số điện thoại Việt Nam (10 - 11 chữ số)
      const cleanPhone = trimmedPhone.replace(/[\s.-]/g, "");
      const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;
      if (!phoneRegex.test(cleanPhone)) {
        setErrorMessage("Số điện thoại không hợp lệ (Ví dụ: 0912345678).");
        return;
      }

      setIsSubmitting(true);

      try {
        const response = await fetch("/api/submit-registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: trimmedName,
            phone: cleanPhone,
            address: formData.address.trim(),
            licenseType: formData.licenseType,
          }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setIsSuccess(true);
          setFormData({
            fullName: "",
            phone: "",
            address: "",
            licenseType: "Hạng B (Ô tô)",
          });
        } else {
          setErrorMessage(
            result.message || "Gửi đăng ký chưa thành công. Vui lòng liên hệ Hotline 0786 300 900!"
          );
        }
      } catch (err) {
        console.error("Lỗi gửi form:", err);
        // Ngay cả khi mạng offline, vẫn hiển thị thông báo thân thiện
        setErrorMessage("Không thể kết nối tới máy chủ. Vui lòng liên hệ Hotline 0786 300 900!");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <section
      id="form-dang-ky"
      className="registration-form-section"
      style={{
        position: "relative",
        width: "100%",
        backgroundImage: "url('/images/image_background-form.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        padding: "60px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Anchor cho #dang-ky để khớp với thanh Header và Bảng giá */}
      <span id="dang-ky" style={{ position: "absolute", top: "-80px", visibility: "hidden" }} />

      <div
        className="registration-form-container"
        style={{ maxWidth: "1200px", width: "100%", margin: "0 auto" }}
      >
        <div
          className="registration-form-card reveal-up"
          style={{
            maxWidth: "460px",
            width: "100%",
            margin: "0 0 0 auto",
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderRadius: "24px",
            padding: "24px 28px",
            boxShadow:
              "0 24px 48px rgba(0, 0, 0, 0.16), 0 4px 16px rgba(192, 10, 0, 0.08)",
            border: "1.5px solid rgba(255, 255, 255, 0.8)",
            position: "relative",
          }}
        >
          {/* Decorative Red Edit Badge Floating Top */}
          <div
            style={{
              position: "absolute",
              top: "-18px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "var(--accent-gradient)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 14px rgba(192, 10, 0, 0.35)",
              border: "3px solid #FFFFFF",
            }}
          >
            <FaFileSignature size={18} color="#FFFFFF" />
          </div>

          {/* Form Title */}
          <div style={{ textAlign: "center", marginTop: "6px", marginBottom: "14px" }}>
            <h2
              style={{
                fontSize: "1.15rem",
                fontWeight: 900,
                color: "var(--primary)",
                lineHeight: 1.25,
                letterSpacing: "-0.2px",
                margin: 0,
              }}
            >
              Đăng Ký Học Lái Xe <br />
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
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  backgroundColor: "rgba(192, 10, 0, 0.3)",
                }}
              />
              <div
                style={{
                  color: "var(--primary)",
                  fontSize: "0.65rem",
                  letterSpacing: "2px",
                }}
              >
                ★ ★ ★
              </div>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  backgroundColor: "rgba(192, 10, 0, 0.3)",
                }}
              />
            </div>
          </div>

          {/* Thông báo Thành công sau khi gửi */}
          {isSuccess ? (
            <div
              style={{
                padding: "20px 16px",
                backgroundColor: "#F0FDF4",
                border: "1.5px solid #86EFAC",
                borderRadius: "16px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                animation: "fadeIn 0.3s ease-in-out",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  backgroundColor: "#DCFCE7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#16A34A",
                }}
              >
                <FiCheckCircle size={28} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 800,
                    color: "#15803D",
                    margin: "0 0 6px 0",
                  }}
                >
                  Gửi Thông Tin Thành Công!
                </h3>
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "#334155",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  Cảm ơn bạn đã đăng ký. Ban tuyển sinh <strong>Trung Tâm Giáo Dục Nghề Nghiệp An Thái</strong> sẽ liên hệ tư vấn và xếp lịch học cho bạn trong thời gian sớm nhất!
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsSuccess(false)}
                style={{
                  marginTop: "6px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 18px",
                  borderRadius: "9999px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #CBD5E1",
                  color: "#475569",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <FaRotateRight size={12} />
                <span>Gửi thêm thông tin khác</span>
              </button>
            </div>
          ) : (
            /* Form nhập liệu */
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {/* Hiển thị lỗi nếu có */}
              {errorMessage && (
                <div
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#FEF2F2",
                    border: "1px solid #FECACA",
                    borderRadius: "10px",
                    color: "#B91C1C",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <FiAlertCircle size={15} style={{ flexShrink: 0 }} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Field 1: Họ và tên */}
              <Input
                label="Họ và tên:"
                requiredStar
                icon={<FaUser size={14} />}
                type="text"
                placeholder="Nhập họ và tên của bạn"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />

              {/* Field 2: Số điện thoại */}
              <Input
                label="Số điện thoại:"
                requiredStar
                icon={<FaPhone size={14} />}
                type="tel"
                placeholder="Nhập số điện thoại liên hệ"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />

              {/* Field 3: Địa chỉ */}
              <Input
                label="Địa chỉ:"
                icon={<FiMapPin size={15} />}
                type="text"
                placeholder="Nhập khu vực / địa chỉ của bạn"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />

              {/* Field 4: Nhu cầu học bằng lái */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  marginTop: "2px",
                }}
              >
                <label
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#1E293B",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <FaCar size={14} style={{ color: "var(--primary)" }} />
                  <span>Nhu cầu học bằng lái:</span>{" "}
                  <span style={{ color: "var(--primary)" }}>*</span>
                </label>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "6px",
                    width: "100%",
                  }}
                >
                  {LICENSE_OPTIONS.map((opt) => {
                    const isSelected = formData.licenseType === opt.id;
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() =>
                          setFormData({ ...formData, licenseType: opt.id })
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          padding: "7px 8px",
                          width: "100%",
                          minWidth: 0,
                          boxSizing: "border-box",
                          borderRadius: "9999px",
                          border: isSelected
                            ? "1.5px solid var(--primary)"
                            : "1px solid #E2E8F0",
                          background: isSelected
                            ? "var(--accent-gradient)"
                            : "#F8FAFC",
                          color: isSelected ? "#FFFFFF" : "#334155",
                          fontWeight: isSelected ? 700 : 500,
                          fontSize: "0.76rem",
                          cursor: "pointer",
                          boxShadow: isSelected
                            ? "0 4px 12px rgba(192, 10, 0, 0.25)"
                            : "none",
                          transition: "all 0.2s ease",
                          textAlign: "left",
                          userSelect: "none",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "5px",
                            backgroundColor: isSelected
                              ? "rgba(255, 255, 255, 0.25)"
                              : "#E2E8F0",
                            color: isSelected ? "#FFFFFF" : "#64748B",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "all 0.2s ease",
                          }}
                        >
                          {opt.icon}
                        </div>
                        <span
                          style={{
                            flex: "1 1 auto",
                            minWidth: 0,
                            letterSpacing: "0.1px",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: "0.75rem",
                          }}
                        >
                          {opt.label}
                        </span>
                        {isSelected && (
                          <FaCircleCheck
                            size={13}
                            color="#FFFFFF"
                            style={{ flexShrink: 0 }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  minHeight: "42px",
                  marginTop: "6px",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 800,
                  letterSpacing: "0.3px",
                  boxShadow: "0 6px 18px rgba(192, 10, 0, 0.35)",
                }}
              >
                <span>{isSubmitting ? "ĐANG GỬI THÔNG TIN..." : "ĐĂNG KÝ HỌC NGAY"}</span>
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
                  <FaArrowRight size={11} style={{ color: "var(--primary)" }} />
                </div>
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
