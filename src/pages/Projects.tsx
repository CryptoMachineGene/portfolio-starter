import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/projects";
import RepoButton from "../components/RepoButton";

export default function Projects() {
  const nav = useNavigate();

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 pb-16">
      {PROJECTS.filter(p => p.featured !== false).map(p => (
        <div
          key={p.key}
          className="flex flex-col p-6 border rounded-2xl shadow-sm hover:shadow-md transition bg-black text-white h-auto min-h-[510px]"
        >
          {/* clickable header */}
          <button onClick={() => nav(p.route)} className="text-left">
            <h2 className="text-lg font-semibold text-yellow-300">
              {p.title}
            </h2>
            <p className="text-sm opacity-80 mt-1">{p.blurb}</p>
          </button>

          {/* buttons */}
          <div className="flex flex-wrap justify-start gap-3 pt-4 mt-4">
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl border-2 border-yellow-400 bg-black text-yellow-400 font-medium hover:bg-yellow-400 hover:text-black transition"
              >
                ▶ Demo
              </a>
            )}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex justify-center items-center gap-2 px-4 py-2 rounded-xl border-2 border-white bg-white text-black font-medium hover:bg-gray-200 transition"
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
