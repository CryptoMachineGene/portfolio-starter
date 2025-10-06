import { useNavigate } from "react-router-dom";

export default function Projects() {
  const nav = useNavigate();
  const Card = ({ title, to, blurb }: { title: string; to: string; blurb: string }) => (
    <button
      onClick={() => nav(to)}
      className="text-left p-6 border rounded-2xl shadow-sm hover:shadow-md transition w-full"
    >
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm opacity-80 mt-1">{blurb}</p>
    </button>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card title="Proofmint (Crowdsale + NFT)" to="/proofmint" blurb="Open project" />
      <Card title="Solana Hello (Anchor)"       to="/solana-hello" blurb="Open project" />
      <Card title="Sakura ERC-20"               to="/sakura" blurb="Open project" />
    </div>
  );
}
