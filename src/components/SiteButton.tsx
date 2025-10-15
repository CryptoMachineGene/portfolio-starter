type Props = { to: string; className?: string; children?: React.ReactNode };

export default function SiteButton({ to, className = "", children = "Site" }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className={["site-btn inline-flex items-center justify-center gap-2 rounded-xl h-[60px] w-[150px]", className].join(" ")}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M14 3h7v7h-2V6.41l-9.29 9.3l-1.42-1.42l9.3-9.29H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"/>
      </svg>
      <span>{children}</span>
    </a>
  );
}
