import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ExternalLink from "./ExternalLink";

type Props = {
  compact?: boolean;
  bgClass?: string;
  borderClass?: string;
};

export default function Footer({ compact, bgClass, borderClass }: Props) {
  const wrapper = [
    "mt-16",
    borderClass ?? "border-t border-zinc-800",
    bgClass ?? "",
  ].join(" ");

  // subtle fade as user scrolls (optional)
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0.8, 1]);

  // fade-in on mount
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.footer
      style={{ opacity }}
      initial={{ opacity: 0, y: 10 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={wrapper}
    >
      <div
        className={
          `container-nwc ${compact ? "py-4" : "py-8"} ` +
          "flex flex-col md:flex-row gap-6 md:items-center md:justify-between"
        }
      >
        {/* Brand + tiny nav */}
        <div className="space-y-1">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()}{" "}
            <strong className="text-yellow-400">New World Cryptos®</strong>
          </p>
          <nav className="flex gap-4 text-sm">
            <Link to="/" className="text-neutral-400 hover:text-yellow-300">
              Home
            </Link>
            <Link to="/nwc" className="text-neutral-400 hover:text-yellow-300">
              New World Cryptos®
            </Link>
            <Link
              to="/founders"
              className="text-neutral-400 hover:text-yellow-300"
            >
              Founders
            </Link>
            <Link
              to="/acknowledgments"
              className="text-neutral-400 hover:text-yellow-300"
            >
              Acknowledgments
            </Link>
          </nav>
        </div>

        {/* External references */}
        <div className="text-sm text-neutral-400 flex flex-wrap gap-x-4 gap-y-2">
          <ExternalLink href="https://newworldcryptos.io/">
            Journal
          </ExternalLink>
          <ExternalLink href="https://newworldcryptos.com/">
            Community Hub
          </ExternalLink>
          <ExternalLink href="https://x.com/NewWorldCryptos">
            @NewWorldCryptos
          </ExternalLink>
        </div>

        {/* Back to top */}
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1, color: "#facc15" }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="text-sm text-neutral-400 hover:text-yellow-300"
        >
          ↑ Back to top
        </motion.button>
      </div>
    </motion.footer>
  );
}
