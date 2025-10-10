import RepoButton from "../components/RepoButton";

export default function Sakura() {
  return (
    <section className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Sakura — ERC-20 Token</h1>

      <p className="text-gray-700">
        Sakura (SKR) is a custom ERC-20 token built with Solidity and Hardhat.  
        The project implements full <code>transfer</code>, <code>approve</code>, and 
        <code> transferFrom</code> logic, supported by a comprehensive test suite.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Repo:</strong>{" "}
          <a
            className="underline"
            href="https://github.com/CryptoMachineGene/first-crypto"
            target="_blank"
            rel="noreferrer"
          >
            github.com/CryptoMachineGene/first-crypto
          </a>
        </li>
        <li>
          <strong>Framework:</strong> Solidity + Hardhat
        </li>
        <li>
          <strong>Status:</strong> Contract tested ✅ — future integration with Proofmint crowdsale planned.
        </li>
      </ul>

      <p className="text-sm text-gray-600">
        Future roadmap: integrate Sakura into the Proofmint crowdsale as an on-chain
        asset for cross-project interoperability.
      </p>

      <div className="pt-2">
        <RepoButton
          href="https://github.com/CryptoMachineGene/first-crypto"
          className="mt-2"
        />
        {/*
          <iframe
            className="w-full aspect-video rounded-xl border mt-6"
            src="https://www.youtube.com/embed/XXXXXXXX"
            title="Sakura Token Demo"
            allowFullScreen
          />
        */}
      </div>
    </section>
  );
}
