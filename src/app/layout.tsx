import type { Metadata } from "next";
import { Noto_Serif_JP, Poppins } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import MantineProviderWrapper from "@/components/MantineProviderWrapper";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ECOBOTTLE — Smart Bottle Eco-Friendly | Drink Smart. Live Green.",
  description:
    "Scopri ECOBOTTLE: la smart water bottle sostenibile con tracking intelligente dell'idratazione, materiali bio-based riciclati e design minimalista italiano. Premium ecologico accessibile.",
  keywords:
    "smart water bottle, borraccia intelligente, bottiglia sostenibile, eco-friendly, tracking idratazione, app salute, materiali riciclati, smart drink bottle",
  authors: [{ name: "ECOBOTTLE Team", url: "https://ecobottle.it" }],
  creator: "ECOBOTTLE — Drink Smart. Live Green.",
  publisher: "ECOBOTTLE",
  metadataBase: new URL("https://ecobottle.it"),
  alternates: {
    canonical: "https://ecobottle.it",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://ecobottle.it",
    siteName: "ECOBOTTLE",
    title: "ECOBOTTLE — Smart Bottle Eco-Friendly | Drink Smart. Live Green.",
    description:
      "Smart water bottle sostenibile con tracking intelligente, materiali riciclati e design premium. Idratazione consapevole per generazione eco-smart.",
    images: [
      {
        url: "/images/hero-bottle.png",
        width: 1200,
        height: 630,
        alt: "ECOBOTTLE Smart Water Bottle — bottiglia intelligente ecologica",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ecobottle_official",
    creator: "@ecobottle_official",
    title: "ECOBOTTLE — Bottiglia Smart Ecologica | Drink Smart. Live Green.",
    description:
      "La tua idratazione consapevole: tracking intelligente + sostenibilità certificata + design premium italiano.",
    images: ["/images/hero-bottle.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ECOBOTTLE",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body className={`${notoSerifJP.variable} ${poppins.variable}`}>
        <MantineProviderWrapper>{children}</MantineProviderWrapper>
      </body>
    </html>
  );
}
