import ExternalLink from "../components/ExternalLink";

export default function NWCPage() {
  return (
    <main className="container-nwc py-12 space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">New World Cryptos®</h1>
        <p className="text-neutral-300 max-w-prose">
          A trademarked Private Membership Association publishing research, education, and tools at the
          frontier of crypto — built with a sovereignty-first ethos.
        </p>
        <p className="text-neutral-400 text-sm">
          Journal:{" "}
          <ExternalLink href="https://newworldcryptos.io/">newworldcryptos.io</ExternalLink>{" "}
          · Community Hub:{" "}
          <ExternalLink href="https://newworldcryptos.com/">newworldcryptos.com</ExternalLink>{" "}
          · X:{" "}
          <ExternalLink href="https://x.com/NewWorldCryptos">@NewWorldCryptos</ExternalLink>
        </p>
      </section>

      {/* What it is */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">What it is</h2>
          <p className="text-neutral-300">
            New World Cryptos® is a purpose-driven platform and PMA composed of:
          </p>
          <ul className="list-disc pl-6 text-neutral-300 space-y-2">
            <li>
              <strong>Journal</strong> — long-form analysis, educational series, and weekly signals (
              <ExternalLink href="https://newworldcryptos.io/">newworldcryptos.io</ExternalLink>).
            </li>
            <li>
              <strong>Community Hub</strong> — the original member space and discussions (
              <ExternalLink href="https://newworldcryptos.com/">newworldcryptos.com</ExternalLink>).
            </li>
          </ul>
        </div>

        {/* Roles */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Roles & Collaboration</h2>
          <p className="text-neutral-300">
            <strong>The Decentralized Dreamer</strong> is the original creator and architect of
            New World Cryptos® — leading design, brand, legal formation, site architecture, and editorial
            voice. She writes and narrates <em>Crypto Current</em> and edits/structures all Journal content.
          </p>
          <p className="text-neutral-300">
            <strong>Eugene McGrath</strong> co-leads the platform. He authors <em>Degen Dev Diaries</em>,
            curates research for <em>Crypto Current</em>, and contributes smart-contract and frontend engineering.
          </p>
        </div>
      </section>

      {/* Series links */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-xl font-semibold">Crypto Current — Weekly Series</h3>
          <p className="mt-2 text-neutral-300">
            Written and narrated by The Decentralized Dreamer, with research curated by Eugene.
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            <ExternalLink href="https://newworldcryptos.io/tag/cc">Browse the archive</ExternalLink>
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="text-xl font-semibold">Degen Dev Diaries — Technical Series</h3>
          <p className="mt-2 text-neutral-300">
            Written by Eugene; edited and structured for publication by The Decentralized Dreamer.
          </p>
          <p className="mt-3 text-sm text-neutral-400">
            <ExternalLink href="https://newworldcryptos.io/tag/ddd">See all editions</ExternalLink>
          </p>
        </div>
      </section>

      {/* Footer note */}
      <section className="text-neutral-500 text-sm">
        © {new Date().getFullYear()} New World Cryptos®
      </section>
    </main>
  );
}
