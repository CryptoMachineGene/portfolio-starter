type Props = { compact?: boolean; bgClass?: string; borderClass?: string }

export default function SiteFooter({
  compact = false,
  bgClass = "bg-gray-900",
  borderClass = "border-t",
}: Props) {
  return (
    <footer className={`${compact ? "mt-0" : "mt-16"} ${borderClass} ${bgClass} text-gray-400`}>
      <div className="container-nwc py-6 text-xs flex flex-col gap-2">
        <p>© {new Date().getFullYear()} Eugene McGrath · Built with React + Tailwind</p>
        <a href="/" className="text-sm text-gray-200 hover:underline">← Back to Home</a>
      </div>
    </footer>
  );
}
