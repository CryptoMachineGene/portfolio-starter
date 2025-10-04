
export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <article className="rounded-2xl border p-5 space-y-2">
          <h2 className="text-lg font-semibold">Proofmint</h2>
          <p className="text-gray-700">Full‑stack crowdsale with optional NFT receipts. React + Vite + Hardhat.</p>
          <a className="underline text-sm" href="https://github.com/CryptoMachineGene/proofmint-project" target="_blank" rel="noreferrer">GitHub</a>
        </article>
        <article className="rounded-2xl border p-5 space-y-2">
          <h2 className="text-lg font-semibold">Solana Hello World (Anchor)</h2>
          <p className="text-gray-700">Local test passed; next step: devnet deploy and minimal UI.</p>
          <a className="underline text-sm" href="https://github.com/CryptoMachineGene" target="_blank" rel="noreferrer">GitHub</a>
        </article>
        <article className="rounded-2xl border p-5 space-y-2">
          <h2 className="text-lg font-semibold">React + Tailwind UI Templates</h2>
          <p className="text-gray-700">Reusable components for dashboards and demos.</p>
          <a className="underline text-sm" href="https://github.com/CryptoMachineGene/react-tailwind-ui-templates" target="_blank" rel="noreferrer">GitHub</a>
        </article>
        <article className="rounded-2xl border p-5 space-y-2">
          <h2 className="text-lg font-semibold">Sakura (SKR) — ERC‑20</h2>
          <p className="text-gray-700">Hardhat tests for deployment, transfers, approvals, and delegated transfers.</p>
          <a className="underline text-sm" href="https://github.com/CryptoMachineGene" target="_blank" rel="noreferrer">GitHub</a>
        </article>
      </div>
    </section>
  )
}
