import { Landmark, Soup, GraduationCap, HeartPulse, Sparkles, Castle, Building2, TreePine } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Hotels & Resorts",
    description: "Showcase your luxury accommodations with immersive 360° tours that let guests explore before they book.",
    color: "from-primary to-primary/60",
  },
  {
    icon: Soup,
    title: "Restaurants",
    description: "Let diners experience your ambiance virtually. Perfect for attracting more customers through Google Maps.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Castle,
    title: "Airbnb & Rentals",
    description: "Stand out from the competition with detailed virtual tours of your vacation rental properties.",
    color: "from-primary to-accent",
  },
  {
    icon: TreePine,
    title: "Kindergartens",
    description: "Give parents peace of mind by showing them exactly where their children will learn and play.",
    color: "from-accent to-primary",
  },
  {
    icon: GraduationCap,
    title: "Schools & Colleges",
    description: "Attract prospective students with virtual campus tours showcasing facilities and classrooms.",
    color: "from-primary to-primary/60",
  },
  {
    icon: HeartPulse,
    title: "Dental & Medical",
    description: "Help patients feel comfortable before their visit by showing your modern clinic facilities.",
    color: "from-accent to-accent/60",
  },
  {
    icon: Sparkles,
    title: "Salons & Spas",
    description: "Showcase your stylish interiors and relaxing atmosphere to attract new clients.",
    color: "from-primary to-accent",
  },
  {
    icon: Building2,
    title: "Corporate Offices",
    description: "Impress potential clients and recruit top talent with professional office tours.",
    color: "from-accent to-primary",
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
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Virtual Tours for <span className="text-gradient">Every Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We specialize in creating stunning 360° virtual tours for a wide range of industries, all integrated with Google Maps.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-6 rounded-2xl glass hover:bg-card/80 transition-all duration-500 hover:-translate-y-2 hover:elevated-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
