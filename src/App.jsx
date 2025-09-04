import { motion } from "framer-motion";
import { fadeIn } from "./framerMotion/variants";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import HeroMain from "./components/heroSection/HeroMain";
import HeroGradient from "./components/heroSection/HeroGradient";
import SubHeroSection from "./components/heroSection/SubHeroSection";
import AboutMeMain from "./components/aboutMeSection/AboutMeMain";
import SkillsMain from "./components/skillsSection/SkillsMain";
import HorizontalLine from "./components/HorizontalLine";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footerSection/FooterMain";

function App() {
  return (
    <div className="font-JosefinSans flex flex-col w-full overflow-hidden max-w-screen min-w-xs">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <SubHeroSection />
      </motion.div>
      <AboutMeMain />
      <HorizontalLine />
      <SkillsMain />
      <ExperienceMain />
      <HorizontalLine />
      <ProjectsMain />
      <HorizontalLine />
      <ContactMeMain />
      <FooterMain />
    </div>
  );
}

export default App;
