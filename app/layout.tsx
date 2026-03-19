import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: "--font-jakarta",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Rajneesh Kumar — Backend Engineer",
  description: "Backend Engineer specialising in Java, Spring Boot and distributed systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} dark`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
