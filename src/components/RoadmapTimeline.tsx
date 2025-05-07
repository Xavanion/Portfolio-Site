import { roadmap } from "../data/RoadmapData";
import { useEffect, useRef, useState } from "react";

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
    document.body.style.userSelect = "none";
    dragInfo.current = { startY: pointer.clientY, startTop: ul.scrollTop };
    const move = (ev: MouseEvent | TouchEvent) => {
      const y =
        "touches" in ev ? ev.touches[0].clientY : (ev as MouseEvent).clientY;
      ul.scrollTop =
        dragInfo.current!.startTop + (dragInfo.current!.startY - y);
    };
    const stop = () => {
      dragInfo.current = null;
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

  const startDotDrag = (pointer: { clientY: number }) => {
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
    <div className="relative flex max-h-[45vh] space-y-12 ml-5">
      {/* rail */}
      <div
        ref={railRef}
        onClick={jump}
        className="relative mr-6 w-[5px] cursor-pointer rounded bg-white/20"
      >
        {/* dot */}
        <button
          onMouseDown={(e) => startDotDrag(e)}
          onTouchStart={(e) => startDotDrag(e.touches[0])}
          className="absolute left-1/2 -translate-x-1/2 rounded-full
               bg-indigo-500 transition-transform duration-300
               h-5 w-5 cursor-pointer"
          style={{ top: `calc(${scrollRatio * 100}% - 0.625rem)` }}
          aria-label="scroll roadmap"
        />
      </div>

      {/* scrollable list */}
      <ul
        ref={listRef}
        className="max-h-[45vh] space-y-8 overflow-y-auto pr-4 cursor-grab active:cursor-grabbing no-scrollbar"
        onTouchStart={(e) => startDrag(e.touches[0])}
        onMouseDown={(e) => startDrag(e)}
      >
        {roadmap.map((item, i) => (
          <li key={i} className="space-y-1">
            <time className="text-sm text-zinc-400">
              {new Date(item.date + "T12:00:00").toLocaleString("en-US", {
                month: "short",
                year: "numeric",
              })}
            </time>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
