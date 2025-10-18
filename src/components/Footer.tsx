import { Link } from "react-router-dom";

// If you prefer, keep using your ExternalLink component:
import ExternalLink from "./ExternalLink";

type Props = {
  compact?: boolean;              // tighter vertical padding (good for Resume)
  bgClass?: string;               // override background (e.g., "bg-[#0b0c10]")
  borderClass?: string;           // override border (e.g., "border-t border-gray-800")
};

export default function Footer({ compact, bgClass, borderClass }: Props) {
  const wrapper = [
    "mt-16",                       // keep your top margin
    borderClass ?? "border-t border-zinc-800",
    bgClass ?? "",                 // default no extra bg (parent handles it)
  ].join(" ");

  return (
    <footer className={wrapper}>
      <div
        className={
          `container-nwc ${compact ? "py-4" : "py-8"} ` +
          "flex flex-col md:flex-row gap-6 md:items-center md:justify-between"
        }
      >
        {/* Brand + tiny nav */}
        <div className="space-y-1">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} <strong>New World Cryptos®</strong>
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/" className="text-neutral-400 hover:text-white">
              Home
            </Link>
            <Link to="/nwc" className="text-neutral-400 hover:text-white">
              New World Cryptos®
            </Link>
            <Link to="/founders" className="text-neutral-400 hover:text-white">
              Founders
            </Link>
            <Link to="/acknowledgments" className="text-neutral-400 hover:text-white">
              Acknowledgments
            </Link>
          </nav>
        </div>

        {/* External references */}
        <div className="text-sm text-neutral-400 flex flex-wrap gap-x-4 gap-y-2">
          <ExternalLink href="https://newworldcryptos.io/">Journal</ExternalLink>
          <ExternalLink href="https://newworldcryptos.com/">Community Hub</ExternalLink>
          <ExternalLink href="https://x.com/NewWorldCryptos">@NewWorldCryptos</ExternalLink>
        </div>

        {/* Back to top (no routing) */}
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-neutral-400 hover:text-white"
        >
          ↑ Back to top
        </button>
      </div>
    </footer>
  );
}
