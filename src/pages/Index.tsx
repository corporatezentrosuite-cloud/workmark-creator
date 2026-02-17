import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import SocialProof from "@/components/landing/SocialProof";
import Problem from "@/components/landing/Problem";
import BentoGrid from "@/components/landing/BentoGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import ProfileShowcase from "@/components/landing/ProfileShowcase";
import Leaderboard from "@/components/landing/Leaderboard";
import ActivityFeed from "@/components/landing/ActivityFeed";
import Benefits from "@/components/landing/Benefits";
import Testimonials from "@/components/landing/Testimonials";
import ForUniversities from "@/components/landing/ForUniversities";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="grain-overlay grid-bg min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <BentoGrid />
      <HowItWorks />
      <ProfileShowcase />
      <Leaderboard />
      <ActivityFeed />
      <Benefits />
      <Testimonials />
      <ForUniversities />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
