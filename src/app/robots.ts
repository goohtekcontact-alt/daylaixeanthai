import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://daylaixeanthai.edu.vn/sitemap.xml",
    host: "https://daylaixeanthai.edu.vn",
  };
}
