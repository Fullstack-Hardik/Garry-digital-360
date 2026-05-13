'use client';
import { Camera, Sparkles, Laptop, Zap, Globe, Shield, Search, Palette, Monitor, Map, Aperture, TrendingUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const services = [
  {
    title: '360° Virtual Tours',
    icon: Camera,
    description: 'Premium panoramic photography and virtual tour creation for businesses of all sizes.',
  },
  {
    title: 'Website Development',
    icon: Monitor,
    description: 'Custom static and dynamic websites tailored to your brand, optimized for performance.',
  },
  {
    title: 'SEO Optimization',
    icon: TrendingUp,
    description: 'Boost your online visibility and rank higher on Google search results with our SEO services.',
  },
  {
    title: 'Template Designing',
    icon: Palette,
    description: 'Professional template designs that match your brand identity and engage your audience.',
  },
  {
    title: 'Google Maps Integration',
    icon: Map,
    description: 'Seamless integration with Google Maps & Google Street View for maximum visibility.',
  },
  {
    title: 'HDR Editing',
    icon: Aperture,
    description: 'Advanced HDR editing to showcase your space in the best possible light.',
  },
  {
    title: 'Fast Delivery',
    icon: Zap,
    description: 'Quick turnaround times without compromising on quality. Get your tours in 3-7 days.',
  },
  {
    title: 'Virtual Tour Platform',
    icon: Laptop,
    description: 'Easy-to-use virtual tour platform embedded on your website and social media.',
  },
  {
    title: 'Ongoing Support',
    icon: Shield,
    description: 'Dedicated support team to help you make the most of your virtual tours.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-36 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full glass-premium text-primary text-sm font-semibold mb-6 tracking-wider uppercase">
            Expert Solutions
          </span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">
            Elevate Your <span className="text-gradient">Digital Vision</span>
          </h2>
          <p className="text-muted-foreground text-xl leading-relaxed">
            From immersive 360° experiences to high-performance web development, we provide the tools to make your business truly stand out.
          </p>
        </AnimatedContainer>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="glass-premium p-8 rounded-3xl group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary/30">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center text-primary font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                Learn more <Sparkles className="ml-2 w-4 h-4 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

type ViewAnimationProps = {
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Services;
