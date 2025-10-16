type Props = { size?: number; className?: string; src?: string };
export default function NwcAvatar({
  size = 128,
  className,
  src = "/img/gene-avatar.png",
}: Props) {
  return (
    <div
      className={`relative ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <img
        src={`${src}?v=${Date.now()}`}  // bust cache
        alt="Eugene McGrath"
        className="h-full w-full rounded-full object-cover shadow-lg select-none"
        draggable={false}
      />
    </div>
  );
}
