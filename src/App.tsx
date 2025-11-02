import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0c10] text-white flex flex-col">
      {/* === Fixed Navbar === */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-yellow-400/30 px-6 py-3 flex items-center justify-between">
        <NavLink
          to="/"
          className="text-lg font-semibold text-yellow-400 hover:text-yellow-300 transition"
        >
          Eugene McGrath
        </NavLink>

        <div className="flex gap-6 text-sm">
          {[
            { to: "/", label: "Resume" },
            { to: "/demo", label: "Demo" },
            { to: "/projects", label: "Projects" },
            { to: "/blog", label: "Blog" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-400 font-medium"
                    : "text-gray-300 hover:text-yellow-300"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* === Page Content === */}
      <main className="flex-1 overflow-y-auto p-6 pt-20">
        {/* top padding compensates for fixed nav */}
        <Outlet />
      </main>

      {/* === Footer === */}
      <footer className="w-full text-center py-4 border-t border-yellow-400/30 text-xs text-gray-400">
        © {new Date().getFullYear()} Eugene McGrath — Web3 Developer
      </footer>
    </div>
  );
}
