import ExternalLink from "../components/ExternalLink";

export default function AcknowledgmentsPage() {
  return (
    <main className="container-nwc py-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Acknowledgments</h1>
        <p className="text-neutral-300 max-w-prose">
          Clear credit for the collaborative work featured in this portfolio.
        </p>
      </header>

      <section className="prose prose-invert max-w-none">
        <p>
          This portfolio includes projects and publications created in collaboration with{" "}
          <strong>New World Cryptos®</strong>. I want to explicitly recognize{" "}
          <strong>The Decentralized Dreamer</strong> as the original creator and architect of
          New World Cryptos® — responsible for platform design, legal formation, brand identity, site
          architecture, and editorial leadership.
        </p>
        <p>
          She writes and narrates the <em>Crypto Current</em> series and edits/structures all Journal
          content for publication. My role includes curating research for <em>Crypto Current</em>,
          authoring <em>Degen Dev Diaries</em>, and contributing engineering across Solidity/Hardhat/Foundry
          and frontend stacks. Today, we co-lead the platform together.
        </p>
        <p>
          Learn more at{" "}
          <ExternalLink href="https://newworldcryptos.io/">newworldcryptos.io</ExternalLink> (Journal) and{" "}
          <ExternalLink href="https://newworldcryptos.com/">newworldcryptos.com</ExternalLink> (Community Hub).
        </p>
      </section>

      <section className="border-t border-white/10 pt-6 text-neutral-400 text-sm">
        <p>
          <em>Crypto Current</em> — written, edited, and narrated by The Decentralized Dreamer; research curated by Eugene.
        </p>
        <p>
          <em>Degen Dev Diaries</em> — written by Eugene; edited and structured for publication by The Decentralized Dreamer.
        </p>
      </section>
    </main>
  );
}
