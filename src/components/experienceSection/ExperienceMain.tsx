import ExperienceTop from "./ExperienceTop";
import ExperienceText from "./ExperienceText";
import AllExperiences from "./AllExperiences";

function ExperienceMain() {
  return (
    <div className="max-w-[1200px]  mt-15 px-10 ">
      <ExperienceText />
      <ExperienceTop />
      <div className="w-full h-1 bg-lightBrown mt-10"></div>
      <AllExperiences />
    </div>
  );
}

export default ExperienceMain;
