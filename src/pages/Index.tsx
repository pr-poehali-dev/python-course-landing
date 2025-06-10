import HeroSection from "@/components/HeroSection";
import Benefits from "@/components/Benefits";
import CourseProgram from "@/components/CourseProgram";
import Instructor from "@/components/Instructor";
import Pricing from "@/components/Pricing";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Benefits />
      <CourseProgram />
      <Instructor />
      <Pricing />
      <ContactSection />
    </div>
  );
};

export default Index;
