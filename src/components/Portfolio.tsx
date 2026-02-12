import { useState } from "react";
import { ExternalLink, MapPin } from "lucide-react";

const portfolioItems = [
  {
    title: "Grand Palace Hotel",
    category: "Hotel",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
  },
  {
    title: "Spice Garden Restaurant",
    category: "Restaurant",
    location: "Delhi",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
  },
  {
    title: "Little Stars Kindergarten",
    category: "Kindergarten",
    location: "Bangalore",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
  },
  {
    title: "Bright Smile Dental",
    category: "Dental",
    location: "Pune",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop",
  },
  {
    title: "Ocean View Resort",
    category: "Resort",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
  },
  {
    title: "Elite Academy",
    category: "School",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Hotel", "Restaurant", "Kindergarten", "Dental", "Resort", "School"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 md:py-32 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-4">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Virtual Tours</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of our recent projects and see the quality we deliver.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl card-shadow transition-all duration-500 hover:-translate-y-2 hover:elevated-shadow"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4" />
                    {item.location}
                  </div>
                </div>
              </div>

              {/* View Button */}
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
