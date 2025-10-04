import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Link to="#/proofmint">
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold">Proofmint Demo →</h2>
          <p className="text-gray-600">Live walkthrough, screenshots, Etherscan links.</p>
        </div>
      </Link>

      <Link to="#/projects">
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="font-semibold">Projects →</h2>
          <p className="text-gray-600">Solidity + Hardhat, Solana/Anchor, and UI templates.</p>
        </div>
      </Link>
    </div>
  )
}
