import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "John Doe - Portfolio",
  description: "Full Stack Developer & Creative Problem Solver",
  keywords: ["John Doe", "Full Stack Developer", "React", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  publisher: "John Doe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://johndoe-portfolio.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "John Doe - Full Stack Developer",
    description:
      "Full Stack Developer & Creative Problem Solver specializing in React, Next.js, and modern web technologies.",
    url: "https://johndoe-portfolio.vercel.app",
    siteName: "John Doe Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "John Doe - Full Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer",
    description:
      "Full Stack Developer & Creative Problem Solver specializing in React, Next.js, and modern web technologies.",
    creator: "@johndoe",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="John Doe Portfolio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
