import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const fontHeading = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description:
    "Backend Specialist with 4+ years in Java, Spring Boot & Microservices. Building scalable systems for 100k+ users.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  keywords: [
    "Java Developer",
    "Spring Boot",
    "Backend Engineer",
    "Microservices",
    "Noida",
  ],
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description:
      "Backend Specialist with 4+ years in Java, Spring Boot & Microservices. Building scalable systems for 100k+ users.",
    type: "website",
    siteName: `${personalInfo.name} Portfolio`,
    images: [{ url: personalInfo.photo, width: 1200, height: 630, alt: personalInfo.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${fontBody.variable} ${fontHeading.variable}`}>
        {children}
      </body>
    </html>
  );
}
