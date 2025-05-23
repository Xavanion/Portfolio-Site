// src/components/Navbar.tsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // icon set of your choice

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Projects", to: "/projects" },
    { label: "Resume", to: "/resume" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#1E1E1E]">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: logo or name */}
        <Link to="/" className="text-xl font-bold">
          &lt;BB /&gt;
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 md:hidden hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Hamburger Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Inline links (desktop) */}
        <ul className="hidden gap-12 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `nav-item ${isActive ? " underline text-white" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide‑down sheet (mobile) */}
      <div
        className={`md:hidden transform bg-[#1E1E1E] transition-all duration-300 ${
          open ? "max-h-96 border-t border-white/10" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)} // close after click
                className={({ isActive }) =>
                  `nav-item block text-lg ${
                    isActive ? "underline text-white" : ""
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
