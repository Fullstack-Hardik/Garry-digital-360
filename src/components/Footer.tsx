"use client";
import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Dribbble,
  Globe,
} from "lucide-react";
import { FooterBackgroundGradient } from "@/components/ui/hover-footer";
import { TextHoverEffect } from "@/components/ui/hover-footer";

function Footer() {
  // Footer link data - customized for Garry Digital 360
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "360° Virtual Tours", href: "/#services" },
        { label: "Website Development", href: "/#services" },
        { label: "SEO Optimization", href: "/#services" },
        { label: "Google Maps Integration", href: "/#services" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "About Us", href: "/about", isRoute: true },
        { label: "Portfolio", href: "/portfolio", isRoute: true },
        { label: "Pricing", href: "/#pricing" },
        {
          label: "Contact Us",
          href: "/#contact",
          pulse: true,
        },
        { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
      ],
    },
  ];

  // Contact info data - Garry Digital 360
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-primary" />,
      text: "garrydigital360@gmail.com",
      href: "mailto:garrydigital360@gmail.com",
    },
    {
      icon: <Phone size={18} className="text-primary" />,
      text: "+91 97400 44911",
      href: "tel:+919740044911",
    },
    {
      icon: <MapPin size={18} className="text-primary" />,
      text: "F1-707, Meerut Sports City, Supertech, Modipuram, Meerut, Uttar Pradesh 250110",
      href: "https://share.google/Mi9vQYdw7vqthxo6F",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Facebook size={20} />, label: "Facebook", href: "#" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/garrydigital360" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
    { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
    { icon: <Globe size={20} />, label: "Website", href: "#" },
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand section */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-black text-xl">360</span>
              </div>
              <span className="text-2xl font-black tracking-tighter">GARRY <span className="text-primary">DIGITAL</span></span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">
              Transforming physical spaces into immersive digital experiences. We are certified Google Street View Trusted Photographers.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass-premium flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:ml-auto">
              <h4 className="text-foreground text-lg font-bold mb-8 relative">
                {section.title}
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center group"
                      >
                        <span className="w-0 group-hover:w-4 h-px bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div className="lg:ml-auto">
            <h4 className="text-foreground text-lg font-bold mb-8 relative">
              Connect With Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-6">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-start space-x-4 group">
                  <div className="mt-1 w-8 h-8 rounded-lg glass-premium flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-sm font-medium">
            &copy; {new Date().getFullYear()} <span className="text-foreground font-bold">Garry Digital 360</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm font-bold text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* Decorative text */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.02]">
        <span className="text-[15vw] font-black whitespace-nowrap">GARRY DIGITAL 360</span>
      </div>
    </footer>
  );
}

export default Footer;
