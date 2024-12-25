
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className='main'>
      <div className='container'>
         <HeroSection />
         <AboutSection />
       <SkillSection />
      </div>
    </main>
  );
}
