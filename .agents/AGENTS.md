# Quy Tắc Dự Án & Hướng Dẫn Phát Triển (AGENTS.md)

Tài liệu này quy định các quy tắc thiết kế, mã nguồn và kiến trúc dành cho AI Agent khi xây dựng và phát triển dự án **Trung Tâm Giáo Dục Nghề Nghiệp An Thái**.

---

## 🎨 1. Quy Tắc Thương Hiệu & Màu Sắc (Brand & Design Tokens)

*   **Màu sắc chủ đạo (Lấy từ màu Đỏ An Thái tươi thắm #C00A00)**:
    *   **Primary (Đỏ Tươi Thắm)**: `#C00A00` (`var(--primary)`)
    *   **Secondary (Đỏ Nổi Bật)**: `#D91600` (`var(--secondary)`)
    *   **Primary Hover**: `#A00800` (`var(--primary-hover)`)
    *   **Primary Light**: `#FDF2F1` (`var(--primary-light)`)
    *   **Accent Gradient**: `linear-gradient(135deg, #C00A00 0%, #E01E00 100%)` (`var(--accent-gradient)`)
*   **Quy định dùng màu**: Tuyệt đối **không hardcode** các mã màu ngẫu nhiên. Luôn dùng CSS Custom Properties từ [`src/app/globals.css`](file:///d:/PROJECT_DOING/Trung_tam_giao-duc_nghe_lai_xe/src/app/globals.css).

---

## 🔤 2. Quy Tắc Phông Chữ & Tối Ưu Tiếng Việt (Typography & Vietnamese Diacritics)

*   **Font mặc định**: Google Font **`Plus Jakarta Sans`** (`var(--font-plus-jakarta)`) được tích hợp qua `next/font/google`.
*   **Quy tắc chống dính/đè dấu tiếng Việt (Anti-Squish Diacritics)**:
    *   **KHÔNG** dùng chữ in hoa toàn bộ quá dày (`text-transform: uppercase` + `font-weight: 800/900`) cho các câu tiếng Việt dài (ví dụ: *"GỬI THÔNG TIN ĐĂNG KÝ"*).
    *   **LUÔN** ưu tiên dùng dạng **Title Case** (ví dụ: *"Gửi Thông Tin Đăng Ký"*, *"Đăng Ký Học Ngay"*).
    *   Thiết lập `font-weight: 600` hoặc `700`, `line-height: 1.5`, và `letter-spacing: 0.3px` để đảm bảo các dấu tiếng Việt (`Ử`, `Ô`, `Đ`, `Ắ`, `Ấ`,...) hiển thị sắc nét và mượt mà.

---

## 🚫 3. Tiêu Chuẩn UI UX Pro Max (Anti-AI Code Rules)

*   **Tuyệt đối KHÔNG dùng Emoji làm Icon cấu trúc**:
    *   Tránh dùng emoji (🚗, 📍, 📞, ⏰, 🔥, ✓,...) cho giao diện, nút bấm, menu – đây là lỗi code AI sơ khai.
    *   **LUÔN** sử dụng bộ vector icon từ **`lucide-react`** (`MapPin`, `PhoneCall`, `Clock`, `CheckCircle2`, `ShieldCheck`, `Award`, `Send`, `Star`, `BadgeCheck`, `Trophy`, `Sparkles`, `ChevronRight`,...).
*   **Header**:
    *   Sử dụng hiệu ứng kính mờ (Glassmorphism): `backdrop-filter: blur(16px); background: rgba(255, 255, 255, 0.94)`.
    *   Tích hợp thanh Topbar thông báo & Hotline, nút Đăng ký học gradient nổi bật, hỗ trợ mobile toggle responsive.
*   **Footer**:
    *   Tông nền tối cao cấp `#0E0F12` với viền trên `4px solid var(--primary)`.
    *   Bố cục lưới 4 cột rõ ràng, tích hợp các thẻ thông tin hotline và các badge chứng nhận **ISO 9001:2015** và **Chuẩn Bộ GTVT**.
*   **Touch Targets & Micro-interactions**:
    *   Vùng bấm tương tác tối thiểu >= 44x44px.
    *   Hiệu ứng hover chuyển động mượt mà với `transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1)`.

---

## 🖼️ 4. Quản Lý Tài Nguyên Ảnh & Logo

*   **Logo thương hiệu**: `/logo_anthai.png` đặt tại [`public/logo_anthai.png`](file:///d:/PROJECT_DOING/Trung_tam_giao-duc_nghe_lai_xe/public/logo_anthai.png).
*   **Favicon**: Icon hiển thị trên thẻ trình duyệt được đặt tại [`src/app/icon.png`](file:///d:/PROJECT_DOING/Trung_tam_giao-duc_nghe_lai_xe/src/app/icon.png), [`src/app/apple-icon.png`](file:///d:/PROJECT_DOING/Trung_tam_giao-duc_nghe_lai_xe/src/app/apple-icon.png) và [`src/app/favicon.ico`](file:///d:/PROJECT_DOING/Trung_tam_giao-duc_nghe_lai_xe/src/app/favicon.ico).

---

## 🏗️ 5. Kiến Trúc Mã Nguồn & Tối Ưu Hiệu Năng (Clean Code, Reusability & Performance)

*   **Tái sử dụng Component (Reusability)**:
    *   Tách biệt các UI primitives dùng chung vào thư mục `src/components/ui/` hoặc `src/components/` (ví dụ: `Button`, `Badge`, `Card`, `Input`, `SectionHeading`).
    *   Tuyệt đối tránh trùng lặp mã HTML/CSS inline hoặc tạo lại các khối UI giống nhau.
*   **Tối ưu Re-render & Hiệu Năng (Performance Optimization)**:
    *   Giữ các component làm **Server Components** mặc định trong Next.js App Router. Chỉ dùng `"use client";` tại các component nhỏ nhất có xử lý tương tác (`useState`, `onClick`, `onSubmit`).
    *   Sử dụng `React.memo`, `useCallback`, `useMemo` khi truyền props hoặc xử lý danh sách/trạng thái phức tạp để tránh re-render thừa không cần thiết.
    *   Tối ưu ảnh bằng `next/image` (chỉ dùng `priority` cho các ảnh phía trên khung hình như Logo & Hero Banner).
*   **Phân chia các khối giao diện**:
    *   `Header.tsx`: Điều hướng & topbar.
    *   `HeroBanner.tsx`: Khối ưu đãi & form đăng ký tư vấn.
    *   `WhyChooseUs.tsx`: 6 lý do nổi bật.
    *   `CoursePricing.tsx`: Bảng giá học phí B1, B2, C.
    *   `Differences.tsx`: Cam kết chất lượng & hỗ trợ.
    *   `Process.tsx`: Quy trình 4 bước chuẩn GTVT.
    *   `Footer.tsx`: Chân trang 4 cột.

## 🛠️ 6. Quy Trình Phát Triển & Kiểm Tra (Development Workflow)

*   Sử dụng máy chủ phát triển local `yarn dev` (hoặc `npm run dev`) với tính năng Hot Reload để xem thay đổi ngay trên trình duyệt.
*   **KHÔNG** cần phải chạy `npm run build` / `yarn build` sau mỗi lần chỉnh sửa mã nguồn (chỉ chạy build khi chuẩn bị đóng gói sản phẩm hoặc khi người dùng yêu cầu).

---

## 🌐 7. Tiêu Chuẩn Mã Nguồn Web W3C & SEO Web Standards

*   **Tuân thủ tiêu chuẩn W3C Validated Web Code**:
    *   Mã HTML/JSX và CSS phải đạt chuẩn W3C, sử dụng đúng thẻ Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
    *   Đảm bảo thuộc tính `alt` mô tả đầy đủ cho mọi hình ảnh `next/image` và `aria-label` cho tất cả các nút tương tác không có text hiển thị.
    *   Sử dụng lớp kỹ thuật `.sr-only` chuẩn W3C Web Accessibility để ẩn các văn bản hỗ trợ SEO / Trình đọc màn hình (Screen Reader) mà không bị lỗi giao diện hay vi phạm chính sách của công cụ tìm kiếm.
    *   Tích hợp dữ liệu cấu trúc chuẩn **Schema.org (JSON-LD)** cho thông tin khóa học, giá cả, và thông tin doanh nghiệp để hỗ trợ Google Search Rich Snippets.


