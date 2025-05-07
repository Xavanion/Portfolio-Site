/*  src/pages/About.tsx  */
import { Link } from "react-router-dom";
import git_logo from "@/assets/git_logo.png";
import linkedin_logo from "@/assets/linkedin_logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import avatar from "@/assets/avatar_placeholder.png";

export default function About() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-20">
      {/*  Hero  */}
      <section className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        {/* TODO: Add headshot for display */}
        {/*<img
          src={avatar}
          alt="Barrett Brown headshot"
          className="h-40 w-40 shrink-0 rounded-full border-4 border-indigo-500/30 object-cover shadow-lg"
        />*/}

        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Hello, I'm Barrett
          </h1>
          <p className="max-w-prose leading-relaxed text-zinc-300">
            I'm a <strong>backend-focused developer</strong> with a passion for
            building real-time, scalable systems. Right now I'm working on{" "}
            <Link
              to="/projects"
              className="underline decoration-indigo-400 underline-offset-4 hover:text-indigo-300"
            >
              NetCode
            </Link>
            , a collaborative code editor & runner written in React, Go,
            WebSockets and utilizing Operational Transformations for
            concurrency.
          </p>

          {/* contact Information */}
          <div className="space-y-1 text-sm font-mono text-zinc-400">
            <p>Email: barrettbrown2012@gmail.com</p>
            <p>Phone: +1 (785) 218-2294</p>
          </div>

          {/* social icons */}
          <div className="flex gap-6 pt-2">
            <Link
              to="https://github.com/Xavanion"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform hover:scale-110 focus:scale-110"
            >
              <img
                src={git_logo}
                alt="github logo"
                className="h-[2.3rem] w-auto"
              />
            </Link>
            <Link
              to="https://linkedin.com/in/barrett-brown-8a990016b"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer transition-transform hover:scale-110 focus:scale-110"
            >
              <img
                src={linkedin_logo}
                alt="linkedin logo"
                className="h-[2.3rem] w-auto"
              />
            </Link>
          </div>
        </div>
      </section>

      {/*  Quick facts  */}
      <section className="grid gap-6 sm:grid-cols-2">
        <Card className="bg-white/5 backdrop-blur text-white">
          <CardHeader>
            <CardTitle>Currently</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>Senior, University of Kansas (CS 3.7 GPA)</li>
              <li>Building NetCode v0.8</li>
              <li>Grinding LeetCode (40 / 150 solved)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur text-white">
          <CardHeader>
            <CardTitle>Toolbox</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3 text-sm">
            {[
              "Go",
              "Python",
              "C",
              "C++",
              "C#",
              "React",
              "HTML",
              "CSS",
              "TypeScript",
              "Tailwind",
              "PostgreSQL",
              "WebSockets",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-zinc-200"
              >
                {t}
              </span>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur sm:col-span-2 text-white">
          <CardHeader>
            <CardTitle>What excites me</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm leading-relaxed">
            <ul className="list-disc list-inside space-y-2">
              <li>
                Low-latency distributed systems, especially real-time
                collaboration tech (OT / CRDT).
              </li>
              <li>
                Dev-ops & general scalability: Docker, Kubernetes, Prometheus,
                Grafana, automated CI, fuzz testing.
              </li>
              <li>
                Security: Binary analysis with Ghidra, exploit mitigation.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
