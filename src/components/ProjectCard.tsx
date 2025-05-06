import type { ProjectInfo } from "../data/ProjectInfo";
import logo from "../assets/git_logo.png";
import { Link } from "react-router-dom";

{
  /* TODO: General styling */
}
function ProjectCard({ p }: { p: ProjectInfo }) {
  return (
    <div className="flex flex-col mt-20">
      <h2>{p.title}</h2>
      <Link
        to={p.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer transition-transform hover:scale-110 focus:scale-110"
      >
        <img src={logo} alt="repo logo" className="ml-5 h-[2.3rem] w-auto" />
      </Link>
      <p className="font-fira font-medium">{p.description}</p>
      {/* TODO: Create a mapped roadmap and make each show as a bullet point */}
      <p className="font-fira font-medium gap-2">{p.roadmap}</p>
    </div>
  );
}

export default ProjectCard;
