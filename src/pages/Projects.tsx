import { projects } from "../data/ProjectInfo";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <div className="flex flex-col">
      <h1>&lt;Projects / &gt;</h1>
      <div className="mx-auto my-10 max-w-5xl rounded-md bg-white/5 px-6 py-4 text-center text-lg text-zinc-300 backdrop-blur">
        Currently working on&nbsp;
        <span className="font-semibold text-white">"Netcode"</span>&nbsp;- a
        collaborative code editor and runner
      </div>
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
