import RepoButton from "../components/RepoButton";

export default function SolanaHello() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Solana Hello — Anchor Program</h1>
      <p className="text-gray-700">
        A simple Anchor “Hello World” demonstrating how on-chain logic and client scripts interact.
        The test suite validates deployment, instruction handling, and transaction confirmation on localnet.
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
          <strong>Status:</strong> Local tests passed ✅ — next: devnet deploy.
        </li>
        <li>
          <strong>Stack:</strong> Rust + Anchor
        </li>
      </ul>

      <div className="pt-2">
        <RepoButton
          to="https://github.com/CryptoMachineGene/solana-hello-world"
          className="mt-4"
        />
        {/*
          <iframe
            className="w-full aspect-video rounded-xl border mt-6"
            src="https://www.youtube.com/embed/XXXXXXXX"
            title="Solana Hello Demo"
            allowFullScreen
          />
        */}
      </div>
    </section>
  );
}
