import RepoButton from "../components/RepoButton";

export default function SolanaHello() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Solana Hello (Anchor)</h1>
      <p className="text-gray-700">
        A simple Anchor “Hello World” program demonstrating how on-chain logic and
        client scripts interact. The test suite validates program deployment,
        instruction handling, and transaction confirmation on localnet.
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Repo:</strong>{" "}
          <a
            className="underline"
            href="https://github.com/CryptoMachineGene/solana-hello-world"
            target="_blank"
            rel="noreferrer"
          >
            github.com/CryptoMachineGene/solana-hello-world
          </a>
        </li>
        <li>
          <strong>Status:</strong> Local tests passed; next step: devnet deploy.
        </li>
        <li>
          <strong>Stack:</strong> Rust + Anchor
        </li>
      </ul>

      <div className="pt-4">
        <RepoButton href="https://github.com/CryptoMachineGene/solana-hello-world" />
      </div>
    </section>
  );
}
