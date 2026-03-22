import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ContactSection from "@/components/home/contact-section"
import { GoogleMap } from "@/components/services/google-map"
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Contact Us | Airforshare.online",
  description: "Contact Airforshare.online for professional bathroom remodeling. Free estimates, expert contractors, and quality service.",
  keywords: ["contact bathroom remodeling", "free bathroom estimate", "bathroom renovation quote"],
  openGraph: {
    title: "Contact Us | Airforshare.online",
    description: "Contact Airforshare.online for professional bathroom remodeling. Free estimates and expert service.",
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/contact-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact Chandler Bathroom Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Chandler Bathroom Remodeling | Free Remodeling Estimate",
    description: "Get your free bathroom remodeling estimate today. Licensed, insured, and trusted by Chandler homeowners.",
    images: [`${siteConfig.url}/images/contact-hero.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

const contactFaqs = [
  {
    question: "How do I schedule a free bathroom remodeling consultation with Airforshare.online?",
    answer: "You can schedule a free consultation by calling us at (480) 555-0123, filling out our online contact form at Airforshare.online, or emailing us. We typically respond within 24 hours and can schedule consultations within the same week for all bathroom remodeling projects."
  },
  {
    question: "What bathroom remodeling services does Airforshare.online offer?",
    answer: "Airforshare.online offers complete bathroom remodeling services including shower remodeling, bathtub installation, tile work, vanity installation, accessibility upgrades, flooring, lighting, and small bathroom solutions. All services come with free estimates and flexible financing options."
  },
  {
    question: "Do you serve areas outside Chandler for bathroom remodeling?",
    answer: "Yes! While based in Chandler, we serve the greater Phoenix area including Tempe, Mesa, Gilbert, Sun Lakes, and surrounding communities. Contact us to see if we serve your specific location for bathroom remodeling services."
  },
  {
    question: "What makes Airforshare.online different from other bathroom remodelers?",
    answer: "Airforshare.online provides transparent pricing, experienced craftsmen, quality materials, and excellent customer service. We offer bathroom remodel financing options, senior discounts, and guarantee our work with comprehensive warranties."
  }
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact Us", url: `${siteConfig.url}/contact` }
        ]} 
      />
      <FAQSchema faqs={contactFaqs} />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-40 pb-32 md:pt-48 md:pb-40 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Contact Bathroom Remodeling Experts - Airforshare.online
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to transform your bathroom? Contact Airforshare.online experts for professional bathroom remodeling services. 
                We offer bathroom remodel financing, senior discounts, and free consultations across all service areas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                <a 
                  href={`tel:${siteConfig.phone}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-muted-foreground hover:text-primary transition-colors block text-sm leading-snug"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: {siteConfig.hours.weekdays}<br />
                  Sat: {siteConfig.hours.saturday}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Customers Say
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Trusted by Chandler Homeowners
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  project: "Master Bathroom Remodel",
                  text: "Chandler Bathroom Remodeling transformed our outdated bathroom into a luxury spa-like retreat. The craftsmanship is exceptional!",
                  rating: 5
                },
                {
                  name: "Mike Davis",
                  project: "Walk-in Shower Installation",
                  text: "Professional, punctual, and the quality of work exceeded all expectations. Highly recommend to anyone in Chandler!",
                  rating: 5
                },
                {
                  name: "Jennifer Martinez",
                  project: "Bathroom Vanity Upgrade",
                  text: "Best decision we made for our home. The team was respectful, clean, and the final result is stunning.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Credentials */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Licensed & Bonded", value: "✓" },
                { label: "Fully Insured", value: "✓" },
                { label: "15+ Years", value: "Experienced" },
                { label: "500+ Projects", value: "Completed" }
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-sm text-background/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Find Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Visit Our Showroom
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Located in the heart of Chandler, Arizona. Stop by to see our latest bathroom remodeling projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">{siteConfig.address.full}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: {siteConfig.hours.weekdays}<br />
                    Sat: {siteConfig.hours.saturday}
                  </p>
                </div>
              </div>

              <GoogleMap 
                lat={siteConfig.address.coordinates.lat}
                lng={siteConfig.address.coordinates.lng}
                zoom={15}
                title={siteConfig.name}
                address={siteConfig.address.full}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
