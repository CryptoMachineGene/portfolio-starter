import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import RepoButton from "../components/RepoButton";

export default function Projects() {
  const nav = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[1fr]">
      {PROJECTS.filter(p => p.featured !== false).map(p => (
        <div
          key={p.key}
          className="flex flex-col justify-between h-full p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-black text-white"
        >
          {/* clickable header area */}
          <button
            onClick={() => nav(p.route)}
            className="text-left flex-grow"
          >
            <h2 className="text-lg font-semibold text-yellow-300">
              {p.title}
            </h2>
            <p className="text-sm opacity-80 mt-1">{p.blurb}</p>
          </button>

          {/* button row */}
          <div className="flex items-center gap-3 pt-4 mt-4">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-yellow-400 bg-black text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition-transform duration-200 shadow-[0_2px_0_0_rgba(255,255,0,1)]"
              >
                ▶ Demo
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-white text-black font-medium hover:bg-gray-200 transition-transform duration-200 shadow-[0_2px_0_0_rgba(0,0,0,1)]"
              >
                Site
              </a>
            )}
            <RepoButton to={p.repo} />
          </div>
        </div>
      ))}
    </div>
  );
}
