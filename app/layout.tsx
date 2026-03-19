import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const softwareEngineerFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-software-engineer",
});

export const metadata: Metadata = {
  title: "Rajneesh Kumar — Backend Engineer",
  description:
    "Portfolio of Rajneesh Kumar, Backend Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${softwareEngineerFont.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
