import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";

const geistSuse = localFont({
  src: "./fonts/SUSE-VariableFont_wght.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Pavlo Krobynets CV",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSuse.variable}`}>{children}</body>
    </html>
  );
}
