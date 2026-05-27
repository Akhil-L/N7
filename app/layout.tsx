import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N7 - The new foundation of modern banking",
  description: "We drive innovation and growth, provide seamless customer experience and operational excellence",
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