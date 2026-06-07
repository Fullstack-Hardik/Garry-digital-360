import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load below-the-fold and heavy components to dramatically reduce initial bundle size and TBT
const AboutSection = React.lazy(() => import("@/components/AboutSection"));
const Services = React.lazy(() => import("@/components/Services"));
const PortfolioSection = React.lazy(() => import("@/components/PortfolioSection"));
const GuidanceVideo = React.lazy(() => import("@/components/GuidanceVideo"));
const Pricing = React.lazy(() => import("@/components/Pricing"));
const VirtualTour = React.lazy(() => import("@/components/VirtualTour"));
const Vision = React.lazy(() => import("@/components/Vision"));
const FAQ = React.lazy(() => import("@/components/FAQ"));
const Contact = React.lazy(() => import("@/components/Contact"));
const Footer = React.lazy(() => import("@/components/Footer"));
const PhotographerSection = React.lazy(() => import("@/components/PhotographerSection"));
const GallerySection = React.lazy(() => import("@/components/GallerySection"));
const Process = React.lazy(() => import("@/components/Process"));
const WebGLShader = React.lazy(() => import("@/components/ui/web-gl-shader").then(m => ({ default: m.WebGLShader })));

import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <SEO 
        title="SEO Specialist & 360° Virtual Tour Photographer | Garry Digital 360"
        description="Garry Digital 360 — SEO Specialist and expert in 360 camera photography. Immersive 360° virtual tours in Delhi, Uttar Pradesh, and nationwide. Grow your business today."
        canonicalPath="/"
      />
      <Suspense fallback={null}>
        {/* WebGL Shader Background */}
        <WebGLShader />
      </Suspense>
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-background/70" style={{ zIndex: 1 }} />
      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading section...</div>}>
          <AboutSection />
          <Services />
          <Process />
          <PortfolioSection />
          <Pricing />
          <VirtualTour />
          <GallerySection />
          <PhotographerSection />
          <Vision />
          <FAQ />
          <Contact />
          <GuidanceVideo />
          <Footer />
        </Suspense>
        <WhatsAppButton />
      </div>
    </div>
  );
};
export default Index;


