import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agung Saputra - Portfolio",
  description: "Portofolio resmi Agung Saputra, showcasing projects and skills.",
  icons: {
    icon: "/favicon.ico", // Untuk favicon utama
    shortcut: "/favicon.ico", // Untuk browser yang butuh shortcut icon
    apple: "/apple-touch-icon.png", // Untuk iOS devices
  },
  openGraph: {
    title: "Agung Saputra - Portfolio",
    description: "Portofolio resmi Agung Saputra, showcasing projects and skills.",
    url: "https://difhdev.site",
    siteName: "Agung Saputra Portfolio",
    images: [
      {
        url: "https://difhdev.site/og-image.png",
        width: 1280,
        height: 1014,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agung Saputra - Portfolio",
    description: "Portofolio resmi Agung Saputra, showcasing projects and skills.",
    images: ["https://difhdev.site/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
