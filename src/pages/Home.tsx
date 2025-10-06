import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  const Card = ({ title, to, blurb }: { title: string; to: string; blurb: string }) => (
    <button
      onClick={() => nav(to)}
      className="text-left p-6 border rounded-2xl shadow-sm hover:shadow-md transition w-full"
    >
      <h2 className="font-semibold">{title}</h2>
      <p className="text-gray-600">{blurb}</p>
    </button>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Proofmint Demo →" to="/proofmint" blurb="Live walkthrough, screenshots, Etherscan links." />
      <Card title="Projects →"       to="/projects"  blurb="Solidity + Hardhat, Solana/Anchor, and UI templates." />
    </div>
  );
}
