import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Services", href: "/#services" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
  ];

  // Handle scroll for sticky effect
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "mt-4 px-4" : "mt-0 px-0"}`}>
      <div className={`container mx-auto px-4 sm:px-6 transition-all duration-500 ${isScrolled ? "glass-premium rounded-full py-2 shadow-lg max-w-6xl" : "glass py-4 border-none"}`}>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo with updated design */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500" />
              <img 
                src={logo} 
                alt="Garry Digital 360" 
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl relative group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight text-foreground leading-tight">
                GARRY DIGITAL <span className="text-primary">360</span>
              </span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                Immersive Visuals
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link to="/#contact">
              <Button variant="hero" size="sm" className="rounded-full px-6 h-10 shadow-lg shadow-primary/20">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-6 flex flex-col gap-4 border-t border-white/10 mt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold text-muted-foreground hover:text-primary transition-colors duration-300 py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="hero" className="mt-4 rounded-full w-full">
                  Get Started
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
