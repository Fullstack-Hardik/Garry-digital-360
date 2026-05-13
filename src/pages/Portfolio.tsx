import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ExternalLink, Camera, Laptop, Globe } from "lucide-react";

const portfolioItems = [
  {
    title: "Luxury Hotel 360°",
    category: "Virtual Tour",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
    icon: Camera,
  },
  {
    title: "Corporate Website",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    icon: Laptop,
  },
  {
    title: "Local SEO Success",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=800",
    icon: Globe,
  },
  {
    title: "Modern Restaurant Tour",
    category: "Virtual Tour",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    icon: Camera,
  },
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    icon: Laptop,
  },
  {
    title: "Real Estate Portal",
    category: "SEO & Web",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    icon: Globe,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our <span className="text-gradient">Portfolio</span>
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16">
            A showcase of our best work in immersive tours, web development, and digital marketing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-3xl overflow-hidden glass hover:elevated-shadow transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-6 text-left transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary-foreground/80">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <button className="flex items-center gap-2 text-sm font-semibold text-white/70 group-hover:text-primary transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 py-20">
          <div className="glass p-12 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's create something amazing together. Whether it's a 360° tour, a new website, or SEO optimization, we've got you covered.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-primary text-black font-bold text-lg hover:scale-105 transition-transform"
            >
              Contact Us Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
