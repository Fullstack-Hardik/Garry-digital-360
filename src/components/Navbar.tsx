import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", href: "/#hero", id: "hero" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Portfolio", href: "/#portfolio", id: "portfolio" },
    { name: "Pricing", href: "/#pricing", id: "pricing" },
    { name: "Blog", href: "/blog", id: "blog" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  // Handle scroll for sticky effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.includes("#")) {
      setIsOpen(false);
      return; // It's a standard route, let <Link> handle it
    }
    
    const targetId = href.split("#")[1];
    
    if (location.pathname !== "/") {
      setIsOpen(false);
      return; // Let <Link> handle cross-page navigation to the hash
    }

    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 px-4" : "py-6 px-0"}`}>
      <div className={`container mx-auto px-4 sm:px-6 transition-all duration-500 ${isScrolled ? "glass-premium rounded-3xl py-2 shadow-2xl max-w-6xl border border-white/10" : "bg-transparent py-2 border-none"}`}>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
              <img 
                src={logo} 
                alt="Garry Digital 360" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl relative group-hover:scale-110 transition-transform duration-500 shadow-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tighter text-foreground leading-tight">
                GARRY DIGITAL <span className="text-primary">360</span>
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                Immersive Visuals
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-4 py-2 text-sm font-bold transition-all duration-300 relative group rounded-full ${
                  (activeSection === link.id || location.pathname === link.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
                {(activeSection === link.id || location.pathname === link.href) && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full transition-all duration-300 ${(activeSection === link.id || location.pathname === link.href) ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-white/10">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
                <Button variant="hero" size="sm" className="rounded-full px-6 h-10 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Book a Tour
                </Button>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-2xl glass-premium border border-white/10 hover:bg-white/10 transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X className="w-6 h-6 text-primary" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu className="w-6 h-6 text-foreground" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-4 right-4 mt-4 glass-premium rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden z-50 p-3"
            >
              <div className="p-4 flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                        (activeSection === link.id || location.pathname === link.href)
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                      }`}
                      onClick={(e) => scrollToSection(e, link.href)}
                    >
                      <span className="text-lg font-bold">{link.name}</span>
                      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${(activeSection === link.id || location.pathname === link.href) ? "rotate-90 text-primary" : "text-muted-foreground/30"}`} />
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 p-4 border-t border-white/5">
                  <Button 
                    variant="hero" 
                    className="w-full rounded-2xl py-6 text-lg font-bold shadow-xl shadow-primary/20"
                    onClick={() => {
                      const elem = document.getElementById("contact");
                      if (elem) window.scrollTo({ top: elem.offsetTop - 80, behavior: "smooth" });
                      setIsOpen(false);
                    }}
                  >
                    Get Started Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

