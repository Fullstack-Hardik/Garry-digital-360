import { Phone, Mail, MapPin, MessageCircle, Copy } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const phoneNumber = "+919740044911";
  const email = "garrydigital360@gmail.com";
  const whatsappLink = "https://wa.me/919740044911";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    toast.success("Phone number copied to clipboard!");
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

        <div className="max-w-4xl mx-auto">
          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Phone Card */}
            <div className="glass rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:elevated-shadow group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Phone</div>
                  <a 
                    href={`tel:${phoneNumber}`}
                    className="font-semibold text-lg hover:text-primary transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy Number
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:elevated-shadow group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Email</div>
                  <a 
                    href={`mailto:${email}`}
                    className="font-semibold text-base hover:text-primary transition-colors break-all"
                  >
                    {email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  Copy Email
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:-translate-y-2 hover:elevated-shadow group">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Location</div>
                  <div className="font-semibold text-lg">
                    Available Pan-India
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  Serving clients nationwide
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA - Prominent */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#25D366] to-[#22c55e] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-3 w-full p-6 rounded-2xl bg-[#25D366] text-white font-bold text-lg hover:bg-[#22c55e] transition-all duration-300 hover:scale-105 group"
            >
              <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <span>Chat with Us on WhatsApp</span>
              <div className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </a>
          </div>

          {/* Additional Info */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            We typically respond within 1-2 hours during business hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
