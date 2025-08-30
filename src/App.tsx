import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import HelperSection from "./components/HelperSection";
import SkillsMain from "./components/skillsSection/SkillsMain";
import HorizontalLine from "./components/HorizontalLine";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";

function App() {
  return (    <div className="font-JosefinSans w-full overflow-hidden max-w-screen min-w-xs">

      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <HorizontalLine />
      <SkillsMain />
      <ExperienceMain />
      <HorizontalLine />
      <ProjectsMain />
      <HorizontalLine />
      <ContactMeMain />
      <HelperSection />
    </div>
  );
}

export default App;
