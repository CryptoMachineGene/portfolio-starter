type Props = {
  /** External repo URL */
  to: string;
  /** Extra classes if you need spacing tweaks */
  className?: string;
  /** Button label (defaults to "Code") */
  label?: string;
};

export default function RepoButton({ to, className = "", label = "Code" }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className={[
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 ease-out",
        // Base: matte black background, gold text and border
        "border-2 border-[#d4b85f] bg-[#0d0d0d] text-[#d4b85f]",
        "shadow-[0_2px_0_0_rgba(212,184,95,0.35)]",
        // Hover: fill gold, switch text/icon to black
        "hover:bg-[#d4b85f] hover:text-[#0d0d0d] hover:border-[#d4b85f]",
        // Active press
        "active:translate-y-0.5 active:shadow-none",
        className,
      ].join(" ")}
      aria-label={`${label} on GitHub`}
    >
      {/* GitHub mark */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.8.06 1.22.83 1.22.83.71 1.22 1.86.87 2.32.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.83-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83A7.66 7.66 0 0 1 8 4.58c.68 0 1.36.09 2 .26 1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.52.57.83 1.29.83 2.17 0 3.09-1.86 3.76-3.64 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.45.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"
        />
      </svg>
      <span>{label}</span>
    </a>
  );
}
