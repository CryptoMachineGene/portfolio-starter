import React from "react";
import proofmintCover from "../assets/projects/proofmint-cover.svg";
import sakuraCover from "../assets/projects/sakura-cover.svg";
import solanaCover from "../assets/projects/solana-hello-cover.svg";

export default function Projects() {
  const proofmint = {
    demo: "https://proofmint-demo.vercel.app",
    site: "https://proofmint-demo.vercel.app",
    code: "https://github.com/CryptoMachineGene/proofmint",
  };
  
  const sakura = {
    site: "https://sakura-ai.vercel.app",
    code: "https://github.com/CryptoMachineGene/sakura-ai",
  };

  const solana = {
    site: "https://solana-tracker.vercel.app",
    code: "https://github.com/CryptoMachineGene/solana-tracker",
  };

  const projects = [
    {
      title: "Proofmint — Crowdsale + NFT Receipt",
      description:
        "Full-stack dApp on Sepolia with owner withdraw, optional NFT receipt, and a documented demo flow.",
      image: proofmintCover,
      links: proofmint,
    },
    {
      title: "Sakura AI — Creative Companion",
      description:
        "Conversational AI with character memory and themed animations for natural, long-form exchanges.",
      image: sakuraCover,
      links: sakura,
    },
    {
      title: "Solana Tracker — Wallet Insight Tool",
      description:
        "Fetches and visualizes wallet data in real time using Solana JSON-RPC API with clean charts and wallet lookups.",
      image: solanaCover,
      links: solana,
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {projects.map((project) => {
        const hasDemo = !!project.links.demo;
        const buttonBase =
          "project-btn flex items-center justify-center text-sm font-medium transition-all duration-200";
        const buttonWidth = hasDemo ? "w-24" : "w-28";

        return (
          <div
            key={project.title}
            className="card flex flex-col bg-[#0b0a0d] rounded-2xl p-5 shadow-md transition hover:shadow-lg overflow-hidden"
          >
            {/* Cover Image */}
            <img
              src={project.image}
              alt={`${project.title} cover`}
              className="rounded-xl aspect-[16/9] w-full h-auto mb-3 transition-transform duration-300 hover:-translate-y-0.5"
              loading="lazy"
            />

            {/* Title & Description */}
            <h3 className="card-title mt-1 text-yellow-100 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              {project.title}
            </h3>
            <p className="card-description mb-2 text-sm text-gray-300">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-3 mt-4">
              {hasDemo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBase} ${buttonWidth}`}
                >
                  <span className="icon">▶</span> Demo
                </a>
              )}
              <a
                href={project.links.site}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} ${buttonWidth}`}
              >
                <span className="icon">↗</span> Site
              </a>
              <a
                href={project.links.code}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBase} ${buttonWidth}`}
              >
                <span className="icon">💻</span> Code
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
