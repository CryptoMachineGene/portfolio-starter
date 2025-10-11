import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import RepoButton from "../components/RepoButton";

export default function Projects() {
  const nav = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {PROJECTS.filter(p => p.featured !== false).map(p => (
        <div
          key={p.key}
          className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition w-full space-y-3 bg-black text-white"
        >
          <button onClick={() => nav(p.route)} className="text-left w-full">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm opacity-80 mt-1">{p.blurb}</p>
          </button>

          <div className="flex items-center gap-3 pt-2">
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-white text-black font-medium hover:bg-gray-200 hover:-translate-y-0.5 transition-transform shadow-[0_2px_0_0_rgba(0,0,0,1)]"
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
