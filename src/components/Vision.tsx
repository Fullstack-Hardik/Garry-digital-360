import { Eye, TrendingUp, Globe, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const visionPoints = [
  {
    icon: Eye,
    title: "Immersive Experience Matters",
    description:
      "Customers today expect more than static images. A 360° virtual tour lets them step inside your business from anywhere in the world, building trust and confidence before they even visit in person.",
    color: "text-[#FFD700]",
    bgColor: "bg-[#FFD700]/10",
  },
  {
    icon: TrendingUp,
    title: "Google Prioritizes Engagement",
    description:
      "Google's algorithm rewards businesses with higher engagement signals. Virtual tours increase time spent on your listing, reduce bounce rates, and signal to Google that your business is relevant and trustworthy.",
    color: "text-[#FF8C00]",
    bgColor: "bg-[#FF8C00]/10",
  },
  {
    icon: Globe,
    title: "The Future Is Visual Search",
    description:
      "With the rise of AI-powered search and visual discovery, businesses with rich visual content — including 360° tours — are positioned to dominate local search results and AI-generated answer boxes.",
    color: "text-[#00CED1]",
    bgColor: "bg-[#00CED1]/10",
  },
];

function AnimatedDiv({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div className={className}>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const Vision = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Our Vision
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Transforming Local Businesses with{" "}
            <span className="text-gradient">360° Technology</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We believe every business deserves to be seen in its full glory.
            Our mission is to bridge the gap between physical spaces and digital
            discovery through immersive visual experiences.
          </p>
        </AnimatedDiv>

        {/* Vision Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visionPoints.map((point, index) => (
            <AnimatedDiv
              key={point.title}
              delay={0.15 * (index + 1)}
              className="glass rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div
                className={`w-14 h-14 rounded-xl ${point.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <point.icon className={`w-7 h-7 ${point.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </AnimatedDiv>
          ))}
        </div>

        {/* Bottom stat highlight */}
        <AnimatedDiv delay={0.6} className="text-center mt-16">
          <div className="inline-block glass rounded-2xl px-8 py-6">
            <p className="text-lg text-muted-foreground">
              Businesses using 360° virtual tours see up to{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                35–50%
              </span>{" "}
              increase in Google Maps engagement within{" "}
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#00CED1] bg-clip-text text-transparent">
                60 days
              </span>
            </p>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default Vision;
