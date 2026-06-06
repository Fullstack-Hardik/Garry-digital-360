import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Blog: SEO Specialist & 360 Camera Photography
          </h1>
          
          <div className="space-y-12">
            {/* Article 1 */}
            <article className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-4 text-primary">
                Why You Need a 360 Tour in Delhi & Uttar Pradesh
              </h2>
              <div className="text-muted-foreground space-y-4 text-lg">
                <p>
                  As an expert in <strong>360 camera photography</strong>, I've seen firsthand how a 
                  <strong> 360 tour in Delhi</strong> or <strong>Uttar Pradesh</strong> can transform a 
                  local business's digital presence. Whether you run a bustling restaurant in Connaught Place 
                  or a heritage hotel in Agra, offering your customers an immersive virtual walkthrough is 
                  no longer just a luxury—it's an expectation.
                </p>
                <p>
                  My name is <strong>Garry</strong>, and I am a Google Trusted Photographer. My goal is to 
                  capture the essence of your space using top-tier 360 camera equipment. This not only builds 
                  trust with potential visitors but directly impacts your Google Maps ranking and engagement metrics.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="bg-card rounded-xl p-8 shadow-sm border border-border/50">
              <h2 className="text-3xl font-semibold mb-4 text-primary">
                The Role of an SEO Specialist in Modern Photography
              </h2>
              <div className="text-muted-foreground space-y-4 text-lg">
                <p>
                  You might wonder, what does an <strong>SEO Specialist</strong> have to do with photography? 
                  The answer lies in how search engines work today. Creating a beautiful 360° virtual tour is 
                  step one. Step two is making sure people actually see it.
                </p>
                <p>
                  By optimizing your Google Business Profile, embedding properly tagged tours on your website, 
                  and ensuring your site is blazing fast, I help your business rank higher for local searches. 
                  When someone looks for services in <strong>Delhi</strong> or <strong>Uttar Pradesh</strong>, 
                  your business will stand out with an engaging, interactive 360 view that keeps users on your page longer.
                </p>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
