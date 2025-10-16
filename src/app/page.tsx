"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Modern desk setup with neon lighting and a desktop computer displaying colorful images." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Low-angle view of a modern glass skyscraper against a clear sky in Poole, UK." },
  { "id": "feature-image", "url": "https://images.pexels.com/photos/7818107/pexels-photo-7818107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A close-up view of a notebook with handwritten notes alongside a laptop for planning and strategy." },
  { "id": "team-image", "url": "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse team of women brainstorming ideas in a modern office setting, fostering collaboration and creativity." },
  { "id": "testimonial-image", "url": "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Woman enjoying remote work at a café, using a laptop and smartphone." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          brandName="Webild"
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]} 
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Better Products"
            description="Create exceptional user experiences with our design system"
            imagePosition="left"
            imageSrc="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Start Building", href: "https://example.com" },
              { text: "View Demo", href: "demo" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
                "We're a team passionate about creating exceptional digital experiences.",
                "Our mission is to empower designers and developers."
            ]}
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Features"
            features={[
              { title: "Advanced Analytics", description: "Get detailed insights into your business performance", icon: "Zap" },
              { title: "User-Friendly Interface", description: "Our easy-to-use platform ensures a seamless experience", icon: "Smile" }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardTwo
            title="Meet Our Team"
            members={[
              { id: "1", name: "Alisa Hester", role: "Founder & CEO", description: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.", imageSrc: "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", socialLinks: [{ icon: "Twitter", url: "https://twitter.com/alisa" }, { icon: "Linkedin", url: "https://linkedin.com/in/alisa" }] }
            ]}
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Customers Say"
            testimonials={[
              { id: "1", name: "Alisa Hester", role: "PM, Hourglass", company: "Web Design Agency", rating: 5, imageSrc: "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenterForm
            title="Contact us"
            description="We'd love to hear from you. Send us a message."
            inputs={[
              { name: "name", type: "text", placeholder: "Name", required: true },
              { name: "email", type: "email", placeholder: "Email", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Type your message...", rows: 5, required: true }}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [{ label: "Features", href: "features" }, { label: "Pricing", href: "pricing" }] },
              { title: "Company", items: [{ label: "About", href: "about" }, { label: "Contact", href: "contact" }] }
            ]}
            copyrightText="© 2025 | Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}