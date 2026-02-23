"use client";

import { buttonVariants } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star, Zap, Crown, Clock, Gift, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import confetti from "canvas-confetti";

interface PricingPlan {
  name: string;
  originalPrice?: string;
  discountedPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  badge?: string;
  savings?: string;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

function formatINR(value: string): string {
  const num = parseInt(value, 10);
  if (isNaN(num)) return value;
  return num.toLocaleString("en-IN");
}

export function PricingComponent({
  plans,
  title = "Choose a Professional 360° Virtual Tour Service Plan",
  description = "For Your Local Business Growth",
}: PricingProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleBookNowClick = (index: number) => {
    const el = buttonRefs.current[index];
    if (el) {
      const rect = el.getBoundingClientRect();
      confetti({
        particleCount: 80,
        spread: 70,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: [
          "#f59e0b",
          "#10b981",
          "#6366f1",
          "#ec4899",
          "#f97316",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle", "square"],
      });
    }
  };

  return (
    <div className="container py-12 md:py-20">
      {/* Header */}
      <div className="text-center space-y-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mx-auto"
        >
          <Clock className="h-4 w-4 animate-pulse" />
          Limited Time Offer — Launch Pricing!
          <Sparkles className="h-4 w-4" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      {/* Trust badges */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center gap-4 mb-10 text-xs text-muted-foreground"
      >
        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <Check className="h-3.5 w-3.5 text-emerald-400" /> One-Time Payment
        </span>
        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <Check className="h-3.5 w-3.5 text-emerald-400" /> Lifetime Access
        </span>
        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <Check className="h-3.5 w-3.5 text-emerald-400" /> No Hidden Charges
        </span>
        <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
          <Check className="h-3.5 w-3.5 text-emerald-400" /> Google Maps Optimized
        </span>
      </motion.div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className={cn(
              "relative rounded-2xl p-[1px] flex flex-col h-full",
              plan.isPopular
                ? "bg-gradient-to-b from-amber-400 via-orange-500 to-rose-500"
                : "bg-border/50"
            )}
          >
            {/* Popular ribbon */}
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-md opacity-60 animate-pulse" />
                  <div className="relative bg-gradient-to-r from-amber-400 to-orange-500 text-black px-5 py-1.5 rounded-full flex items-center gap-1.5 font-bold text-sm shadow-lg shadow-orange-500/30">
                    <Crown className="h-4 w-4" />
                    Most Popular
                    <Star className="h-3.5 w-3.5 fill-current" />
                  </div>
                </div>
              </div>
            )}

            <div
              className={cn(
                "rounded-[15px] bg-background flex flex-col h-full p-6",
                plan.isPopular && "pt-8"
              )}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <Gift className="h-3 w-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{plan.description}</p>

              {/* Price block */}
              <div className="mt-5 mb-1">
                {plan.originalPrice && (
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg text-muted-foreground/60 line-through decoration-red-500/70 decoration-2">
                      ₹{formatINR(plan.originalPrice)}
                    </span>
                    {plan.savings && (
                      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 animate-pulse">
                        {plan.savings}
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-baseline gap-1">
                  {plan.discountedPrice !== "On Request" ? (
                    <>
                      <span className="text-sm text-muted-foreground">₹</span>
                      <span className={cn(
                        "text-4xl font-extrabold tracking-tight",
                        plan.isPopular
                          ? "bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"
                          : "text-foreground"
                      )}>
                        {formatINR(plan.discountedPrice)}
                      </span>
                      <span className="text-sm text-muted-foreground">/-</span>
                    </>
                  ) : (
                    <span className="text-3xl font-extrabold tracking-tight text-foreground">
                      On Request
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
                    <Zap className="h-3 w-3" />
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-4 border-border/50" />

              {/* Features */}
              <ul className="flex-1 space-y-2.5 mb-6">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.04 }}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <div className={cn(
                      "mt-0.5 flex-shrink-0 h-4.5 w-4.5 rounded-full flex items-center justify-center",
                      plan.isPopular
                        ? "bg-amber-500/20 text-amber-400"
                        : "bg-primary/20 text-primary"
                    )}>
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-muted-foreground leading-tight">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                ref={(el) => { buttonRefs.current[index] = el; }}
                href={plan.href}
                onClick={() => plan.isPopular && handleBookNowClick(index)}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "group relative w-full gap-2 overflow-hidden text-base font-bold tracking-tight transition-all duration-300",
                  plan.isPopular
                    ? "bg-gradient-to-r from-amber-500 to-orange-500 text-black border-0 hover:from-amber-400 hover:to-orange-400 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02]"
                    : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                )}
              >
                {plan.buttonText}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom trust section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center space-y-3"
      >
        <p className="text-sm text-muted-foreground">
          💡 All plans include <strong className="text-foreground">Onsite 360° Shoot</strong> at your business location
        </p>
        <p className="text-xs text-muted-foreground/70">
          Prices are inclusive of all taxes. No recurring charges. One-time investment for lifetime virtual tour access.
        </p>
      </motion.div>
    </div>
  );
}
