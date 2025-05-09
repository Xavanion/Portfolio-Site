import logo from "../assets/git_logo.png";
import { Link } from "react-router-dom";
import type { ProjectInfo } from "../data/ProjectInfo";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ p }: { p: ProjectInfo }) {
  const sub = p.title.trim().toLowerCase().replace(/\s+/g, "-");
  return (
    <section className="mx-auto mb-30 max-w-5xl">
      {/* HERO ROW */}
      <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
        {/* Textual hero */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold tracking-normal">{p.title}</h2>

          <p className="mt-4 text-xl leading-relaxed text-zinc-300">
            {p.description}
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              to={p.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-md px-5 py-2.5 text-base font-medium text-white transition"
            >
              <img src={logo} className="h-5 w-auto" /> View repo
            </Link>

            <Link
              to={`https://${sub}.${location.hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-900 hover:bg-indigo-800 rounded-md px-5 py-2.5 text-base font-medium text-white transition"
            >
              <ExternalLink /> Try Demo
            </Link>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <hr className="my-12 h-px w-full bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

      {/* Roadmap */}
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-2xl font-semibold tracking-wide">Roadmap</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            {p.roadmap.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="mb-4 text-2xl font-semibold tracking-wide">
            Tech stack
          </h3>
          <ul className="list-disc list-inside space-y-2">
            {p.tech_stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
