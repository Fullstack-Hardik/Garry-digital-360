import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import VirtualTour from "@/components/VirtualTour";
import Contact from "@/components/Contact";
import InstagramProfile from "@/components/InstagramProfile";
import Footer from "@/components/Footer";
import PhotographerSection from "@/components/PhotographerSection";
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
        <Pricing />
        <VirtualTour />
        <Portfolio />
        <PhotographerSection />
        <Contact />
        <InstagramProfile />
        <Footer />
      </div>
    </div>
  );
};
export default Index;

