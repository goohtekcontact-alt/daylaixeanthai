import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import ScrollAnimationProvider from "@/components/ScrollAnimationProvider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  variable: "--font-dancing",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#C00A00",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://daylaixeanthai.vercel.app"),
  title: {
    default: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe Uy Tín",
    template: "%s | Trung Tâm An Thái",
  },
  description:
    "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô B1, B2, C1, xe máy A1, A. Cam kết học phí trọn gói không phát sinh, tỷ lệ đậu cao, giảng viên tận tâm nhiệt tình.",
  keywords: [
    "Trung tâm đào tạo lái xe An Thái",
    "Học bằng lái xe B1 B2 C1",
    "Đào tạo lái xe An Thái Dĩ An",
    "Học lái xe Bình Dương",
    "Sát hạch bằng lái xe uy tín",
    "Dạy lái xe An Thái",
    "Bằng lái xe ô tô B1",
    "Bằng lái xe ô tô B2",
    "Bằng lái xe tải C1",
  ],
  authors: [{ name: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái", url: "https://daylaixeanthai.vercel.app" }],
  creator: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
  publisher: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
  alternates: {
    canonical: "https://daylaixeanthai.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://daylaixeanthai.vercel.app",
    siteName: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
    title: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe Uy Tín",
    description:
      "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô B1, B2, C1, xe máy A1, A. Cam kết học phí trọn gói không phát sinh, tỷ lệ đậu cao.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe",
        type: "image/png",
      },
      {
        url: "/logo_anthai.png",
        width: 1239,
        height: 1239,
        alt: "Logo Trung Tâm An Thái",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe Uy Tín",
    description:
      "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô B1, B2, C1, xe máy A1, A. Cam kết học phí trọn gói không phát sinh, tỷ lệ đậu cao.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <body className={`${plusJakartaSans.variable} ${dancingScript.variable}`}>
        <ScrollAnimationProvider />
        {children}
      </body>
    </html>
  );
}
