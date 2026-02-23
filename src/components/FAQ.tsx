import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    question: "How does a 360 virtual tour increase Google Maps ranking?",
    answer:
      "A 360 virtual tour increases engagement on your Google Business Profile. Higher engagement signals — like longer viewing time and more interactions — tell Google your listing is valuable. Businesses see up to 35–50% increase in Google Maps engagement within 60 days of publishing a virtual tour.",
  },
  {
    question: "What is a Google Street View Trusted Photographer?",
    answer:
      "A Google Street View Trusted Photographer is a certified professional authorized by Google to capture and publish 360° imagery directly to Google Maps and Street View. GarryDigital360 is a verified Google Trusted Photographer, ensuring your virtual tour meets Google's quality standards and appears on Google Maps.",
  },
  {
    question: "Which businesses benefit most from 360 virtual tours?",
    answer:
      "Hotels, restaurants, showrooms, schools, clinics, salons, resorts, co-working spaces, and retail stores benefit the most. Any business with a physical space that customers visit can gain a significant competitive advantage. Virtual tours help customers make informed decisions before visiting.",
  },
  {
    question: "How long does it take to create a 360 virtual tour?",
    answer:
      "Depending on the plan, delivery takes 3–10 working days. Basic plans with up to 10 scenes are delivered in 3–5 days. Standard and Premium plans take 5–10 days. Enterprise projects follow a custom timeline based on the scope of work.",
  },
  {
    question: "How much does a 360 virtual tour cost?",
    answer:
      "Plans start from ₹14,999 for up to 10 panoramic scenes (Basic Plan). The Standard Plan is ₹19,999 for 15 scenes, and the Premium Plan is ₹24,999 for 25 scenes with custom branding. Enterprise pricing is available on request for large-scale or multi-location projects.",
  },
  {
    question: "Can I embed the virtual tour on my website?",
    answer:
      "Yes! Every plan includes a website embed code (iframe) and a shareable QR code/link. You can embed the tour on your website, share it on social media, or send it to customers via WhatsApp — all without any additional cost.",
  },
  {
    question: "Do you provide 360° photo soft copies?",
    answer:
      "Yes. Standard and Premium plans include all 360° photo soft copies at no additional cost. For the Basic plan, soft copies are available at a small additional charge. You can use these soft copies for social media, marketing materials, or your own website.",
  },
  {
    question: "Do you cover cities outside Delhi?",
    answer:
      "Absolutely! GarryDigital360 has covered 50+ cities across India. We travel to your business location for the onsite 360° shoot, no matter where you are. Travel charges may apply for locations outside the NCR region.",
  },
  {
    question: "Will the virtual tour work on mobile devices?",
    answer:
      "Yes, all our virtual tours are fully responsive and work seamlessly on desktops, tablets, and mobile phones. They are also compatible with Google Maps on all devices, giving your customers the best experience wherever they browse.",
  },
  {
    question: "How do I get started with a 360 virtual tour?",
    answer:
      "Getting started is simple! Contact us through our website form, call us, or send us a WhatsApp message. We'll discuss your requirements, schedule an onsite shoot at your convenience, and deliver a stunning virtual tour within days.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:bg-card/60">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-medium text-foreground pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-muted-foreground leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <AnimatedDiv className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our 360° virtual tour services,
            pricing, and how it benefits your business.
          </p>
        </AnimatedDiv>

        {/* FAQ List */}
        <AnimatedDiv delay={0.2} className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </AnimatedDiv>
      </div>
    </section>
  );
};

export default FAQ;
