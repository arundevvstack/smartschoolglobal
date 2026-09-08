import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://smartschoolglobal.com";
  const routes = [
    "",
    "/platform",
    "/ai-for-schools",
    "/academics",
    "/admissions",
    "/examinations",
    "/student-management",
    "/mobile-app",
    "/attendance",
    "/communication",
    "/finance",
    "/transportation",
    "/security",
    "/hr-payroll",
    "/smart-wallet-canteen",
    "/hostel-management",
    "/incident-management",
    "/global",
    "/about",
    "/contact"
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/platform" || route === "/ai-for-schools" ? 0.9 : 0.8
  }));
}
