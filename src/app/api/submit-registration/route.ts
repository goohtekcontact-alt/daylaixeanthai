import { NextResponse } from "next/server";

// URL Web App Google Apps Script lưu trực tiếp về Google Sheet An Thái
const GOOGLE_SHEET_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwnBYXqSx1MlfGs9Gy5qT80Zef4QRckysLcNncQZ55Ql1eYQ9CgJ8z-My2_fFtdWPEVVg/exec";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, address, licenseType } = body;

    // Kiểm tra dữ liệu đầu vào bắt buộc
    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập Họ và tên." },
        { status: 400 }
      );
    }

    if (!phone || !phone.trim()) {
      return NextResponse.json(
        { success: false, message: "Vui lòng nhập Số điện thoại liên hệ." },
        { status: 400 }
      );
    }

    // Định dạng thời gian theo múi giờ Việt Nam (GMT+7)
    const now = new Date();
    const vnTime = new Intl.DateTimeFormat("vi-VN", {
      timeZone: "Asia/Ho_Chi_Minh",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now);

    const payload = {
      timestamp: vnTime,
      fullName: fullName.trim(),
      phone: phone.trim(),
      address: address ? address.trim() : "Chưa cung cấp",
      licenseType: licenseType || "Hạng B (Ô tô)",
      source: "Website Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
    };

    // Gửi dữ liệu trực tiếp sang Google Apps Script
    try {
      const res = await fetch(GOOGLE_SHEET_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      if (!res.ok) {
        console.error("Google Sheet API Response Error:", res.status, res.statusText);
      }
    } catch (fetchErr) {
      console.error("Lỗi khi kết nối Google Apps Script:", fetchErr);
    }

    return NextResponse.json({
      success: true,
      message: "Gửi thông tin đăng ký thành công! Trung tâm An Thái sẽ liên hệ với bạn trong thời gian sớm nhất.",
      data: payload,
    });
  } catch (error) {
    console.error("Lỗi xử lý form đăng ký:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Đã xảy ra lỗi khi gửi thông tin. Vui lòng thử lại hoặc gọi trực tiếp Hotline 0786 300 900.",
      },
      { status: 500 }
    );
  }
}
