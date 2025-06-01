import type { Metadata } from "next";
import { Raleway, Nunito } from "next/font/google";
import "./globals.css";

const ralewaySans = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const nunitoSans = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RD",
  description: "Meow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewaySans.variable} ${nunitoSans.variable} antialiased bg-red`}
      >
        {children}
      </body>
    </html>
  );
}
