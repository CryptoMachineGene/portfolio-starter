import * as React from "react";

// Allow all normal <a> props (title, aria-*, className, etc.)
type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

export default function ExternalLink({ href, children, rel, target, ...rest }: Props) {
  // ensure safe defaults but let caller extend/override
  const safeRel = rel ? `${rel} noopener noreferrer`.trim() : "noopener noreferrer";
  const tgt = target ?? "_blank";

  return (
    <a href={href} target={tgt} rel={safeRel} {...rest}>
      {children}
    </a>
  );
}
