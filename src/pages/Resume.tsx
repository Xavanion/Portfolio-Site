import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import pdfFile from "@/assets/Barrett_Brown_Resume.pdf"; // put the file in src/assets

export default function Resume() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4">
      {/*  Header  */}
      <header className="space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Resume
        </h1>

        {/* Download */}
        <a
          href={pdfFile}
          download
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-6 py-3 font-medium transition hover:bg-indigo-500"
        >
          <Download className="h-5 w-5" />
          Download PDF
        </a>

        <p className="text-sm text-zinc-400">Last updated · May 2025</p>
      </header>

      {/*  Inline viewer (desktop)  */}
      <section className="hidden overflow-hidden rounded-lg shadow-lg lg:block">
        <object
          data={pdfFile}
          type="application/pdf"
          className="h-[120vh] w-full"
          aria-label="Resume PDF Display"
        >
          {/* fallback text */}
          <p className="p-6 text-zinc-400">
            PDF preview failed to load.{" "}
            <a href={pdfFile} className="underline">
              Click here to download.
            </a>
          </p>
        </object>
      </section>

      {/*  Quick highlights  */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-white/5 backdrop-blur text-white">
          <CardHeader>
            <CardTitle>Core Skills</CardTitle>
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
            ].map((s) => (
              <span
                key={s}
                className="rounded-full bg-white/10 px-3 py-1 text-zinc-200"
              >
                {s}
              </span>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/5 backdrop-blur text-white">
          <CardHeader>
            <CardTitle>Relevant Coursework</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1 text-sm leading-relaxed">
            <ul className="list-disc list-inside space-y-1">
              <li>Operating Systems</li>
              <li>Database Systems</li>
              <li>Cyber Defense</li>
              <li>Software Reverse Engineering</li>
              <li>Data Structures and Algorithms</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
