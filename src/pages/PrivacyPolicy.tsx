import { Link } from "react-router-dom";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-semibold">Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Last updated: February 22, 2026
            </p>
          </div>

          {/* Data Collection */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">1. Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed">
              At GarryDigital360, we collect information that you provide directly to us when you:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Fill out our contact form (name, email, phone number, message)</li>
              <li>Request a quote or book a service</li>
              <li>Subscribe to our newsletter or updates</li>
              <li>Communicate with us via email, phone, or social media</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and pages visited.
            </p>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">2. Cookies Usage</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements and track campaign performance</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.
            </p>
          </section>

          {/* Analytics */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">3. Analytics Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use Google Analytics 4 (GA4) to collect anonymized data about website usage, including page views, session duration, traffic sources, and user demographics. This data helps us improve our website and services. Google Analytics may use cookies to collect this information. You can opt out of Google Analytics tracking by installing the{" "}
              <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Google Analytics Opt-out Browser Add-on
              </a>.
            </p>
          </section>

          {/* Payment */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">4. Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              All payments for our 360° virtual tour services are processed securely. We accept payments via bank transfer, UPI, and other standard methods. Key terms:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>A booking advance may be required to confirm your service date</li>
              <li>Full payment is due upon delivery of the virtual tour</li>
              <li>All pricing is in Indian Rupees (INR) and is inclusive of applicable taxes unless stated otherwise</li>
              <li>We do not store your payment card details on our servers</li>
            </ul>
          </section>

          {/* Refund */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">5. Refund Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to delivering high-quality work. Our refund policy includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Full refund if the project is cancelled before the onsite shoot</li>
              <li>Partial refund (minus travel and planning costs) if cancelled after onsite shoot but before delivery</li>
              <li>No refund once the final virtual tour has been delivered and published</li>
              <li>Unlimited revisions are included during the editing phase at no extra charge</li>
            </ul>
          </section>

          {/* Data Usage */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">6. How We Use Your Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and service requests</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Analyze website usage to improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">7. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="glass rounded-xl p-6 space-y-2">
              <p className="text-foreground"><strong>Email:</strong>{" "}
                <a href="mailto:contact@garrydigital360.com" className="text-primary hover:underline">
                  contact@garrydigital360.com
                </a>
              </p>
              <p className="text-foreground"><strong>Phone:</strong>{" "}
                <a href="tel:+919740044911" className="text-primary hover:underline">
                  +91 97400 44911
                </a>
              </p>
              <p className="text-foreground"><strong>Location:</strong> Delhi, India</p>
            </div>
          </section>
        </div>

        {/* Back to home */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
