import { Play, Video } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const GuidanceVideo = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-accent text-sm font-semibold mb-6">
            <Play className="w-4 h-4" />
            Watch & Learn
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why <span className="text-gradient">360° Virtual Tours</span> Matter
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how immersive virtual experiences are transforming business
            visibility, customer trust, and Google Maps engagement.
          </p>
        </AnimatedDiv>

        {/* Video Embed */}
        <AnimatedDiv delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden card-shadow glass border border-border/50">
            {/* Gradient border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-lg opacity-50 -z-10" />

            <div className="relative aspect-video bg-card">
              <video
                src="/guide.mp4"
                title="Why 360 Virtual Tour is Important for Your Business"
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>

            {/* Info bar */}
            <div className="p-4 sm:p-5 bg-card/80 backdrop-blur-sm border-t border-border/50">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Why 360° Virtual Tour is Important for Your Business
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                🎬 Watch our guide to understand the power of immersive 360° tours
              </p>
            </div>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default GuidanceVideo;
