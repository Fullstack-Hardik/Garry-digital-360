import { useState, useCallback } from "react";
import { Eye, Maximize, X, MapPin, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

// Tour data
const TOURS = [
  {
    id: 1,
    name: "Nagasver Mandir",
    location: "Haryana, India",
    embedUrl:
      "https://www.google.com/maps?q=&layer=c&cbll=29.0729732,77.7161184&cbp=12,359.89,0,0,0&output=svembed",
    mapsUrl:
      "https://www.google.com/maps/place/Nagasver+Mandir/@29.0729627,77.7161452,3a,75y,359.89h,90.11t/data=!3m8!1e1!3m6!1sCIABIhDxNsG-VCIUFUt6tV9OTsad!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2YtCwpglFCZJFLm9ncndGEILuEX4fbTxVh5DuqK85RK_AB12hllnrPPiKOuHP3ZoPxWxU9AIR7gnPNiImhB8iWcb6xj9crltv5phEorXeozERkUhqPsVuZFjYnIjl0TmYqD4t3rZTWqqkq3%3Dw900-h600-k-no-pi-0.10999999999999943-ya1.9499975585937932-ro0-fo100!7i8000!8i4000!4m7!3m6!1s0x390c6fb0c9096a41:0x9010ec1e1c0edec8!8m2!3d29.0729732!4d77.7161184!10e5!16s%2Fg%2F11gcjbldtn?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D",
    gradient: "from-amber-500/20 to-orange-500/20",
    accent: "text-amber-400",
  },
  {
    id: 2,
    name: "Supertech Modipuram",
    location: "Meerut, Uttar Pradesh",
    embedUrl:
      "https://www.google.com/maps?q=&layer=c&cbll=29.0729732,77.7161184&cbp=12,3.29,0,0,0&output=svembed",
    mapsUrl:
      "https://maps.app.goo.gl/7MYydPZ141WFX8VT6",
    gradient: "from-pink-500/20 to-rose-500/20",
    accent: "text-pink-400",
  },
  {
    id: 3,
    name: "The Yoga Institute",
    location: "Mumbai, Maharashtra",
    embedUrl:
      "https://www.google.com/maps?q=&layer=c&cbll=19.085246,72.8434061&cbp=12,37.49,0,0,0&output=svembed",
    mapsUrl:
      "https://www.google.com/maps/place/The+Yoga+Institute/@19.085246,72.8434061,2a,75y,37.49h,91.76t/data=!3m7!1e1!3m5!1sFZMM2cQaH9EAAARBY96OOQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-1.759834333013572%26panoid%3DFZMM2cQaH9EAAARBY96OOQ%26yaw%3D37.491148228386734!7i13312!8i6656!4m7!3m6!1s0x3be7c9a916aaaaab:0xb1b1dcb9c91cb9a!8m2!3d19.0850585!4d72.8434119!10e5!16s%2Fg%2F1ptxr83ld?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accent: "text-emerald-400",
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
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const VirtualTour = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const currentTour = TOURS[currentIndex];

  // Sync carousel API with currentIndex
  const onApiChange = useCallback(
    (api: CarouselApi) => {
      setCarouselApi(api);
      if (!api) return;
      api.on("select", () => {
        setCurrentIndex(api.selectedScrollSnap());
      });
    },
    [],
  );

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      carouselApi?.scrollTo(index);
    },
    [carouselApi],
  );

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    document.body.style.overflow = "";
  }, []);

  const openInNewTab = useCallback(() => {
    window.open(currentTour.mapsUrl, "_blank", "noopener,noreferrer");
  }, [currentTour]);

  return (
    <>
      <section id="virtual-tour" className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <AnimatedDiv className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Interactive Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
              Explore Our <span className="text-gradient">360° Virtual Tour</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Step inside and experience our work firsthand. Navigate through immersive 360° views
              directly on Google Maps.
            </p>
          </AnimatedDiv>

          {/* Main Carousel */}
          <AnimatedDiv delay={0.2} className="max-w-5xl mx-auto">
            <Carousel
              setApi={onApiChange}
              opts={{ loop: true, align: "center" }}
              className="w-full"
            >
              <CarouselContent>
                {TOURS.map((tour, index) => (
                  <CarouselItem key={tour.id}>
                    <div className="relative rounded-2xl overflow-hidden card-shadow glass border border-border/50">
                      {/* Gradient glow behind card */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${tour.gradient} rounded-2xl blur-xl opacity-40 -z-10 transition-opacity duration-500`}
                      />

                      {/* Embedded 360° iframe */}
                      <div className="relative aspect-[16/9] bg-card">
                        <iframe
                          src={tour.embedUrl}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading={index === 0 ? "eager" : "lazy"}
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`360° Virtual Tour - ${tour.name}`}
                        />
                        {/* Location badge */}
                        <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md pointer-events-none">
                          <MapPin className={`w-3.5 h-3.5 ${tour.accent}`} />
                          <span className="text-xs font-medium text-white">{tour.name}</span>
                        </div>
                        {/* Slide counter */}
                        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md pointer-events-none">
                          <span className="text-xs font-medium text-white/80">
                            {index + 1} / {TOURS.length}
                          </span>
                        </div>
                      </div>

                      {/* Controls Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 bg-card/80 backdrop-blur-sm border-t border-border/50">
                        <div className="flex flex-col gap-0.5">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-foreground">{tour.name}</span>
                          </div>
                          <span className="text-xs text-muted-foreground ml-6">{tour.location}</span>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={openFullscreen}
                            className="gap-2"
                          >
                            <Maximize className="w-4 h-4" />
                            <span className="hidden sm:inline">Fullscreen</span>
                          </Button>
                          <Button
                            variant="hero"
                            size="sm"
                            onClick={openInNewTab}
                            className="gap-2"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="hidden sm:inline">Open in Google Maps</span>
                            <span className="sm:hidden">Maps</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              {/* Prev Button */}
              <button
                onClick={() => carouselApi?.scrollPrev()}
                className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Previous tour"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>

              {/* Thumbnail Cards */}
              <div className="flex gap-3">
                {TOURS.map((tour, index) => (
                  <button
                    key={tour.id}
                    onClick={() => goToSlide(index)}
                    className={`relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 cursor-pointer group ${
                      currentIndex === index
                        ? "bg-primary/10 border-primary/50 shadow-lg shadow-primary/10"
                        : "bg-card/60 border-border/50 hover:bg-card/80 hover:border-border"
                    }`}
                  >
                    {/* Active indicator dot */}
                    <div
                      className={`w-2 h-2 rounded-full transition-all duration-300 shrink-0 ${
                        currentIndex === index
                          ? "bg-primary shadow-sm shadow-primary/50"
                          : "bg-muted-foreground/30 group-hover:bg-muted-foreground/50"
                      }`}
                    />
                    <div className="flex flex-col items-start">
                      <span
                        className={`text-xs font-semibold transition-colors whitespace-nowrap ${
                          currentIndex === index ? "text-primary" : "text-foreground/70"
                        }`}
                      >
                        {tour.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground hidden sm:block whitespace-nowrap">
                        {tour.location}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => carouselApi?.scrollNext()}
                className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Next tour"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>

            {/* Dot Indicators (mobile-friendly) */}
            <div className="flex justify-center gap-2 mt-4 sm:hidden">
              {TOURS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to tour ${index + 1}`}
                />
              ))}
            </div>
          </AnimatedDiv>
        </div>
      </section>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col"
          >
            {/* Fullscreen Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm border-b border-border/50">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <div>
                  <span className="font-semibold text-foreground">{currentTour.name}</span>
                  <span className="text-xs text-muted-foreground ml-2">{currentTour.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={openInNewTab} className="gap-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="hidden sm:inline">Open in Maps</span>
                </Button>
                <Button variant="ghost" size="sm" onClick={closeFullscreen} className="gap-2">
                  <X className="w-4 h-4" />
                  <span className="hidden sm:inline">Close</span>
                </Button>
              </div>
            </div>

            {/* Fullscreen Content */}
            <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl"
              >
                <iframe
                  src={currentTour.embedUrl}
                  className="w-full h-full min-h-[500px] sm:min-h-[600px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`360° Virtual Tour - ${currentTour.name} (Fullscreen)`}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VirtualTour;
