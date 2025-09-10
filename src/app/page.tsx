import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";
import { ParallaxDots } from "@/components/ParallaxDots";

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      <Navbar />

      {/* Hero Section - interactive client component */}
      <HeroSection />

      {/* ParallaxDots Background - positioned throughout the page */}
      <div className="fixed inset-0 z-[-15] pointer-events-none">
        <ParallaxDots />
      </div>

      {/* Content Sections */}
      <Sections />

      <Footer />
    </div>
  );
}
