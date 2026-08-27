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

const DOMAIN = "https://daylaixeanthai.edu.vn";

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: {
    default: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe Uy Tín",
    template: "%s | Trung Tâm Lái Xe An Thái",
  },
  description:
    "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô Hạng B (số sàn & số tự động), C1, xe máy A1, A. Cam kết học phí trọn gói không phát sinh, tỷ lệ đậu cao.",
  keywords: [
    "Dạy lái xe An Thái",
    "Trung tâm đào tạo lái xe An Thái",
    "daylaixeanthai.edu.vn",
    "Học bằng lái xe Hạng B C1",
    "Đào tạo lái xe An Thái Dĩ An",
    "Học lái xe Bình Dương",
    "Sát hạch bằng lái xe uy tín",
    "Bằng lái xe Hạng B số tự động",
    "Bằng lái xe Hạng B số sàn",
    "Bằng lái xe tải C1",
    "Học lái xe máy A1 A",
  ],
  authors: [{ name: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái", url: DOMAIN }],
  creator: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
  publisher: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
  category: "Education",
  alternates: {
    canonical: DOMAIN,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: DOMAIN,
    siteName: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
    title: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái - Đào Tạo Lái Xe Uy Tín",
    description:
      "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô Hạng B (số sàn & số tự động), C1, xe máy A1, A. Cam kết học phí trọn gói không phát sinh, tỷ lệ đậu cao.",
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
      "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô Hạng B (số sàn & số tự động), C1, xe máy A1, A. Cam kết học phí trọn gói không phát sinh, tỷ lệ đậu cao.",
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

// Schema.org JSON-LD Structured Data cho Google Rich Snippets
const ORGANISATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "DrivingSchool"],
  "name": "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
  "alternateName": "Trung Tâm Đào Tạo Và Sát Hạch Lái Xe An Thái",
  "url": DOMAIN,
  "logo": `${DOMAIN}/logo_anthai.png`,
  "image": `${DOMAIN}/og-image.png`,
  "description": "Trung tâm GDNN An Thái chuyên đào tạo và sát hạch bằng lái xe ô tô Hạng B (số sàn & số tự động), C1, xe máy A1, A. Học phí trọn gói minh bạch, sân tập đạt chuẩn Bộ GTVT.",
  "telephone": "0786300900",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Số 6 Độc Lập, KCN Sóng Thần 1",
    "addressLocality": "Dĩ An",
    "addressRegion": "Bình Dương",
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 10.8838666,
    "longitude": 106.743632
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "07:30",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/anthaidaotaolaixe",
    "https://zalo.me/0786300900"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANISATION_SCHEMA) }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${dancingScript.variable}`}>
        <ScrollAnimationProvider />
        {children}
      </body>
    </html>
  );
}
