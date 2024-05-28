import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BORF.FILM",
  description: "All photos taken within my proximity",
  icons: {
    icon: "/icons/camera.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
