"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ShowerHead, Bath, Droplets, Grid3X3, Lightbulb, Wrench, Home } from "lucide-react";

const services = [
  {
    icon: ShowerHead,
    title: "Shower Remodeling",
    description: "Custom shower upgrades with premium tile, glass enclosures, and modern fixtures.",
    href: "/bathroom-remodeling#shower-remodeling",
  },
  {
    icon: Bath,
    title: "Bathtub Installation",
    description: "Professional bathtub installation designed for comfort, performance, and lasting style.",
    href: "/bathroom-remodeling#bathtub-installation",
  },
  {
    icon: Bath,
    title: "Bathtub Replacement",
    description: "Replace worn or outdated tubs with updated options that fit your bathroom layout.",
    href: "/bathroom-remodeling#bathtub-replacement",
  },
  {
    icon: ShowerHead,
    title: "Walk-in Shower Installation",
    description: "Accessible walk-in shower installations that combine clean design with everyday function.",
    href: "/bathroom-remodeling#walk-in-shower-installation",
  },
  {
    icon: Grid3X3,
    title: "Bathroom Tile Installation",
    description: "Expert tile installation for shower surrounds, walls, backsplashes, and bathroom floors.",
    href: "/bathroom-remodeling#bathroom-tile-installation",
  },
  {
    icon: Home,
    title: "Bathroom Vanity Installation",
    description: "Install stylish vanities with smart storage, durable tops, and coordinated sink layouts.",
    href: "/bathroom-remodeling#bathroom-vanity-installation",
  },
  {
    icon: Grid3X3,
    title: "Bathroom Flooring",
    description: "Upgrade bathroom flooring with moisture-resistant materials built for beauty and durability.",
    href: "/bathroom-remodeling#bathroom-flooring",
  },
  {
    icon: Lightbulb,
    title: "Bathroom Lighting Upgrade",
    description: "Improve brightness, ambiance, and efficiency with layered bathroom lighting upgrades.",
    href: "/bathroom-remodeling#bathroom-lighting-upgrade",
  },
  {
    icon: Droplets,
    title: "Bathroom Sink Installation",
    description: "Bathroom sink installations with updated plumbing connections and fixture selections.",
    href: "/bathroom-remodeling#bathroom-sink-installation",
  },
  {
    icon: Wrench,
    title: "Bathroom Plumbing Upgrade",
    description: "Modern plumbing upgrades that improve water flow, efficiency, and long-term reliability.",
    href: "/bathroom-remodeling#bathroom-plumbing-upgrade",
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-primary text-sm font-medium tracking-wider uppercase"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance"
          >
            Bathroom Remodeling Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Explore our bathroom remodeling micro-services, from shower updates and bathtub work
            to tile, lighting, vanity, sink, flooring, and plumbing improvements.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group block bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
