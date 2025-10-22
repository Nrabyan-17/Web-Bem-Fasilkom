import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { VisionMissionSection } from "../components/VisionMissionSection";
import { AgendaSection } from "../components/AgendaSection";
import { NewsSection } from "../components/NewsSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <AgendaSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
