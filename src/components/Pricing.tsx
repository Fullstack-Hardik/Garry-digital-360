import { Check, Star, Sparkles, Hotel, UtensilsCrossed, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    name: "Restaurant Package",
    price: "8K",
    priceMax: "15K",
    description: "Perfect for restaurants, cafes, and small eateries",
    features: [
      "Full 360° Virtual Tour",
      "Google Maps Integration",
      "Up to 15 Photo Spheres",
      "Professional Editing",
      "1 Week Delivery",
      "1 Year Support",
    ],
    popular: false,
    Icon: UtensilsCrossed,
  },
  {
    name: "Hotel Package",
    price: "35K",
    priceMax: null,
    description: "Comprehensive solution for hotels, resorts & Airbnb",
    features: [
      "Complete Property Tour",
      "Google Maps Integration",
      "Unlimited Photo Spheres",
      "Premium HDR Editing",
      "Drone Exterior Shots",
      "Priority 5-Day Delivery",
      "2 Years Support",
      "Social Media Assets",
    ],
    popular: true,
    Icon: Hotel,
  },
  {
    name: "Custom Package",
    price: "Custom",
    priceMax: null,
    description: "For schools, colleges, clinics & large spaces",
    features: [
      "Tailored to Your Needs",
      "Google Maps Integration",
      "Flexible Photo Spheres",
      "Professional Editing",
      "Custom Timeline",
      "Extended Support",
      "Training Session",
    ],
    popular: false,
    Icon: Building2,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-accent text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 inline mr-2" />
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, <span className="text-gradient-accent">Affordable</span> Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that fits your business. No hidden fees, just professional 360° virtual tours.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-gradient-card border-2 border-primary/50 elevated-shadow"
                  : "glass"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-bold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center ${
                plan.popular ? "bg-gradient-primary" : "bg-primary/20"
              }`}>
                <plan.Icon className={`w-8 h-8 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-muted-foreground">₹</span>
                  <span className={`text-4xl font-extrabold ${plan.popular ? "text-gradient" : ""}`}>
                    {plan.price}
                  </span>
                  {plan.priceMax && (
                    <>
                      <span className="text-muted-foreground mx-1">-</span>
                      <span className="text-2xl font-bold text-muted-foreground">{plan.priceMax}</span>
                    </>
                  )}
                </div>
                {plan.price !== "Custom" && (
                  <span className="text-sm text-muted-foreground">one-time payment</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? "bg-primary" : "bg-primary/20"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
