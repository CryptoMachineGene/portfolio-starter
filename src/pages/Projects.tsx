import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  const nav = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {PROJECTS.filter((p) => p.featured !== false).map((p) => (
        <div
          key={p.key}
          className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition w-full space-y-3"
        >
          {/* title + blurb (click opens internal route) */}
          <button onClick={() => nav(p.route)} className="text-left w-full">
            <h2 className="text-lg font-semibold">{p.title}</h2>
            <p className="text-sm opacity-80 mt-1">{p.blurb}</p>
          </button>

          {/* buttons row */}
          <div className="flex items-center gap-3 pt-1">
            {/* Code button — restyled to match your yellow/black brand */}
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-yellow-200 text-black font-medium hover:bg-yellow-300 hover:-translate-y-0.5 transition-transform"
            >
              Code
            </a>

            {/* Live Demo button — renders ONLY if p.live is set */}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-black bg-gray-100 text-black font-medium hover:-translate-y-0.5 transition-transform"
            >
                Live Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
