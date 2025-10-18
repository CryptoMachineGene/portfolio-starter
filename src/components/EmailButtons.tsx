// src/components/EmailButtons.tsx
import React, { useState } from "react";

type Props = {
  email?: string;
  subject?: string;
  body?: string;
  className?: string;            // wrapper classes
  primary?: "gmail" | "outlook"; // which gets brand styling
  showCopy?: boolean;
  showMailtoLink?: boolean;      // visible default mail app link
};

export default function EmailButtons({
  email = "gene@newworldcryptos.io",
  subject = "Hello Eugene",
  body = "Hi Eugene,\n\n",
  className = "",
  primary = "gmail",
  showCopy = true,
  showMailtoLink = true,
}: Props) {
  const gmailCompose =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}` +
    `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const outlookCompose =
    `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}` +
    `&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const [copied, setCopied] = useState(false);

  const baseBtn =
    "rounded-2xl px-4 py-2 text-sm font-medium focus:outline-none transition";
  const brandBtn =
    "border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))] hover:text-black focus:ring-2 focus:ring-[hsl(var(--brand))]/70";
  const neutralBtn =
    "border border-neutral-600 text-neutral-200 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-700";

  async function copyEmail() {
    const text = email;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
      return;
    } catch {
      // Fallback for stricter browsers
      const temp = document.createElement("input");
      temp.value = text;
      temp.style.position = "fixed";
      temp.style.left = "-9999px";
      document.body.appendChild(temp);
      temp.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } finally {
        document.body.removeChild(temp);
      }
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <button
        onClick={() => window.open(gmailCompose, "_blank", "noopener")}
        className={`${baseBtn} ${primary === "gmail" ? brandBtn : neutralBtn}`}
        aria-label="Email via Gmail"
        type="button"
      >
        Email via Gmail
      </button>

      <button
        onClick={() => window.open(outlookCompose, "_blank", "noopener")}
        className={`${baseBtn} ${primary === "outlook" ? brandBtn : neutralBtn}`}
        aria-label="Email via Outlook"
        type="button"
      >
        Email via Outlook
      </button>

      {showCopy && (
        <button
          onClick={copyEmail}
          className="rounded-2xl px-3 py-2 text-xs border border-neutral-600 text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700"
          aria-label="Copy email address"
          title="Copy email address"
          type="button"
        >
          {copied ? "Copied!" : "Copy Address"}
        </button>
      )}

      {showMailtoLink && (
        <a
          href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
          className="text-xs text-neutral-300 underline decoration-neutral-600/70 underline-offset-4 hover:text-white"
          rel="noopener"
        >
          Use default mail app
        </a>
      )}
    </div>
  );
}
