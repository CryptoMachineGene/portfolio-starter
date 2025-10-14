type Props = {
  to: string;
  className?: string;
  label?: string;
};

const base =
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium " +
  "transition border border-[hsl(var(--brand))] " +
  "bg-transparent text-white hover:bg-[hsl(var(--brand))] hover:text-black " +
  "focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]/70";

export default function SiteButton({ to, className = "", label = "Site" }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className={[
        "site-btn inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ease-out",
        // Base: gold fill, black text
        "bg-[#d4b85f] text-[#0d0d0d] border-2 border-[#d4b85f]",
        // Hover: stay gold, keep BLACK text/icon (no white)
        "hover:bg-[#d8bf70] hover:!text-[#0d0d0d]",
        // Focus ring for a11y
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b85f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0c10]",
        className,
      ].join(" ")}
      aria-label={`${label} (opens in new tab)`}
    >
      {/* link icon (follows text color via currentColor) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16" height="16" viewBox="0 0 24 24"
        aria-hidden="true" focusable="false"
      >
        <path fill="currentColor"
          d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5v2H7v10h10v-3h2v5H5V5z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
