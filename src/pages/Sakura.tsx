// src/pages/Sakura.tsx
import RepoButton from "../components/RepoButton";

export default function Sakura() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Sakura — ERC-20 Token</h1>
      <p className="text-gray-700">
        ERC-20 (SKR) with approve/transferFrom tests in Hardhat. Page will get a short demo,
        screenshots, and deployment notes.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>Repo:</strong>{" "}
          <a
            className="underline"
            href="https://github.com/CryptoMachineGene/sakura"
            target="_blank"
            rel="noreferrer"
          >
            github.com/CryptoMachineGene/sakura
          </a>
        </li>
        <li>
          <strong>Status:</strong> tests green; contracts organized; tasks scripted.
        </li>
        <li>
          <strong>Next steps:</strong> add ABI export + quickstart in README.
        </li>
      </ul>

      <div className="pt-2">
        <RepoButton to="https://github.com/CryptoMachineGene/sakura" className="mt-4" />
      </div>
    </section>
  );
}
