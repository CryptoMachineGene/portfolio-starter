import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Normalize path (avoid trailing slash mismatches)
  const current = useMemo(
    () => pathname.replace(/\/+$/, "") || "/",
    [pathname]
  );

  // Close menu on route change or Esc key
  useEffect(() => setOpen(false), [current]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const nav = [
    { to: "/resume", label: "Resume" },
    { to: "/projects", label: "Projects" },
    { to: "/nwc", label: "New World Cryptos®" },
    { to: "/founders", label: "Founders" },
    { to: "/acknowledgments", label: "Acknowledgments" },
  ];

  const NavLink = ({ to, label }: { to: string; label: string }) => {
    const active = current === to || current === `/${to.replace(/^\//, "")}`;
    return (
      <Link
        to={to}
        aria-current={active ? "page" : undefined}
        className={`transition-colors hover:text-amber-400 ${
          active
            ? "text-white font-medium underline underline-offset-4"
            : "text-zinc-400"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="container-nwc flex items-center justify-between py-3">
        {/* Brand */}
        <Link
          to="/resume"
          className="text-lg font-bold tracking-tight text-white hover:text-amber-400 transition-colors"
        >
          Eugene McGrath
        </Link>

        {/* Desktop nav (only on lg and up) */}
        <nav className="hidden lg:flex gap-4 text-sm">
          {nav.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>

        {/* Hamburger (visible below lg) */}
        <button
          type="button"
          className="inline-flex lg:hidden items-center justify-center rounded-lg p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/40 focus:outline-none focus:ring-2 focus:ring-amber-400"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            // X icon
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel (animated) */}
      <div
        id="mobile-menu"
        className="lg:hidden border-t border-zinc-800 bg-zinc-950/95 overflow-hidden transition-[max-height,opacity] duration-200"
        style={{ maxHeight: open ? 320 : 0, opacity: open ? 1 : 0 }}
      >
        <div className="container-nwc py-3 flex flex-col gap-3 text-sm">
          {nav.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="py-1 text-zinc-300 hover:text-amber-400 transition-colors"
            >
              {label}
            </Link>
          ))}

          {/* External refs */}
          <div className="mt-2 pt-2 border-t border-zinc-800 flex flex-wrap gap-x-4 gap-y-2 text-zinc-400">
            <a
              href="https://newworldcryptos.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Journal
            </a>
            <a
              href="https://newworldcryptos.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Community Hub
            </a>
            <a
              href="https://x.com/NewWorldCryptos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              @NewWorldCryptos
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
