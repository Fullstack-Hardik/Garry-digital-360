import { Star, Hotel, UtensilsCrossed, GraduationCap } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/5 rounded-full animate-spin-slow" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-slide-up">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-sm font-medium text-muted-foreground">Google Trusted Photography Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Immersive <span className="text-gradient">360° Virtual</span> Tours That Convert
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Transform your business with stunning virtual tours. We capture every angle of hotels, restaurants, schools, and more — bringing your space to life on Google Maps.
            </p>

            {/* Video Section */}
            <div className="animate-slide-up mb-8" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-2xl overflow-hidden card-shadow max-w-2xl mx-auto lg:mx-0">
                <video
                  className="w-full aspect-video object-cover"
                  controls
                  poster="/videos/demo.mp4#t=0.1"
                  preload="metadata"
                >
                  <source src="/videos/demo.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">500+</div>
                <div className="text-sm text-muted-foreground">Virtual Tours</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-gradient">50+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
            </div>
          </div>

          {/* 360 Visual Element with Logo */}
          <div className="flex-1 relative animate-float">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse-glow" />
              
              {/* Inner Circle with Logo */}
              <div className="absolute inset-4 rounded-full bg-gradient-card overflow-hidden card-shadow flex items-center justify-center p-6">
                <img 
                  src={logo} 
                  alt="Garry Digital 360" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating Elements with Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center card-shadow animate-float" style={{ animationDelay: "0.5s" }}>
                <Hotel className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent flex items-center justify-center card-shadow animate-float" style={{ animationDelay: "1s" }}>
                <UtensilsCrossed className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-xl glass flex items-center justify-center animate-float" style={{ animationDelay: "1.5s" }}>
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
