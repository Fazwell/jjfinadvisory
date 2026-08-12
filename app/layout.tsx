import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "J&J Fin Advisory",
  description:
    "Business process outsourcing, consultancy, advisory, training and professional development.",
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