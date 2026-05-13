import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
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
        <Services />
        <Process />
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

