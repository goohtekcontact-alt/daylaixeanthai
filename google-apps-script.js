/**
 * =========================================================================
 * GOOGLE APPS SCRIPT - TỰ ĐỘNG LƯU DỮ LIỆU ĐĂNG KÝ HỌC LÁI XE AN THÁI
 * =========================================================================
 * 
 * 📌 HƯỚNG DẪN CÀI ĐẶT TRÊN GOOGLE SHEETS:
 * 1. Mở trang Google Sheet của bạn (https://sheets.google.com).
 * 2. Đặt tên cho file Google Sheet (Ví dụ: "Học Viên Đăng Ký - GDNN An Thái").
 * 3. Trên thanh menu, chọn: Tiện ích mở rộng (Extensions) -> Apps Script.
 * 4. Xóa toàn bộ nội dung mặc định trong file Code.gs, sau đó COPY toàn bộ
 *    đoạn mã bên dưới và DÁN vào.
 * 5. Nhấn biểu tượng Lưu 💾 (hoặc Ctrl + S).
 * 6. Nhấn nút "Triển khai" (Deploy) ở góc trên bên phải -> Chọn "Tùy chọn triển khai mới" (New deployment).
 * 7. Chọn loại triển khai (bấm vào biểu tượng bánh răng ⚙ cạnh Select type): Chọn "Ứng dụng web" (Web app).
 *    - Mô tả: Nhận form đăng ký An Thái
 *    - Thực thi dưới dạng (Execute as): "Tôi" (Me - your_email@gmail.com)
 *    - Ai có quyền truy cập (Who has access): "Bất kỳ ai" (Anyone)  <--- BẮT BUỘC CHỌN "Anyone"
 * 8. Nhấn "Triển khai" (Deploy).
 *    - Nếu Google hiện thông báo cấp quyền: Chọn "Xem lại quyền" (Review Permissions) -> Chọn tài khoản Google của bạn -> Bấm "Nâng cao" (Advanced) -> Chọn "Đi tới ... (không an toàn)" -> Bấm "Cho phép" (Allow).
 * 9. Sao chép "URL ứng dụng web" (Web App URL có đuôi /exec).
 * 10. Mở file .env.local trong dự án và dán vào:
 *     GOOGLE_SHEET_SCRIPT_URL=https://script.google.com/macros/s/.../exec
 * =========================================================================
 */

// Tên trang tính (Sheet Name) để lưu danh sách
const SHEET_NAME = "Danh Sách Đăng Ký";

// Tự động tạo hàng tiêu đề màu đỏ An Thái chuẩn đẹp nếu sheet chưa có dữ liệu
function setupSheetIfEmpty(sheet) {
  if (sheet.getLastRow() === 0) {
    const headers = [
      "Thời Gian Đăng Ký",
      "Họ Và Tên",
      "Số Điện Thoại",
      "Địa Chỉ / Khu Vực",
      "Hạng Bằng Đăng Ký",
      "Nguồn Đăng Ký",
      "Trạng Thái Xử Lý",
      "Ghi Chú"
    ];

    sheet.appendRow(headers);

    // Định dạng tiêu đề chuyên nghiệp
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#C00A00"); // Đỏ tươi thắm An Thái
    headerRange.setFontColor("#FFFFFF");
    headerRange.setFontWeight("bold");
    headerRange.setFontSize(11);
    headerRange.setHorizontalAlignment("center");
    headerRange.setVerticalAlignment("middle");

    sheet.setRowHeight(1, 38);
    sheet.setFrozenRows(1); // Cố định thanh tiêu đề khi cuộn trang

    // Thiết lập độ rộng cột tối ưu
    sheet.setColumnWidth(1, 170); // Thời gian
    sheet.setColumnWidth(2, 210); // Họ tên
    sheet.setColumnWidth(3, 150); // Số điện thoại
    sheet.setColumnWidth(4, 230); // Địa chỉ
    sheet.setColumnWidth(5, 180); // Hạng bằng
    sheet.setColumnWidth(6, 180); // Nguồn
    sheet.setColumnWidth(7, 140); // Trạng thái
    sheet.setColumnWidth(8, 200); // Ghi chú
  }
}

// Hàm tiếp nhận dữ liệu POST từ website
function doPost(e) {
  const lock = LockService.getScriptLock();
  // Khóa tối đa 30s tránh ghi đè dữ liệu khi nhiều người bấm cùng lúc
  lock.tryLock(30000);

  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    // Nếu chưa có sheet theo tên thì tự động tạo mới
    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    setupSheetIfEmpty(sheet);

    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    // Lấy thông tin form
    const timestamp = data.timestamp || Utilities.formatDate(new Date(), "Asia/Ho_Chi_Minh", "dd/MM/yyyy HH:mm:ss");
    const fullName = (data.fullName || data.name || "Chưa có tên").toString().trim();
    
    // Thêm dấu ' trước SĐT để Google Sheet không tự động lược bỏ số 0 đầu
    const rawPhone = (data.phone || data.tel || "").toString().trim();
    const phone = rawPhone.startsWith("0") ? "'" + rawPhone : rawPhone;
    
    const address = (data.address || data.location || "Chưa cung cấp").toString().trim();
    const licenseType = (data.licenseType || data.course || "Hạng B (Ô tô)").toString().trim();
    const source = (data.source || "Website An Thái").toString().trim();
    const status = "Mới tiếp nhận";
    const note = "";

    // Ghi vào dòng tiếp theo
    sheet.appendRow([
      timestamp,
      fullName,
      phone,
      address,
      licenseType,
      source,
      status,
      note
    ]);

    const lastRow = sheet.getLastRow();

    // Căn chỉnh giao diện dòng vừa thêm
    sheet.getRange(lastRow, 1).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 3).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 5).setHorizontalAlignment("center");
    sheet.getRange(lastRow, 7).setHorizontalAlignment("center");
    sheet.setRowHeight(lastRow, 30);

    return ContentService
      .createTextOutput(JSON.stringify({
        result: "success",
        message: "Đã lưu thông tin vào Google Sheet thành công!",
        row: lastRow
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        result: "error",
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Hàm GET để test kiểm tra trạng thái script
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Google Apps Script tiếp nhận đăng ký An Thái đang hoạt động ổn định!"
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
