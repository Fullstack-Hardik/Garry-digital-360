import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img 
                src={logo} 
                alt="Garry Digital 360" 
                className="w-12 h-12 rounded-xl"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight">Garry Digital</span>
                <span className="text-xs text-primary font-semibold tracking-widest">360°</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm mb-4">
              Transforming businesses with immersive 360° virtual tours. Google Trusted Photography partner serving clients across India.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/garrydigital360"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {[Facebook, Linkedin, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Services", "Pricing", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Hotels & Resorts", "Restaurants", "Schools", "Dental Clinics", "Salons"].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Garry Digital 360. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
