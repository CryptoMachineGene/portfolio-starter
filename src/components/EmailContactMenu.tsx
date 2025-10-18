// src/components/EmailContactMenu.tsx
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  email?: string; subject?: string; body?: string;
  label?: string; className?: string;
};

export default function EmailContactMenu({
  email = "gene@newworldcryptos.io",
  subject = "Hello Eugene",
  body = "Hi Eugene,\n\n",
  label = "Contact",
  className = "",
}: Props) {
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState<{left:number; top:number; width:number}>({left:0, top:0, width:0});
  const btnRef = useRef<HTMLButtonElement>(null);

  // measure button and place menu as FIXED so it's never clipped
  function place() {
    const b = btnRef.current?.getBoundingClientRect();
    if (!b) return;
    setPos({ left: Math.round(b.left), top: Math.round(b.bottom + 8), width: Math.round(b.width) });
  }

  useLayoutEffect(() => { if (open) place(); }, [open]);
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!btnRef.current) return;
      if (!open) return;
      const target = e.target as Node;
      if (!btnRef.current.contains(target)) setOpen(false);
    }
    function onScrollOrResize() { if (open) place(); }
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("scroll", onScrollOrResize, true);
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [open]);

  async function copy() {
    try { await navigator.clipboard.writeText(email); } catch {
      const t = document.createElement("input");
      t.value = email; t.style.position="fixed"; t.style.left="-9999px";
      document.body.appendChild(t); t.select(); document.execCommand("copy"); document.body.removeChild(t);
    }
    setOpen(false);
  }

  return (
    <div className={`inline-block ${className}`}>
      <button
        ref={btnRef}
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-medium
                   border border-[hsl(var(--brand))] text-white hover:bg-[hsl(var(--brand))] hover:text-black
                   focus:outline-none focus:ring-2 focus:ring-[hsl(var(--brand))]/70"
        aria-haspopup="menu"
        aria-expanded={open}
        type="button"
      >
        ✉️ {label}
      </button>

      {open && createPortal(
        <div
          role="menu"
          className="fixed z-[1000] rounded-xl border border-neutral-700 bg-[#111] p-1 shadow-lg"
          style={{ left: pos.left, top: pos.top, minWidth: Math.max(220, pos.width) }}
        >
          <MenuItem onClick={() => window.open(gmail, "_blank", "noopener")}>📧 Email via Gmail</MenuItem>
          <MenuItem onClick={() => window.open(outlook, "_blank", "noopener")}>📨 Email via Outlook</MenuItem>
          <MenuItem onClick={copy}>📋 Copy Address</MenuItem>
          <a
            role="menuitem"
            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
          >
            🖥️ Use default mail app
          </a>
        </div>,
        document.body
      )}
    </div>
  );
}

function MenuItem({ onClick, children }: React.PropsWithChildren<{ onClick: () => void }>) {
  return (
    <button
      onClick={onClick}
      role="menuitem"
      className="w-full text-left rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800"
      type="button"
    >
      {children}
    </button>
  );
}
