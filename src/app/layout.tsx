import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Dancing_Script } from "next/font/google";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe Uy Tín",
  description: "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô B1, B2, C1, xe máy A1, A. Cam kết học phí trọn gói, tỷ lệ đậu cao, giảng viên tận tâm.",
  icons: {
    icon: [
      { url: "/logo_anthai.png" },
      { url: "/icon.png" }
    ],
    shortcut: "/logo_anthai.png",
    apple: "/logo_anthai.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${plusJakartaSans.variable} ${inter.variable} ${dancingScript.variable}`}>
        <ScrollAnimationProvider />
        {children}
      </body>
    </html>
  );
}
