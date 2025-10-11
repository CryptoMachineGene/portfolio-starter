type Props = {
  /** External live URL */
  to: string;
  /** Text (defaults to "Site") */
  label?: string;
  /** Extra classes (optional) */
  className?: string;
};

export default function SiteButton({ to, label = "Site", className = "" }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${label} (opens in new tab)`}
      className={[
        // base: dark, subtle border
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ease-out",
        "bg-[#1c1c1c] text-[#e9e9e9] border border-[#2a2a2a]",
        // hover: just a bit brighter + gold outline (no white flash)
        "hover:bg-[#232323] hover:border-[#d4b85f] hover:shadow-[0_0_0_2px_rgba(212,184,95,0.25)_inset]",
        // active press
        "active:translate-y-0.5",
        className,
      ].join(" ")}
    >
      {/* external-link icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="16"
        height="16"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
        <path fill="currentColor" d="M5 5h7v2H7v10h10v-5h2v7H5V5z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
