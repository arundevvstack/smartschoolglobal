import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SmartSchool Global — AI-Powered School Management & Cloud School ERP",
    template: "%s | SmartSchool Global"
  },
  description: "Bring academics, administration, finance, communication and school operations together in one intelligent cloud platform. School AI Software built for a global future.",
  keywords: [
    "School AI Software",
    "School Management School",
    "School ERP",
    "School Mobile App",
    "AI School Management Software",
    "School Management System",
    "Cloud School ERP",
    "School ERP Software",
    "School Management Software",
    "AI-powered School ERP",
    "Student Management System",
    "School Administration Software"
  ],
  authors: [{ name: "SmartSchool Global" }],
  creator: "SmartSchool Global",
  publisher: "SmartSchool Global",
  metadataBase: new URL("https://smartschoolglobal.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "SmartSchool Global — AI-Powered School Management & Cloud School ERP",
    description: "Enterprise School AI Software & Cloud ERP for multi-campus K-12 networks in GCC, India, Africa and Global.",
    url: "https://smartschoolglobal.com",
    siteName: "SmartSchool Global",
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
