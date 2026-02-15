import { RevealText } from "@/components/ui/reveal-text";
import { Camera, Award, MapPin, Instagram, Linkedin, Mail } from "lucide-react";

const PhotographerSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with Reveal Text */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-semibold mb-6">
              Meet the Expert
            </span>
            <div className="mb-6">
              <RevealText 
                text="GARRY"
                textColor="text-foreground"
                overlayColor="text-primary"
                fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                letterDelay={0.06}
                overlayDelay={0.04}
                overlayDuration={0.35}
                springDuration={500}
                letterImages={[
                  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2070&q=80",
                  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2070&q=80",
                  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2070&q=80",
                  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2070&q=80",
                  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=2070&q=80",
                ]}
              />
            </div>
            <p className="text-xl text-primary font-semibold">Founder & Lead Photographer</p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden card-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1000&q=80"
                  alt="Professional Photographer with Camera"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Bio & Details */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Camera className="w-6 h-6 text-primary" />
                  About Me
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  With over 8 years of experience in professional photography and a specialization in 360° virtual tours, 
                  I've helped hundreds of businesses across India transform their online presence.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a Google Trusted Photographer, I bring technical expertise and creative vision to every project, 
                  ensuring your business stands out on Google Maps and attracts more customers.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="glass rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                  <Award className="w-8 h-8 text-primary mb-3" />
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Virtual Tours Created</div>
                </div>
                <div className="glass rounded-xl p-6 hover:bg-card/80 transition-all duration-300 hover:-translate-y-1">
                  <MapPin className="w-8 h-8 text-accent mb-3" />
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Cities Covered</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass rounded-2xl p-6">
                <h4 className="font-semibold mb-4">Connect with Me</h4>
                <div className="flex gap-4">
                  <a 
                    href="mailto:garrydigital360@gmail.com"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/garrydigital360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/garrydigital360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographerSection;
