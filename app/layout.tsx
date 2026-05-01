import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://scholastica.io"),
  title: "Scholastica",
  description: "Learn about the way things are through the mind of Thomas Aquinas.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Scholastica",
    description: "Learn about the way things are through the mind of Thomas Aquinas.",
    url: "https://scholastica.io",
    siteName: "Scholastica",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholastica",
    description: "Learn about the way things are through the mind of Thomas Aquinas.",
    images: ["/images/og-image.png"],
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
