import { PricingComponent } from "@/components/ui/pricing";

const virtualTourPlans = [
  {
    name: "Basic 360°",
    originalPrice: "19999",
    discountedPrice: "14999",
    period: "Lifetime",
    features: [
      "Up to 10 panoramic scenes",
      "Basic navigation",
      "Website embed code",
      "Google Maps Optimized",
      "Onsite 360° Shoot",
      "Delivery: 3–5 Days",
    ],
    description: "Perfect for small shops & cafes",
    buttonText: "Book Now",
    href: "#contact",
    isPopular: false,
    badge: "Great Starter",
    savings: "Save ₹5,000",
  },
  {
    name: "Standard 360°",
    originalPrice: "24999",
    discountedPrice: "19999",
    period: "Lifetime",
    features: [
      "Up to 15 panoramic scenes",
      "Basic navigation",
      "Website embed code",
      "Google Maps Optimized",
      "360° photo soft copies",
      "Delivery: 5–7 Days",
    ],
    description: "Ideal for restaurants & salons",
    buttonText: "Book Now",
    href: "#contact",
    isPopular: false,
    badge: "Best Value",
    savings: "Save ₹5,000",
  },
  {
    name: "Premium 360°",
    originalPrice: "29999",
    discountedPrice: "24999",
    period: "Lifetime",
    features: [
      "Up to 25 panoramic scenes",
      "Basic navigation",
      "Website embed code",
      "Google Maps Optimized",
      "Custom Branding",
      "Delivery: 7–10 Days",
    ],
    description: "For hotels & large businesses",
    buttonText: "Book Now",
    href: "#contact",
    isPopular: true,
    badge: "🔥 Most Chosen",
    savings: "Save ₹5,000",
  },
  {
    name: "Enterprise",
    discountedPrice: "On Request",
    period: "Lifetime",
    features: [
      "Unlimited panoramic scenes",
      "Multi-floor coverage",
      "Custom Branding",
      "Website embed code",
      "Priority Onsite Shoot",
      "Project-Based Timeline",
    ],
    description: "For campuses & malls",
    buttonText: "Contact Us",
    href: "#contact",
    isPopular: false,
  },
];

const digitalServicesPlans = [
  {
    name: "SEO Services",
    originalPrice: "9999",
    discountedPrice: "7000",
    period: "Per Project",
    features: [
      "Google Maps Optimization",
      "Keyword Research",
      "Local SEO Setup",
      "Business Profile Tuning",
      "Search Visibility Boost",
      "Monthly Report",
    ],
    description: "Boost your local search ranking",
    buttonText: "Get Started",
    href: "#contact",
    isPopular: false,
    badge: "Most Affordable",
    savings: "Save ₹2,999",
  },
  {
    name: "Static Website",
    originalPrice: "19999",
    discountedPrice: "15000",
    period: "Per Project",
    features: [
      "Modern Single Page Design",
      "Fully Responsive (Mobile)",
      "Contact Form Integration",
      "Speed Optimized",
      "Basic SEO Included",
      "1 Year Maintenance",
    ],
    description: "Perfect for a professional online presence",
    buttonText: "Build Now",
    href: "#contact",
    isPopular: true,
    badge: "Popular Choice",
    savings: "Save ₹4,999",
  },
  {
    name: "Custom Website",
    discountedPrice: "15000",
    period: "Starting From",
    features: [
      "Multi-page Dynamic Website",
      "Custom Features & Logic",
      "CMS Integration",
      "Advanced SEO Setup",
      "E-commerce Options",
      "Requirement Based Analysis",
    ],
    description: "Tailored to your specific business needs",
    buttonText: "Analyze Requirements",
    href: "#contact",
    isPopular: false,
    badge: "Tailor Made",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 space-y-20">
        <PricingComponent
          plans={virtualTourPlans}
          title="360° Virtual Tour Plans"
          description="Transform your physical space into a digital experience."
        />
        
        <PricingComponent
          plans={digitalServicesPlans}
          title="Website & SEO Services"
          description="Elevate your digital presence with professional web development and search optimization."
        />
      </div>
    </section>
  );
};

export default Pricing;
