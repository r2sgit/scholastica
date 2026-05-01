import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scholastica",
  description: "A Duolingo-style learning game for Thomistic philosophy.",
  robots: { index: false, follow: false },
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
