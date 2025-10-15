type Props = { to: string; className?: string; children?: React.ReactNode };

export default function RepoButton({ to, className = "", children = "Code" }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      rel="noreferrer noopener"
      className={["repo-btn inline-flex items-center justify-center gap-2 rounded-xl h-[60px] w-[150px]", className].join(" ")}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18c-.46-1.17-1.12-1.48-1.12-1.48c-.91-.62.07-.61.07-.61c1 .07 1.53 1.04 1.53 1.04c.9 1.53 2.36 1.09 2.94.83c.09-.66.35-1.1.63-1.35c-2.22-.25-4.55-1.11-4.55-4.95c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95c.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
      </svg>
      <span>{children}</span>
    </a>
  );
}
