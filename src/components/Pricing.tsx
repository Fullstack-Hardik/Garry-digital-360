import { PricingComponent } from "@/components/ui/pricing";

const pricingPlans = [
  {
    name: "Basic Plan",
    originalPrice: "19999",
    discountedPrice: "14999",
    period: "Lifetime",
    features: [
      "Up to 10 high-resolution 360° panoramic scenes",
      "Basic navigation between scenes",
      "Website embed code (iframe)",
      "QR code / Link access for easy sharing",
      "Optimized for Google Maps & Google Business Profile",
      "360° photo soft copies (available at additional cost)",
      "Local Business Map Ranking Boost Helper",
      "Onsite 360° Shoot at Your Business Location",
      "Delivery: 3–5 Working Days",
    ],
    description: "Perfect for small shops, cafes & clinics",
    buttonText: "Book Now",
    href: "#contact",
    isPopular: false,
    badge: "Great Starter",
    savings: "Save ₹5,000",
  },
  {
    name: "Standard Plan",
    originalPrice: "24999",
    discountedPrice: "19999",
    period: "Lifetime",
    features: [
      "Up to 15 high-resolution 360° panoramic scenes",
      "Basic navigation between scenes",
      "Website embed code (iframe)",
      "QR code / Link access for easy sharing",
      "Optimized for Google Maps & Google Business Profile",
      "360° photo soft copies (at NO additional cost)",
      "Local Business Map Ranking Boost Helper",
      "Onsite 360° Shoot at Your Business Location",
      "Delivery: 5–7 Working Days",
    ],
    description: "Ideal for restaurants, salons & showrooms",
    buttonText: "Book Now",
    href: "#contact",
    isPopular: false,
    badge: "Best Value",
    savings: "Save ₹5,000",
  },
  {
    name: "Premium Plan",
    originalPrice: "29999",
    discountedPrice: "24999",
    period: "Lifetime",
    features: [
      "Up to 25 high-resolution 360° panoramic scenes",
      "Basic navigation between scenes",
      "Website embed code (iframe)",
      "QR code / Link access for easy sharing",
      "Optimized for Google Maps & Google Business Profile",
      "360° photo soft copies (at NO additional cost)",
      "Custom Branding",
      "Local Business Map Ranking Boost Helper",
      "Onsite 360° Shoot at Your Business Location",
      "Delivery: 7–10 Working Days",
    ],
    description: "For hotels, resorts & large businesses",
    buttonText: "Book Now",
    href: "#contact",
    isPopular: true,
    badge: "🔥 Most Chosen",
    savings: "Save ₹5,000",
  },
  {
    name: "Enterprise Plan",
    discountedPrice: "On Request",
    period: "Lifetime",
    features: [
      "Unlimited / Custom panoramic scenes",
      "Multi-floor, large-area & campus-level coverage",
      "Custom Branding",
      "Website embed code (iframe)",
      "Basic navigation between scenes",
      "QR code / Link access for easy sharing",
      "Custom Delivery Timeline (Project-Based)",
      "Onsite 360° Shoot at Your Business Location",
      "Optimized for Google Maps & Google Business Profile",
      "360° photo soft copies (at NO additional cost)",
      "Priority Onsite 360° Shoot",
      "Local Business Map Ranking Boost Helper",
    ],
    description: "For campuses, malls & multi-location businesses",
    buttonText: "Contact Us",
    href: "#contact",
    isPopular: false,
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

      <div className="relative z-10">
        <PricingComponent
          plans={pricingPlans}
          title="Choose a Professional 360° Virtual Tour Service Plan"
          description="For Your Local Business Growth — One-Time Investment, Lifetime Results"
        />
      </div>
    </section>
  );
};

export default Pricing;
