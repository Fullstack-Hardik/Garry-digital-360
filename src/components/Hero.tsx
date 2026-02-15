import { Building2, ChefHat, School, MapPin, Camera, Video } from "lucide-react";
import logo from "@/assets/logo.png";
import { UpgradeBanner } from "@/components/ui/upgrade-banner";
import { AwardBadge } from "@/components/ui/award-badge";
import { SparklesCore } from "@/components/ui/sparkles";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-20 overflow-hidden">
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
            {/* Google Trusted Badge with Google Maps Icon */}
            <div className="flex justify-center lg:justify-start mb-6 animate-slide-up">
              <UpgradeBanner 
                buttonText="Google Trusted"
                description={
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Photographer
                  </span>
                }
              />
            </div>

            {/* Sparkles Title for GARRY DIGITAL 360 */}
            <div className="relative mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="relative h-32 sm:h-36 lg:h-40 w-full max-w-3xl mx-auto lg:mx-0">
                {/* Animated Gradient Lines - Logo Colors with Smooth Transitions */}
                <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 blur-sm animate-gradient-x" style={{ background: 'linear-gradient(90deg, transparent, #FFD700, #FF8C00, #00CED1, transparent)', backgroundSize: '200% 100%' }} />
                <div className="absolute inset-x-20 top-0 h-px w-3/4 animate-gradient-x-slow" style={{ background: 'linear-gradient(90deg, transparent, #FF8C00, #20B2AA, #FFD700, transparent)', backgroundSize: '200% 100%' }} />
                <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 blur-sm animate-gradient-x-reverse" style={{ background: 'linear-gradient(90deg, transparent, #00CED1, #20B2AA, transparent)', backgroundSize: '200% 100%' }} />
                <div className="absolute inset-x-60 top-0 h-px w-1/4 animate-gradient-x" style={{ background: 'linear-gradient(90deg, transparent, #20B2AA, #FFD700, transparent)', backgroundSize: '200% 100%' }} />

                {/* Star Sparkles - Left Side */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 animate-pulse-star" style={{ animationDelay: '0s' }}>
                  <div className="absolute inset-0 rotate-0">
                    <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent via-[#FFD700] to-transparent" />
                    <div className="absolute top-1/2 left-0 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
                  </div>
                </div>
                <div className="absolute left-4 top-1/4 w-6 h-6 animate-pulse-star" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 rotate-45">
                    <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-gradient-to-b from-transparent via-[#00CED1] to-transparent" />
                    <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-gradient-to-r from-transparent via-[#00CED1] to-transparent" />
                  </div>
                </div>

                {/* Star Sparkles - Right Side */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 animate-pulse-star" style={{ animationDelay: '0.3s' }}>
                  <div className="absolute inset-0 rotate-0">
                    <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent via-[#FF8C00] to-transparent" />
                    <div className="absolute top-1/2 left-0 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent" />
                  </div>
                </div>
                <div className="absolute right-4 top-3/4 w-6 h-6 animate-pulse-star" style={{ animationDelay: '0.8s' }}>
                  <div className="absolute inset-0 rotate-45">
                    <div className="absolute top-0 left-1/2 w-0.5 h-6 bg-gradient-to-b from-transparent via-[#20B2AA] to-transparent" />
                    <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-gradient-to-r from-transparent via-[#20B2AA] to-transparent" />
                  </div>
                </div>

                {/* Core sparkles component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                  speed={2}
                />

                {/* Text overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#00CED1] bg-clip-text text-transparent leading-tight whitespace-nowrap px-4">
                    GARRY DIGITAL 360
                  </h1>
                </div>

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(400px_150px_at_top,transparent_20%,white)]"></div>
              </div>
            </div>

            {/* Subtitle */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Immersive 360° Virtual Tours
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              Transform your business with stunning virtual tours. We capture every angle of hotels, restaurants, schools, and more — bringing your space to life on Google Maps.
            </p>

            {/* Enhanced Video Section */}
            <div className="animate-slide-up mb-8" style={{ animationDelay: "0.4s" }}>
              <div className="relative rounded-2xl overflow-hidden max-w-2xl mx-auto lg:mx-0">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 rounded-2xl blur-xl opacity-75"></div>
                
                {/* Video container with enhanced styling */}
                <div className="relative rounded-2xl overflow-hidden ring-1 ring-primary/20 shadow-2xl opacity-80">
                  <video
                    className="w-full aspect-video object-cover opacity-90"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/videos/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Overlay for better transparency effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/20 pointer-events-none"></div>
                  <div className="absolute inset-0 pointer-events-auto cursor-default" onClick={(e) => e.preventDefault()} />
                </div>
              </div>
            </div>

            {/* Award Badge */}
            <div className="flex justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: "0.5s" }}>
              <AwardBadge 
                type="google-trusted" 
                link="https://www.google.com/maps/contrib/114697178034099929558"
              />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-muted-foreground">Virtual Tours</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#00CED1] bg-clip-text text-transparent">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#00CED1] to-[#20B2AA] bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
            </div>
          </div>

          {/* 360 Visual Element with Logo */}
          <div className="flex-1 relative animate-float">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto">
              {/* Google-Style Rainbow Border with Glow */}
              <div className="absolute inset-0 rounded-full p-1 animate-rainbow-spin-smooth">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FFD700] via-[#FF8C00] via-[#00CED1] to-[#20B2AA] blur-md opacity-60"></div>
                <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, #FFD700, #FF8C00, #00CED1, #20B2AA, #FFD700)', backgroundSize: '100% 100%' }}></div>
                <div className="absolute inset-[3px] rounded-full bg-background" />
              </div>
              
              {/* Inner Circle with Logo */}
              <div className="absolute inset-4 rounded-full bg-gradient-card overflow-hidden shadow-2xl flex items-center justify-center p-6">
                <img 
                  src={logo} 
                  alt="Garry Digital 360" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Clean Orbiting Icons - No Background */}
              {/* Icon 1 - Top (Building) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-orbit-1">
                <Building2 className="w-10 h-10 text-[#FFD700] drop-shadow-2xl hover:scale-125 transition-all duration-300 filter hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
              </div>

              {/* Icon 2 - Right (School) */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 animate-orbit-2">
                <School className="w-9 h-9 text-[#FF8C00] drop-shadow-2xl hover:scale-125 transition-all duration-300 filter hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.8)]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
              </div>

              {/* Icon 3 - Bottom Right (Chef) */}
              <div className="absolute bottom-0 right-1/4 translate-y-1/2 animate-orbit-3">
                <ChefHat className="w-10 h-10 text-[#00CED1] drop-shadow-2xl hover:scale-125 transition-all duration-300 filter hover:drop-shadow-[0_0_15px_rgba(0,206,209,0.8)]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
              </div>

              {/* Icon 4 - Bottom Left (Camera) */}
              <div className="absolute bottom-0 left-1/4 -translate-x-1/2 translate-y-1/2 animate-orbit-4">
                <Camera className="w-9 h-9 text-[#20B2AA] drop-shadow-2xl hover:scale-125 transition-all duration-300 filter hover:drop-shadow-[0_0_15px_rgba(32,178,170,0.8)]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
              </div>

              {/* Icon 5 - Left (Video) */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 animate-orbit-5">
                <Video className="w-9 h-9 text-[#FFD700] drop-shadow-2xl hover:scale-125 transition-all duration-300 filter hover:drop-shadow-[0_0_15px_rgba(255,215,0,0.8)]" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.5))' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
