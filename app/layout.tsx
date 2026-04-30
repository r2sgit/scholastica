import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scholastica",
  description: "A Duolingo-style learning game for Thomistic philosophy.",
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
