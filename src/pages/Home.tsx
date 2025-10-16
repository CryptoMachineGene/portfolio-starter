import { useNavigate } from "react-router-dom";
import CleanAvatar from "../components/CleanAvatar";

export default function Home() {
  const nav = useNavigate();

  const Card = ({ title, to, blurb }: { title: string; to: string; blurb: string }) => (
    <button
      onClick={() => nav(to)}
      className="text-left p-6 border rounded-2xl shadow-sm hover:shadow-md transition w-full"
    >
      <h2 className="font-semibold">{title}</h2>
      <p className="text-gray-400">{blurb}</p>
    </button>
  );

  return (
    <main className="container-nwc py-12 flex flex-col items-center text-center gap-10">
      {/* Hero / Profile section */}
      <section className="flex flex-col items-center gap-6">
        <CleanAvatar size={128} />
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Eugene McGrath</h1>

        <div className="text-neutral-300 max-w-prose space-y-3">
          <p>
            <strong>Blockchain Developer&nbsp;|&nbsp;Smart-Contract Engineer&nbsp;|&nbsp;Web3 Builder</strong>
          </p>
          <p>
            Focused on decentralized systems and real-world utility. I design, deploy, and test
            full-stack dApps using Solidity, Hardhat, Foundry, and React&nbsp;+&nbsp;TypeScript.
          </p>
          <p>
            Clean code, verifiable logic, and reliable results — engineering that speaks for itself.
          </p>
        </div>
      </section>

      {/* Project cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <Card
          title="Proofmint Demo →"
          to="/proofmint"
          blurb="Live walkthrough, screenshots, and Etherscan links."
        />
        <Card
          title="Projects →"
          to="/projects"
          blurb="Solidity + Hardhat, Solana/Anchor, and UI templates."
        />
      </section>
    </main>
  );
}
