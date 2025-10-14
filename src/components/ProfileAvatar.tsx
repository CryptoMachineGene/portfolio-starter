type Props = { size?: number; className?: string; ring?: boolean };
export default function ProfileAvatar({ size = 112, className = "", ring = true }: Props) {
  return (
    <img
      src="/img/gene-avatar.png"
      alt="Profile photo of Eugene McGrath"
      width={size}
      height={size}
      className={[
        "rounded-full object-cover select-none",
        ring ? "ring-2 ring-offset-2 ring-[hsl(var(--brand))] ring-offset-black" : "",
        className,
      ].join(" ")}
      draggable={false}
    />
  );
}
