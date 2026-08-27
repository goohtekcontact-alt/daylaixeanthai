import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Trung Tâm Giáo Dục Nghề Nghiệp An Thái",
    short_name: "An Thái Driving",
    description: "Trung tâm đào tạo & sát hạch bằng lái xe ô tô Hạng B (số sàn & số tự động), C1, xe máy A1, A tại Bình Dương & TP.HCM.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#C00A00",
    icons: [
      {
        src: "/logo_anthai.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo_anthai.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
