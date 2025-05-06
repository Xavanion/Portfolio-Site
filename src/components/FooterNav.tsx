/* components/FooterNav.tsx */
import { Link } from "react-router-dom";
import { ArrowUp, FileText, User } from "lucide-react";

export default function FooterNav() {
  return (
    <footer className="mx-auto mt-10 py-5 max-w-5xl border-t border-zinc-700/50">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        {/* left ‑‑ personal links */}
        <div className="flex gap-6">
          <Link
            to="/resume"
            className="inline-flex items-center gap-1 text-zinc-300 hover:text-white"
          >
            <FileText className="h-4 w-4" /> Resume
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-zinc-300 hover:text-white"
          >
            <User className="h-4 w-4" /> About Me
          </Link>
        </div>

        {/* right – back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-1 rounded-md bg-white/5 px-3 py-1.5
                     text-sm text-zinc-200 transition hover:bg-white/10"
        >
          <ArrowUp className="h-4 w-4" /> Top
        </button>
      </div>
    </footer>
  );
}
