import React from "react";
import { useNavigate } from "react-router-dom";
import proofmintCover from "../assets/projects/proofmint-cover.svg";
import sakuraCover from "../assets/projects/sakura-cover.svg";
import solanaCover from "../assets/projects/solana-hello-cover.svg";

export default function Projects() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Proofmint",
      description:
        "Web3 proof-of-ownership dApp demonstrating NFT minting and verification with Next.js and Tailwind.",
      site: "https://cryptomachinegene.github.io/proofmint-project/",
      demo: "/under-construction", // ✅ Correct path
      code: "https://github.com/CryptoMachineGene/proofmint-project",
      image: proofmintCover,
    },
    {
      title: "Sakura Token",
      description:
        "ERC-20 token implementation with a simple frontend for minting and viewing balances on Ethereum testnets.",
      code: "https://github.com/CryptoMachineGene/sakura",
      image: sakuraCover,
    },
    {
      title: "Solana Hello",
      description:
        "Minimal Solana program built with the Anchor framework demonstrating initialization and account interaction.",
      code: "https://github.com/CryptoMachineGene/solana-hello-world",
      image: solanaCover,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="card flex flex-col bg-[#0b0a0d] rounded-2xl p-5 shadow-md transition hover:shadow-lg overflow-hidden"
        >
          <img
            src={project.image}
            alt={`${project.title} cover`}
            className="rounded-xl aspect-[16/9] w-full h-auto mb-3 transition-transform duration-300 hover:-translate-y-0.5"
            loading="lazy"
          />

          <h3 className="card-title mt-1 text-yellow-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
            {project.title}
          </h3>
          <p className="card-description mb-2 text-sm text-gray-300">
            {project.description}
          </p>

          <div className="flex justify-center gap-3 mt-4">
            {project.demo && (
              <button
                onClick={() => navigate(project.demo)}
                className="px-4 py-2 border border-yellow-400 text-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-black transition"
              >
                Demo
              </button>
            )}
            {project.site && (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-yellow-400 text-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-black transition"
              >
                Site
              </a>
            )}
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-yellow-400 text-yellow-300 rounded-lg hover:bg-yellow-400 hover:text-black transition"
            >
              Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
