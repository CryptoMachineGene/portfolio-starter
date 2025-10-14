import ProfileAvatar from "../components/ProfileAvatar";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="container-nwc py-10">
      <section className="grid gap-8 md:grid-cols-[auto,1fr] items-start">
        <ProfileAvatar size={120} />

        <div className="space-y-5">
          <h1 className="text-3xl font-bold tracking-tight">About</h1>

          <p className="text-neutral-300">
            I’m <strong>Eugene McGrath</strong> — blockchain developer and co-founder of
            <strong> New World Cryptos®</strong>. I write <em>Degen Dev Diaries</em> and
            co-lead the platform alongside my partner,
            <strong> The Decentralized Dreamer</strong>.
          </p>

          <p className="text-neutral-300">
            <strong>The Decentralized Dreamer</strong> is the original creator and platforms
            architect of <strong>New World Cryptos®</strong> — she designed the brand, built the
            sites, structured the PMA, and leads editorial. She also <em>writes, edits, and
            narrates</em> the <strong>Crypto Current</strong> series. I curate research for
            Crypto Current and collaborate with her across the publication workflow. I want to be
            explicit: she deserves the lion’s share of credit for the platforms and the editorial voice.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold">Links</h2>
            <ul className="list-disc pl-6 space-y-1 text-neutral-300">
              <li>
                <a className="underline" href="https://newworldcryptos.io" target="_blank" rel="noreferrer">
                  New World Cryptos® Journal
                </a>
              </li>
              <li>
                <a className="underline" href="https://x.com/CryptoMachineG" target="_blank" rel="noreferrer">
                  CryptoMachine Gene on X
                </a>
              </li>
              <li>
                <a className="underline" href="https://github.com/CryptoMachineGene" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="underline" href="https://www.linkedin.com/in/eugenemcgrath" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <Link to="/founders" className="underline">
                  Meet the Founders →
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-2 border-t border-white/10">
            <p className="text-neutral-400 text-sm">
              Credit balance by design: <em>Degen Dev Diaries</em> is written by Eugene McGrath
              and edited/structured by The Decentralized Dreamer. <em>Crypto Current</em> is
              written, edited, and narrated by The Decentralized Dreamer, with research curated by
              Eugene McGrath. All work is co-created for the New World Cryptos® Journal.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
