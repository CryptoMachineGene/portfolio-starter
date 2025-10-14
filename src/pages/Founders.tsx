import ProfileAvatar from "../components/ProfileAvatar";

export default function Founders() {
  return (
    <main className="container-nwc py-12 space-y-12">
      {/* Title */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Meet the Founders</h1>
        <p className="text-neutral-300 max-w-prose mx-auto">
          The minds and hands behind <strong>New World Cryptos®</strong> — a sovereign-first
          platform built on integrity, precision, and purpose.
        </p>
      </section>

      {/* Founders Grid */}
      <section className="grid md:grid-cols-2 gap-10 items-start">
        {/* The Decentralized Dreamer */}
        <div className="space-y-5 text-neutral-300">
          <ProfileAvatar size={120} />
          <h2 className="text-2xl font-semibold">The Decentralized Dreamer</h2>
          <p>
            <strong>The Decentralized Dreamer</strong> is the creator, platforms architect, and
            original visionary of <strong>New World Cryptos®</strong>. She designed the brand from
            the ground up — building its legal structure, site architecture, visual identity, and
            overall mission long before the Journal launched.
          </p>
          <p>
            She leads the platform’s design, strategy, and editorial direction, and is the
            <em> writer, editor, and narrator</em> of the{" "}
            <strong>Crypto Current</strong> series. Her multidisciplinary background spans wellness,
            brand strategy, and systems design — all converging in the sovereign-first ethos that
            defines New World Cryptos® today.
          </p>
        </div>

        {/* Eugene McGrath */}
        <div className="space-y-5 text-neutral-300">
          <ProfileAvatar size={120} />
          <h2 className="text-2xl font-semibold">Eugene McGrath</h2>
          <p>
            <strong>Eugene McGrath</strong> is a blockchain developer, researcher, and writer who
            joined <strong>New World Cryptos®</strong> after its foundational years to co-lead the
            Journal. He authors the <em>Degen Dev Diaries</em> series and curates research for{" "}
            <strong>Crypto Current</strong>, contributing deep technical insight and blockchain
            development expertise.
          </p>
          <p>
            His background includes military, manufacturing, and computer science, with formal
            blockchain developer training through EatTheBlocks and Dapp University. He’s also a
            co-founder of the <strong>New World Cryptos®</strong> PMA and helps advance the project’s
            technical roadmap.
          </p>
        </div>
      </section>

      {/* Shared credit block */}
      <section className="border-t border-white/10 pt-8 text-neutral-400 text-sm space-y-2 max-w-prose mx-auto">
        <p>
          <em>Crypto Current</em> is written, edited, and narrated by The Decentralized Dreamer,
          with research curated by Eugene McGrath.
        </p>
        <p>
          <em>Degen Dev Diaries</em> is written by Eugene McGrath and edited and structured for
          publication by The Decentralized Dreamer.
        </p>
        <p>
          Both series are co-created under the <strong>New World Cryptos®</strong> brand — a
          sovereign, private membership association dedicated to education, resilience, and
          independence.
        </p>
      </section>
    </main>
  );
}
