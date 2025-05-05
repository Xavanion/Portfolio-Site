import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center gap-25 mt-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-item text-white underline" : "nav-item"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-item text-white underline" : "nav-item"
        }
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? "nav-item text-white underline" : "nav-item"
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive ? "nav-item text-white underline" : "nav-item"
        }
      >
        Resume
      </NavLink>
    </div>
  );
}
export default Navbar;
