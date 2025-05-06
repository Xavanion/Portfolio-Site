import { projects } from "../data/ProjectInfo";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col">
      <h1>&lt;Projects / &gt;</h1>
      <p className="ml-10 mt-5 font-fira font-[20px] max-w-150">
        Currently working on "Netcode" a collaborative code editor and runner
      </p>
      {/* TODO: Add a mapped area here that shows projects off */}
      <div className="gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.title} p={project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
