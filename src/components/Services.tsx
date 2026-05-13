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

        <AnimatedContainer
          delay={0.4}
          className="grid grid-cols-1 divide-x divide-y divide-dashed border border-dashed rounded-2xl overflow-hidden sm:grid-cols-2 md:grid-cols-3"
        >
          {services.map((service, i) => (
            <FeatureCard key={i} feature={service} />
          ))}
        </AnimatedContainer>
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
