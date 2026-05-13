import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Services from "@/components/Services";
import PortfolioSection from "@/components/PortfolioSection";
import GuidanceVideo from "@/components/GuidanceVideo";
import Pricing from "@/components/Pricing";
import VirtualTour from "@/components/VirtualTour";
import Vision from "@/components/Vision";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PhotographerSection from "@/components/PhotographerSection";
import GallerySection from "@/components/GallerySection";
import Process from "@/components/Process";
import WhatsAppButton from "@/components/WhatsAppButton";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* WebGL Shader Background */}
      <WebGLShader />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-background/70" style={{ zIndex: 1 }} />
      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
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
        <WhatsAppButton />
        <GuidanceVideo />
        <Footer />
      </div>
    </div>
  );
};
export default Index;


