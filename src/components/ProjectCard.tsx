import type { ProjectInfo } from "../data/ProjectInfo";
import logo from "../assets/git_logo.png";
import { Link } from "react-router-dom";

{
  /* TODO: General styling */
}
function ProjectCard({ p }: { p: ProjectInfo }) {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex flex-row">
        <h2 className="mr-5">{p.title}</h2>
        <Link
          to={p.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-transform hover:scale-110 focus:scale-110"
        >
          <img src={logo} alt="repo logo" className="h-[2.3rem] w-auto" />
        </Link>
      </div>
      <p className="font-fira font-medium">{p.description}</p>
      {/* TODO: Create a mapped roadmap and make each show as a bullet point */}
      <ul className="mt-3 list-disc list-inside space-y-1 font-medium font-fira">
        {p.roadmap.map((goal) => (
          <li>{goal}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
