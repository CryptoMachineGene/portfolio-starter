import React from "react";

type Props = {
  email?: string;
  subject?: string;
  body?: string;
  className?: string;          // wrap container classes
  primary?: "gmail" | "outlook"; // which button uses brand styling
  showCopy?: boolean;
};

export default function EmailButtons({
  email = "gene@newworldcryptos.io",
  subject = "Hello Eugene",
  body = "Hi Eugene,\n\n",
  className = "",
  primary = "gmail",
  showCopy = true,
}: Props) {
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const outlookCompose = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(
    email
  )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const baseBtn =
    "rounded-2xl px-4 py-2 text-sm font-medium focus:outline-none transition";
  const brandBtn =
    "border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))] hover:text-black focus:ring-2 focus:ring-[hsl(var(--brand))]/70";
  const neutralBtn =
    "border border-neutral-600 text-neutral-200 hover:bg-neutral-800 focus:ring-2 focus:ring-neutral-700";

  const GmailBtn = (
    <button
      onClick={() => window.open(gmailCompose, "_blank", "noopener")}
      className={`${baseBtn} ${primary === "gmail" ? brandBtn : neutralBtn}`}
      aria-label="Email via Gmail"
      type="button"
    >
      Email via Gmail
    </button>
  );

  const OutlookBtn = (
    <button
      onClick={() => window.open(outlookCompose, "_blank", "noopener")}
      className={`${baseBtn} ${primary === "outlook" ? brandBtn : neutralBtn}`}
      aria-label="Email via Outlook"
      type="button"
    >
      Email via Outlook
    </button>
  );

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {GmailBtn}
      {OutlookBtn}

      {showCopy && (
        <button
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(email);
            } catch {
              // no-op
            }
          }}
          className="rounded-2xl px-3 py-2 text-xs border border-neutral-600 text-neutral-200 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700"
          aria-label="Copy email address"
          title="Copy email address"
          type="button"
        >
          Copy Address
        </button>
      )}

      {/* Hidden mailto fallback for desktop clients */}
      <a
        href={`mailto:${email}?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(body)}`}
        className="sr-only"
        aria-hidden="true"
        tabIndex={-1}
      >
        Mailto fallback
      </a>
    </div>
  );
}
