import { motion } from "framer-motion";
import { Camera, MapPin, Share2, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "On-site 360° Shoot",
    description: "Our experts visit your location with high-end 360° gear to capture every angle with precision and clarity.",
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20"
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Google Maps Setup",
    description: "We optimize your Google Business Profile and integrate the virtual tour directly onto Google Maps and Street View.",
    color: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20"
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Website Integration",
    description: "Get a custom iframe and QR code to easily embed the 360° tour on your own website and marketing materials.",
    color: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Boost Visibility",
    description: "Watch your engagement grow as customers experience your space virtually, leading to more visits and trust.",
    color: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-premium text-primary text-sm font-semibold mb-4 tracking-wider uppercase"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-6"
          >
            Your Journey to <span className="text-gradient">Immersive Presence</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            We handle the entire process from capture to publication, ensuring your business stands out on the world's largest map platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border/50 to-transparent -translate-y-12 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative z-10 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl ${step.shadow}`}>
                  {step.icon}
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full glass-premium flex items-center justify-center font-bold text-primary border border-primary/20 shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
