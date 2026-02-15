import { PricingComponent } from "@/components/ui/pricing";

const pricingPlans = [
  {
    name: "Basic Package",
    price: "15000",
    yearlyPrice: "12000",
    period: "per project",
    features: [
      "Up to 10 photo spheres",
      "Google Maps integration",
      "Basic editing",
      "1 week delivery",
      "Email support",
    ],
    description: "Perfect for small businesses and cafes",
    buttonText: "Get Started",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "Professional Package",
    price: "35000",
    yearlyPrice: "28000",
    period: "per project",
    features: [
      "Up to 30 photo spheres",
      "Google Maps integration",
      "Advanced HDR editing",
      "Drone exterior shots",
      "3-5 day delivery",
      "Priority support",
      "Social media assets",
      "Free revisions",
    ],
    description: "Ideal for hotels, resorts & larger spaces",
    buttonText: "Get Started",
    href: "#contact",
    isPopular: true,
  },
  {
    name: "Enterprise Package",
    price: "Custom",
    yearlyPrice: "Custom",
    period: "per project",
    features: [
      "Unlimited photo spheres",
      "Multi-location support",
      "Premium editing suite",
      "Aerial cinematography",
      "Rush delivery available",
      "Dedicated account manager",
      "Custom branding",
      "Ongoing maintenance",
    ],
    description: "For large organizations & custom needs",
    buttonText: "Contact Sales",
    href: "#contact",
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <PricingComponent 
          plans={pricingPlans}
          title="Simple, Transparent Pricing"
          description="Choose the plan that works for you. All plans include Google Maps integration and professional editing."
        />
      </div>
    </section>
  );
};

export default Pricing;
