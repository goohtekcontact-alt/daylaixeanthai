import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${dancingScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
