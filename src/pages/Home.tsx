
export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Hello — I’m Eugene (CryptoMachine Gene)</h1>
      <p className="text-gray-700">
        Blockchain developer and co‑founder of New World Cryptos®. This site hosts quick demos and links for recruiters —
        starting with the Proofmint crowdsale + NFT receipt dApp.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        <a href="/proofmint" className="rounded-2xl border p-6 hover:shadow-sm transition">
          <h2 className="text-xl font-semibold mb-1">Proofmint Demo →</h2>
          <p className="text-gray-600">Live walkthrough, screenshots, Etherscan links.</p>
        </a>
        <a href="/projects" className="rounded-2xl border p-6 hover:shadow-sm transition">
          <h2 className="text-xl font-semibold mb-1">Projects →</h2>
          <p className="text-gray-600">Solidity + Hardhat, Solana/Anchor, and UI templates.</p>
        </a>
      </div>
    </section>
  )
}
