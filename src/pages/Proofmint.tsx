import RepoButton from "../components/RepoButton";

export default function Proofmint() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Proofmint — Crowdsale + NFT Receipt</h1>
      <p className="text-gray-700">
        v0.9 demo complete: contracts verified, frontend flow working, logs updated (Oct 2, 2025).
        This page will embed screenshots, a live demo link, and the Sepolia tx log.
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Repo:</strong>{" "}
          <a
            className="underline"
            href="https://github.com/CryptoMachineGene/proofmint-project"
            target="_blank"
            rel="noreferrer"
          >
            github.com/CryptoMachineGene/proofmint-project
          </a>
        </li>
        <li>
          <strong>Latest tag:</strong> <code>v0.9-demo</code>
        </li>
        <li>
          <strong>Next steps:</strong> add live link, ABIs, and short demo script.
        </li>
      </ul>

      <div className="pt-2">
        <RepoButton
         to="https://github.com/CryptoMachineGene/proofmint-project"
         className="mt-4"
       />
        {/*
          <iframe
            className="w-full aspect-video rounded-xl border mt-6"
            src="https://www.youtube.com/embed/XXXXXXXX"
            title="Proofmint Demo"
            allowFullScreen
          />
          */}
      </div>
    </section>
  );
}
