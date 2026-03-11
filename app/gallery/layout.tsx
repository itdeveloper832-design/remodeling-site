import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Gallery | Before & After Photos - Chandler, AZ",
  description: "Browse our portfolio of completed bathroom remodeling projects in Chandler, Arizona. See before and after photos of master bathrooms, shower remodels, vanity installations, and more.",
  keywords: ["bathroom remodeling gallery", "bathroom before after photos", "chandler az bathroom remodels", "shower remodel gallery", "bathroom renovation photos", "master bathroom designs"],
  openGraph: {
    title: "Bathroom Remodeling Gallery | Chandler Bathroom Remodeling",
    description: "Browse our portfolio of completed bathroom remodeling projects in Chandler, Arizona. See before and after photos of our work.",
    url: `${siteConfig.url}/gallery`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/gallery-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Gallery - Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Gallery | Chandler Bathroom Remodeling",
    description: "Browse our portfolio of completed bathroom remodeling projects in Chandler, Arizona. See before and after photos of our work.",
    images: [`${siteConfig.url}/images/gallery-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
