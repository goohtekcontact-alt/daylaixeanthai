import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhyB2Section from "@/components/WhyB2Section";
import CoursePricing from "@/components/CoursePricing";
import Differences from "@/components/Differences";
import Process from "@/components/Process";
import PracticeGrounds from "@/components/PracticeGrounds";
import RegistrationOptions from "@/components/RegistrationOptions";
import RegistrationFormSection from "@/components/RegistrationFormSection";
import StudentGallerySection from "@/components/StudentGallerySection";
import FloatingContactWidget from "@/components/FloatingContactWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Layout Content */}
      <main style={{ flexGrow: 1 }}>
        {/* 2. Hero Section */}
        <HeroBanner />

        {/* 3. Tại sao chọn Trung tâm An Thái */}
        <WhyChooseUs />

        {/* 4. Section Tại sao nên thi bằng lái xe B2 */}
        <WhyB2Section />

        {/* 5. Các Khóa học & Bảng giá (B1, B2, C) */}
        <CoursePricing />

        {/* 6. Sự Khác Biệt & Cam Kết */}
        <Differences />

        {/* 7. Quy trình đào tạo 6 bước */}
        <Process />

        {/* 8. Hệ thống các sân tập của học lái xe */}
        <PracticeGrounds />

        {/* 9. 3 Phương án nộp hồ sơ */}
        <RegistrationOptions />

        {/* 10. Form Đăng Ký Tư Vấn Nền Image Background */}
        <RegistrationFormSection />

        {/* 11. Hình ảnh học viên thực tế & Đánh giá (Vị trí áp chót ngay trên Footer) */}
        <StudentGallerySection />
      </main>

      {/* Floating Speed Dial Contact Widget (Hotline, Zalo, Facebook, Google Maps) */}
      <FloatingContactWidget />

      {/* Footer */}
      <Footer />
    </div>
  );
}
