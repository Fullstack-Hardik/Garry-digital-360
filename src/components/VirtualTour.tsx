import { useState, useCallback } from "react";
import { Eye, Maximize, X, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Original link for "Open in Google Maps" button
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Nagasver+Mandir/@29.0729627,77.7161452,3a,75y,359.89h,90.11t/data=!3m8!1e1!3m6!1sCIABIhDxNsG-VCIUFUt6tV9OTsad!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAFfmt2YtCwpglFCZJFLm9ncndGEILuEX4fbTxVh5DuqK85RK_AB12hllnrPPiKOuHP3ZoPxWxU9AIR7gnPNiImhB8iWcb6xj9crltv5phEorXeozERkUhqPsVuZFjYnIjl0TmYqD4t3rZTWqqkq3%3Dw900-h600-k-no-pi-0.10999999999999943-ya1.9499975585937932-ro0-fo100!7i8000!8i4000!4m7!3m6!1s0x390c6fb0c9096a41:0x9010ec1e1c0edec8!8m2!3d29.0729732!4d77.7161184!10e5!16s%2Fg%2F11gcjbldtn?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D";

// Embed URL for iframe - Street View format with 360° panorama
// Coordinates: 29.0729732, 77.7161184 (Nagasver Mandir)
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps?q=&layer=c&cbll=29.0729732,77.7161184&cbp=12,359.89,0,0,0&output=svembed";


const VirtualTour = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = useCallback(() => {
    setIsFullscreen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const closeFullscreen = useCallback(() => {
    setIsFullscreen(false);
    document.body.style.overflow = "";
  }, []);

  const openInNewTab = useCallback(() => {
    window.open(GOOGLE_MAPS_URL, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <>
      <section id="virtual-tour" className="relative py-20 sm:py-28 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-slide-up">
              <Eye className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Interactive Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Explore Our <span className="text-gradient">360° Virtual Tour</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Step inside and experience our work firsthand. Navigate through immersive 360° views directly on Google Maps.
            </p>
          </div>

          {/* Tour Preview Card */}
          <div className="max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden card-shadow glass border border-border/50">
              {/* Embedded 360° iframe */}
              <div className="relative aspect-[16/9] bg-card">
                <iframe
                  src={GOOGLE_MAPS_EMBED_URL}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="360° Virtual Tour - Nagasver Mandir"
                />
                {/* Location badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm pointer-events-none">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-medium text-white">Nagasver Mandir</span>
                </div>
              </div>

              {/* Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 sm:p-5 bg-card/80 backdrop-blur-sm border-t border-border/50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Live 360° View</span>
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
                    <span className="sm:hidden">Google Maps</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal - opens Google Maps directly */}
      {isFullscreen && (
        <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex flex-col">
          {/* Fullscreen Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-card/80 backdrop-blur-sm border-b border-border/50">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">360° Virtual Tour</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={openInNewTab}
                className="gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="hidden sm:inline">Open in Maps</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeFullscreen}
                className="gap-2"
              >
                <X className="w-4 h-4" />
                <span className="hidden sm:inline">Close</span>
              </Button>
            </div>
          </div>

          {/* Fullscreen Content */}
          <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8">
            <div className="relative w-full h-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                className="w-full h-full min-h-[500px] sm:min-h-[600px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="360° Virtual Tour - Nagasver Mandir (Fullscreen)"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VirtualTour;
