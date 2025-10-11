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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 pt-1">
            {/* Code (brand yellow w/ GitHub icon) */}
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-black bg-yellow-200 text-black font-semibold hover:bg-yellow-300 hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 transition-colors duration-150 group-hover:fill-white"
                aria-hidden="true"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.8.06 1.22.83 1.22.83.71 1.22 1.86.87 2.32.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.83-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83A7.66 7.66 0 0 1 8 4.58c.68 0 1.36.09 2 .26 1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.52.57.83 1.29.83 2.17 0 3.09-1.86 3.76-3.64 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.45.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
              </svg>
              Code
            </a>

            {/* Site (white w/ chain icon) */}
            {p.live && (
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border-2 border-black bg-white text-black font-semibold hover:bg-black hover:text-white hover:-translate-y-0.5 active:translate-y-0 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 transition-colors duration-150 group-hover:fill-white"
                >
                  <path d="M10.59 13.41a1 1 0 0 0 1.41 0l5.66-5.66a1 1 0 1 0-1.41-1.41L10.59 12a1 1 0 0 0 0 1.41z" />
                  <path d="M13.41 10.59a1 1 0 0 0-1.41 0L6.34 16.24a3 3 0 0 0 4.24 4.24l5.66-5.66a3 3 0 0 0-4.24-4.24z" />
                </svg>
                Site
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
