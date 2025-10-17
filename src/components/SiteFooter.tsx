import { Link, useLocation, useNavigate } from "react-router-dom";

type Props = { compact?: boolean; bgClass?: string; borderClass?: string };

export default function SiteFooter({
  compact = false,
  bgClass = "bg-gray-900",
  borderClass = "border-t",
}: Props) {
  const location = useLocation();
  const navigate = useNavigate();

  // With HashRouter, pathname reflects the logical route ("/", "/proofmint", etc.)
  const atHome = location.pathname === "/" || location.pathname === "/resume";

  return (
    <footer className={`${compact ? "mt-0" : "mt-16"} ${borderClass} ${bgClass} text-gray-400`}>
      <div className="container-nwc py-6 text-xs flex flex-col gap-2">
        <p>© {new Date().getFullYear()} Eugene McGrath · Built with React + Tailwind</p>

        {/* Hide the control on the home route */}
        {!atHome && (
          <div className="inline-flex items-center gap-3">
            {/* Primary: client navigation */}
            <button
              onClick={() => navigate("/", { replace: true })}
              className="text-sm text-gray-200 hover:text-white transition hover:translate-x-0.5"
              aria-label="Back to Home"
            >
              ← Back to Home
            </button>

            {/* Fallback: hard link (works even if JS or context fails) */}
            <Link
              to="/"
              className="sr-only"
              aria-hidden="true"
              tabIndex={-1}
            >
              Home
            </Link>

            {/* No-JS fallback for GH Pages (kept visually hidden) */}
            <a
              href={`${import.meta.env.BASE_URL}#/`}
              className="sr-only"
              aria-hidden="true"
              tabIndex={-1}
            >
              Home (fallback)
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
