import ContactCTA from "@/app/components/faq/ContactCTA";
import FAQAccordion from "@/app/components/faq/FAQAccordion";
import FAQHero from "@/app/components/faq/FAQHero";
import HelpCategories from "@/app/components/faq/HelpCategories";
import OtherContacts from "@/app/components/faq/OtherContacts";
import Footer from "@/app/components/ui/Footer";
import Navbar from "@/app/components/ui/Navbar";

export default function FAQPage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      
      {/* 🔥 GLOW LAYER */}
      <div className="pointer-events-none absolute inset-0 z-0">
        
        {/* glow 1 */}
        <div
          className="absolute left-1/2 top-[400px] -translate-x-1/2 w-[446px] h-[664px] rounded-full blur-[420px]"
          style={{ background: "rgba(170,106,255,0.37)" }}
        />

        {/* glow 2 */}
        <div
          className="absolute left-[-600px] top-[1400px] w-[520px] h-[1500px] blur-[400px]"
          style={{
            background: "rgba(170,106,255,0.17)",
            transform: "rotate(45deg)",
          }}
        />

      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <FAQHero />
        <HelpCategories />
        <FAQAccordion />
        <ContactCTA />
        <OtherContacts />

        <Footer />
      </div>

    </div>
  );
}