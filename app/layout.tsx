import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocationsFAB from "@/components/LocationsFAB";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://autospajakarta.com"),
  title: {
    default: "Autospa Jakarta | Ceramic Coating, PPF & Car Detailing",
    template: "%s | Autospa Jakarta"
  },
  description: "Experience the ultimate transformation for your vehicle with the best car detailing service in Jabodetabek. Autospa Jakarta: Passion For Detail.",
  keywords: ["Auto Detailing Jakarta", "Coating Mobil Jakarta", "PPF Jakarta", "Paint Protection Film", "Nano Ceramic Coating", "Cuci Mobil Premium", "AutoSpa", "Car Detailing"],
  authors: [{ name: "AutoSpa Jakarta Team" }],
  creator: "AutoSpa Jakarta",
  publisher: "AutoSpa Jakarta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/images/favicon/favicon-96x96.png',
    shortcut: '/images/favicon/favicon.ico',
    apple: '/images/favicon/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://autospajakarta.com",
    siteName: "AutoSpa Jakarta",
    title: "Autospa Jakarta | Ceramic Coating, PPF & Car Detailing",
    description: "Experience the ultimate transformation for your vehicle with the best car detailing service in Jabodetabek. Autospa Jakarta: Passion For Detail.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AutoSpa Jakarta Premium Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoSpa Jakarta | Premium Auto Detailing",
    description: "Premium Auto Detailing & Paint Protection in Jakarta.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://autospajakarta.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white`}
      >
        <SmoothScroll>
          {children}
          <LocationsFAB />
        </SmoothScroll>
      </body>
    </html>
  );
}
