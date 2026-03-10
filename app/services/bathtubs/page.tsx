import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Commercial Bathroom Remodel Contractors Near Me - Bathtubs | Chandler, AZ",
  description: "Professional bathtub installation by commercial bathroom remodel contractors near me in Chandler, Arizona and 60625 IL. Get bathroom remodel financing near me and handicap bathroom remodel contractors near me services.",
};

export default function BathtubsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Commercial Bathroom Remodel Contractors Near Me - Premium Bathtubs"
          subtitle="Bathtubs by Expert Contractors"
          description="Professional bathtub installation by licensed commercial bathroom remodel contractors near me. Serving Chandler, AZ and 60625 IL with bathroom remodel financing near me options and handicap bathroom remodel contractors near me services."
          image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Bathtubs", url: `${siteConfig.url}/services/bathtubs` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Commercial Bathroom Remodel Contractors Near Me - Bathtub Services
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Looking for bathroom remodelers near me 60625 il or Chandler, AZ? Our commercial bathroom remodel contractors near me 
                  specialize in professional bathtub installation and replacement. We offer bathroom remodel financing near me and 
                  handicap bathroom remodel contractors near me services for accessible bathing solutions.
                </p>
                <p className="mb-6">
                  As experienced bathroom remodel contractors near me, we provide bathroom remodel with financing near me options 
                  and can complete many projects with our bathroom remodel in a day near me service. We also offer free bathroom remodel for seniors near me programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Benefits of Professional Bathtub Installation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Expert Installation</h3>
                  <p className="text-muted-foreground">Professional installation ensures proper fit, plumbing connections, and waterproofing for years of reliable use.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Quality Materials</h3>
                  <p className="text-muted-foreground">We use only premium bathtubs from trusted manufacturers, ensuring durability and long-lasting beauty.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Increased Home Value</h3>
                  <p className="text-muted-foreground">A new bathtub installation can significantly increase your home's value and appeal to potential buyers.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Enhanced Comfort</h3>
                  <p className="text-muted-foreground">Modern bathtubs offer improved comfort features like ergonomic design and therapeutic options.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Why Choose Our Bathtub Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Licensed & Insured Professionals</h3>
                    <p className="text-muted-foreground">Our team consists of licensed and insured professionals with years of experience in bathtub installation and replacement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Warranty</h3>
                    <p className="text-muted-foreground">We stand behind our work with comprehensive warranties on both materials and labor for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local Chandler Experts</h3>
                    <p className="text-muted-foreground">As local Chandler experts, we understand local building codes and provide personalized service to our community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Are you commercial bathroom remodel contractors near me?</h3>
                  <p className="text-muted-foreground">Yes, we are licensed commercial bathroom remodel contractors near me serving Chandler, AZ and 60625 IL areas with bathroom remodel financing near me options.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Do you offer bathroom remodel financing near me?</h3>
                  <p className="text-muted-foreground">Yes, we provide bathroom remodel financing near me and bathroom remodel with financing near me options with flexible payment plans for qualified customers.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Are you handicap bathroom remodel contractors near me?</h3>
                  <p className="text-muted-foreground">Absolutely! We are certified handicap bathroom remodel contractors near me specializing in ADA-compliant bathtub installations and accessibility modifications.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Do you offer bathroom remodel in a day near me services?</h3>
                  <p className="text-muted-foreground">Yes, our bathroom remodel in a day near me service can complete many bathtub installations and replacements in just one day for your convenience.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for Your New Bathtub?"
          description="Contact us today for a free consultation and estimate on your bathtub installation or replacement project."
        />
      </main>
      <Footer />
    </>
  );
}