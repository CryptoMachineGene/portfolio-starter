import React, { useState } from "react";

type Props = {
  email?: string;
  subject?: string;
  body?: string;
  className?: string;
  primary?: "gmail" | "outlook";
  showMailtoLink?: boolean;
};

export default function EmailButtonsIcon({
  email = "gene@newworldcryptos.io",
  subject = "Hello Eugene",
  body = "Hi Eugene,\n\n",
  className = "",
  primary = "gmail",
  showMailtoLink = true,
}: Props) {
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const [copied, setCopied] = useState(false);

  const base = "inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm focus:outline-none transition";
  const brand = "border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))] hover:text-black focus:ring-2 focus:ring-[hsl(var(--brand))]/70";
  const neutral = "border border-neutral-600 text-neutral-200 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-700";

  async function copy() {
    try { await navigator.clipboard.writeText(email); }
    catch {
      const i = document.createElement("input");
      i.value = email; i.style.position="fixed"; i.style.left="-9999px"; document.body.appendChild(i);
      i.select(); document.execCommand("copy"); document.body.removeChild(i);
    }
    setCopied(true); setTimeout(()=>setCopied(false), 1200);
  }

  const Icon = ({path}:{path:string}) => (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d={path}/></svg>
  );

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <button onClick={() => window.open(gmail, "_blank", "noopener")}
              className={`${base} ${primary==="gmail" ? brand : neutral}`} aria-label="Email via Gmail" type="button">
        <Icon path="M20 4H4a2 2 0 0 0-2 2v12h2V8l8 5l8-5v10h2V6a2 2 0 0 0-2-2Zm-8 6L4 6h16l-8 4Z"/>
        Gmail
      </button>

      <button onClick={() => window.open(outlook,"_blank","noopener")}
              className={`${base} ${primary==="outlook" ? brand : neutral}`} aria-label="Email via Outlook" type="button">
        <Icon path="M3 6a2 2 0 0 1 2-2h7v2H5v12h7v2H5a2 2 0 0 1-2-2V6Zm9 0h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9V6Zm2 3v6l6-3l-6-3Z"/>
        Outlook
      </button>

      <button onClick={copy}
              className={`${base} ${neutral}`} aria-label="Copy email address" type="button">
        <Icon path="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v14h13a2 2 0 0 0 2-2V5Zm-2 2v12H8V7h9Z"/>
        {copied ? "Copied!" : "Copy"}
      </button>

      {showMailtoLink && (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
           className="text-xs text-neutral-300 underline decoration-neutral-600/70 underline-offset-4 hover:text-white">
          Use default mail app
        </a>
      )}
    </div>
  );
}
