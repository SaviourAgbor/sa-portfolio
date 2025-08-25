import SingleExpeience from "./SingleExperience";
const experiences = [
  {
    job: "Front-End Intern",
    company: "Fodcon",
    date: "March 2025 - Present",
    responsibilities: [
      "Built mobile-friendly web pages with React, TailwindCSS, and TypeScript",
  "Integrated APIs for dynamic data display",
  "Tested and debugged for cross-browser compatibility",
  "Collaborated on UI/UX improvements"
    ]
  },
  {
    job: "Front-End Developer",
    company: "ALX Capstone Graduation Project",
    date: "Dec, 2024 - Jan,2025",
    responsibilities: [
      "Developed a responsive currency converter with React, TailwindCSS, and JavaScript",
  "Created pixel-perfect, responsive UI components",
  "Integrated APIs for dynamic data",
  "Optimized app performance for speed and scalability"
    ]
  },
  {
    job: "Junior Web Developer",
    company: "ALX Studio project",
    date: "July 2024",
    responsibilities: [
      "Built interactive websites with HTML, CSS, and JavaScript",
  "Converted Figma designs to functional web pages",
  "Managed version control with Git and GitHub",
  "Reviewed code to ensure quality and maintainability"
    ]
  }
];


function AllExperiences() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around md:gap-6">
      {experiences.map((experience, index) => {
        return (
          <SingleExpeience key={index} experience={experience} />
        );
      })}
    </div>
  )
}

export default AllExperiences