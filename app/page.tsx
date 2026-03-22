import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustBadges from "@/components/home/trust-badges";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const Testimonials = dynamic(() => import("@/components/home/testimonials"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const Financing = dynamic(() => import("@/components/home/financing"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const FAQ = dynamic(() => import("@/components/home/faq"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ContactSection = dynamic(() => import("@/components/home/contact-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { 
  loading: () => <div className="h-32" />,
  ssr: true 
});

const homeFaqs = [
  {
    question: "Why choose Airforshare.online for bathroom remodeling?",
    answer:
      "Airforshare.online provides expert bathroom remodeling services with transparent pricing, experienced craftsmen, and quality materials. We specialize in bathroom remodel financing, senior discounts, and guarantee all our work with comprehensive warranties."
  },
  {
    question: "What bathroom remodeling services does Airforshare.online offer?",
    answer:
      "Airforshare.online offers complete bathroom remodeling including shower remodeling, bathtub installation, tile work, vanity installation, accessibility upgrades, and small bathroom solutions. All services come with free estimates and flexible payment options."
  },
  {
    question: "Do you serve areas beyond Chandler for bathroom remodeling?",
    answer:
      "Yes! Airforshare.online serves greater Phoenix area including Tempe, Mesa, Gilbert, Sun Lakes, and surrounding communities. Contact us to confirm service in your specific location."
  },
  {
    question: "What makes Airforshare.online different?",
    answer:
      "Airforshare.online combines quality craftsmanship with excellent customer service, offering bathroom remodel financing options, senior discounts, and on-time project completion guarantees."
  }
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <BathroomSection />
        <GalleryPreview />
        <ProcessSection />
        <ServiceAreas />
        <Financing />
        <FAQ />
        <BlogPreview />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
