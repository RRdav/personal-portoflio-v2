import type { Metadata } from "next";
import { Raleway, Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/next";

const ralewaySans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const nunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raphael David | Software Developer",
  description: "Raphael David, personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewaySans.variable} ${nunitoSans.variable} antialiased`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
