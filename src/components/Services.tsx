'use client';
import { Camera, Sparkles, Laptop, Zap, Globe, Shield } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const services = [
  {
    title: '360° Photography',
    icon: Camera,
    description: 'Professional panoramic photography with state-of-the-art equipment for stunning virtual tours.',
  },
  {
    title: 'Google Maps Integration',
    icon: Globe,
    description: 'Seamless integration with Google Maps & Google Street View for maximum visibility.',
  },
  {
    title: 'HDR Editing',
    icon: Sparkles,
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
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedContainer className="mx-auto max-w-3xl text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need for <span className="text-gradient">Virtual Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional 360° virtual tour services powered by cutting-edge technology and creative expertise.
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
