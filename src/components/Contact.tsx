import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-secondary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass text-primary text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Go <span className="text-gradient">Virtual?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss how a 360° virtual tour can transform your business presence online.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="tel:+919740044911" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Phone</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">+91 97400 44911</div>
                  </div>
                </a>

                <a href="mailto:garrydigital360@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-semibold group-hover:text-primary transition-colors">garrydigital360@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="font-semibold">Available Pan-India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919740044911"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 rounded-2xl bg-[#25D366] text-white font-semibold hover:bg-[#22c55e] transition-colors duration-300"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    placeholder="+91 97400 44911"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="business">
                  Business Type
                </label>
                <select
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                >
                  <option value="">Select your business</option>
                  <option value="hotel">Hotel / Resort</option>
                  <option value="restaurant">Restaurant / Cafe</option>
                  <option value="airbnb">Airbnb / Rental</option>
                  <option value="school">School / College</option>
                  <option value="kindergarten">Kindergarten</option>
                  <option value="dental">Dental / Medical Clinic</option>
                  <option value="salon">Salon / Spa</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
