import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Users, Target, ShieldCheck } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Pioneering <span className="text-gradient">Digital Immersion</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            Garry Digital 360 is a leading digital solutions agency specializing in immersive 360° virtual tours, 
            premium website development, and high-impact SEO strategies.
          </motion.p>
        </section>

        {/* Vision & Mission */}
        <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12">
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Target className="text-primary" /> Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              To redefine how businesses interact with their customers in the digital space by providing 
              seamless, immersive, and high-quality virtual experiences that bridge the gap between 
              the physical and digital worlds.
            </p>
          </motion.div>
          
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="glass p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <ShieldCheck className="text-accent" /> Our Mission
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to empower businesses with cutting-edge technology, from stunning 360° tours 
              to robust web platforms, ensuring they stand out in an increasingly competitive digital landscape.
            </p>
          </motion.div>
        </section>

        {/* Stats */}
        <section className="bg-secondary/30 py-20">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: "500+", icon: Award },
              { label: "Happy Clients", value: "300+", icon: Users },
              { label: "Cities Covered", value: "50+", icon: Target },
              { label: "Years Experience", value: "5+", icon: ShieldCheck },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
