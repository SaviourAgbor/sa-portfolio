import SingleProject from "./SingleProject";
const ProjectsGroup = ({ projects }) => {
  return (
    <div className="mt-10 flex flex-col">
      {projects.map((project, index) => {
        return <SingleProject key={index} project={project} />;
      })}
    </div>
  );
};

export default ProjectsGroup;
