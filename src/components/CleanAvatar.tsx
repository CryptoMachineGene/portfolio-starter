type Props = { size?: number; className?: string; src?: string };

export default function CleanAvatar({
  size = 128,
  className,
  src = "/img/gene-avatar.png",
}: Props) {
  return (
    <div
      className={`nwc-avatar relative isolate ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <div className="h-full w-full rounded-full overflow-hidden shadow-lg">
        <img
          src={src}
          alt="Eugene McGrath"
          className="block h-full w-full object-cover select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
