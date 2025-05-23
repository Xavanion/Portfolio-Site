import { roadmap } from "../data/RoadmapData";
import { useEffect, useRef, useState } from "react";

type Status = "doing" | "done" | "NA";

const badgeClasses = (s: Status) => {
  const palette: Record<Status, string> = {
    doing: "bg-indigo-600/20 text-indigo-300",
    done: "bg-emerald-600/20 text-emerald-300",
    NA: "bg-zinc-600/20 text-zinc-300", // ← new grey pill
  };
  return `inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${palette[s]}`;
};

const badgeLabel: Record<Status, string> = {
  doing: "Working on",
  done: "Done",
  NA: "To do",
};

export default function RailTimeline() {
  const listRef = useRef<HTMLUListElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollRatio, setScrollRatio] = useState(0); // 0‑1

  // Sync dot with list scroll
  useEffect(() => {
    const ul = listRef.current;
    if (!ul) return;

    const handle = () =>
      setScrollRatio(ul.scrollTop / (ul.scrollHeight - ul.clientHeight || 1));

    ul.addEventListener("scroll", handle);
    handle(); // initial
    return () => ul.removeEventListener("scroll", handle);
  }, []);

  // Jump when rail is clicked
  const jump = (e: React.MouseEvent) => {
    const rail = railRef.current;
    const ul = listRef.current;
    if (!rail || !ul) return;

    const rect = rail.getBoundingClientRect();
    const y = e.clientY - rect.top; // px from top of rail
    const ratio = y / rect.height;
    ul.scrollTo({
      top: ratio * (ul.scrollHeight - ul.clientHeight),
      behavior: "smooth",
    });
  };

  const dragInfo = useRef<{ startY: number; startTop: number } | null>(null);

  const startDrag = (pointer: { clientY: number }) => {
    const ul = listRef.current;
    if (!ul) return;
    ul.style.userSelect = "none";

    dragInfo.current = { startY: pointer.clientY, startTop: ul.scrollTop };
    const move = (ev: MouseEvent | TouchEvent) => {
      const y =
        "touches" in ev ? ev.touches[0].clientY : (ev as MouseEvent).clientY;
      ul.scrollTop =
        dragInfo.current!.startTop + (dragInfo.current!.startY - y);
    };
    const stop = () => {
      dragInfo.current = null;
      ul.style.userSelect = "";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move as any);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move as any, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  };

  const startDotDrag = () => {
    const rail = railRef.current;
    const ul = listRef.current;
    if (!rail || !ul) return;

    const rect = rail.getBoundingClientRect();
    const move = (ev: MouseEvent | TouchEvent) => {
      const y =
        "touches" in ev ? ev.touches[0].clientY : (ev as MouseEvent).clientY;
      const ratio = Math.min(Math.max((y - rect.top) / rect.height, 0), 1);
      setScrollRatio(ratio);
      ul.scrollTop = ratio * (ul.scrollHeight - ul.clientHeight);
    };
    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move as any);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move as any, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  };

  return (
    <div className="relative flex max-h-[45vh] space-y-12 ml-5 mt-15 sm:mt-0">
      {/* TimeLine Rail */}
      <div
        ref={railRef}
        onClick={jump}
        className="relative mr-6 cursor-pointer"
      >
        {/* Invisible clickable area */}
        <div className="absolute inset-y-0 left-1/2 w-[30px] -translate-x-1/2" />

        {/* Visible thin rail */}
        <div className="relative mx-auto w-[5px] h-full rounded bg-white/20">
          {/* Scroll dot */}
          <button
            onMouseDown={startDotDrag}
            onTouchStart={startDotDrag}
            className="absolute left-1/2 -translate-x-1/2 rounded-full
             bg-indigo-500 transition-transform duration-300
             h-5 w-5 cursor-pointer"
            style={{ top: `calc(${scrollRatio * 100}% - 0.625rem)` }}
            aria-label="scroll roadmap"
          />
        </div>
      </div>

      {/* scrollable list */}
      <ul
        ref={listRef}
        className="max-h-[45vh] space-y-8 overflow-y-auto pr-4 cursor-grab active:cursor-grabbing no-scrollbar"
        onTouchStart={(e) => startDrag(e.touches[0])}
        onMouseDown={(e) => startDrag(e)}
      >
        {roadmap.map((item) => (
          <li key={item.title} className="space-y-1">
            <div className="flex items-center gap-3">
              <time className="text-sm text-zinc-400">
                {new Date(item.date + "T12:00").toLocaleString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </time>

              {/* status badge */}
              <span className={badgeClasses(item.status)}>
                {badgeLabel[item.status]}
              </span>
            </div>

            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
