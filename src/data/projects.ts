export type Project = {
  key: "proofmint" | "solana-hello" | "sakura";
  title: string;
  blurb: string;      // ← use this (not `description`)
  route: string;
  repo: string;
  live?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    key: "proofmint",
    title: "Proofmint — Crowdsale + NFT Receipt",
    blurb: "Full-stack token crowdsale + NFT receipt dApp (Hardhat, Solidity, React).",
    route: "/proofmint",
    repo: "https://github.com/CryptoMachineGene/proofmint-project",
    live: "https://cryptomachinegene.github.io/proofmint-project/", // ← now live
    featured: true,
  },
  {
    key: "solana-hello",
    title: "Solana Hello — Anchor Program",
    blurb: "Minimal Anchor ‘Hello World’ with tests, validating build + localnet tx execution.",
    route: "/solana-hello",
    repo: "https://github.com/CryptoMachineGene/solana-hello-world",
    featured: true,
  },
  {
    key: "sakura",
    title: "Sakura — ERC-20 Token",
    blurb: "Custom ERC-20 (SKR) with transfer/approve/transferFrom and a comprehensive Hardhat test suite.",
    route: "/sakura",
    repo: "https://github.com/CryptoMachineGene/sakura",
    featured: true,
  },
];
