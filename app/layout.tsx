import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  verification: {
    google: '2ARTG65jNJhlpMH4ReQpdZooIPFPV1J-H4lsYNobU4E',
  },
  title: {
    default: `Bathroom Remodeling | Airforshare.online`,
    template: `%s | Airforshare.online`
  },
  description: 'Professional bathroom remodeling services at Airforshare.online. Expert contractors, free estimates, financing options, and quality renovations for your bathroom.',
  keywords: ['bathroom remodeling', 'bathroom renovation', 'shower remodeling', 'bathtub installation', 'bathroom tile', 'free estimates', 'financing available'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: 'Airforshare.online',
    title: 'Bathroom Remodeling | Airforshare.online',
    description: 'Professional bathroom remodeling services. Free estimates and financing options available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bathroom Remodeling | Airforshare.online',
    description: 'Professional bathroom remodeling services. Free estimates and financing available.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#6BB3D9',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        {/* Preload critical fonts only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        {children}
      </body>
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
    </html>
  )
}
