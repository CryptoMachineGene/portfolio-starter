import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { path: "/", label: "Resume" },
  { path: "/demo", label: "Demo" },
  { path: "/projects", label: "Projects" },
  { path: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center border-b border-yellow-400/20 px-8 py-3 text-sm">
      {/* Left brand name */}
      <span className="font-semibold text-yellow-400">Eugene McGrath</span>

      {/* Right navigation links */}
      <div className="flex gap-6">
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"}
            className={({ isActive }) =>
              `relative transition-all duration-200 ${
                isActive ? "text-yellow-400 font-semibold" : "text-gray-400 hover:text-yellow-300"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {label}
                {isActive && (
                  <motion.span
                    layoutId="navGlow"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-yellow-400/80 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
