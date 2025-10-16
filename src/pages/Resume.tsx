import { Link } from "react-router-dom";
import { useEffect } from "react";  
import "../styles/resume.css";
import { PROJECTS } from "../data/projects";
import RepoButton from "../components/RepoButton";
import SiteButton from "../components/SiteButton";

export default function Resume() {
  const base = import.meta.env.BASE_URL; // e.g. "/portfolio-starter/"

  const proofmint = PROJECTS.find(p => p.key === "proofmint");
  const sakura    = PROJECTS.find(p => p.key === "sakura");
  const solana    = PROJECTS.find(p => p.key === "solana-hello");

  if (!proofmint || !sakura || !solana) {
    return (
      <div className="container-nwc py-10">
        <p className="text-sm opacity-80">
          Loading projects… (check keys in <code>src/data/projects.ts</code>:
          <code> proofmint</code>, <code> sakura</code>, <code> solana-hello</code>)
        </p>
      </div>
    );
  }

  // Reveal-on-scroll
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target); // reveal once
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="resume">
      {/* ===== Gradient Header ===== */}
      <div className="full-bleed">
        <header
          id="top"
          className="header"
          style={{
            backgroundImage: `url(${base}img/Background.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="hero-inner">
            <div className="header-links flex-start">
              {/* Use your real avatar here (keeps the ring overlay) */}
              <div className="profile-container">
                <img
                  className="profile"
                  src={`${base}img/gene-avatar.png`}
                  alt="Eugene McGrath"
                  width={96}
                  height={96}
                  decoding="async"
                />
                <img className="ring" src={`${base}img/Ring.svg`} alt="" aria-hidden="true" />
              </div>
              <ul className="flex-list list-items-circle">
                <li>
                  <a href="https://www.linkedin.com/in/eugene-mcgrath-550b4897/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11.5 6H5.5v11h2V9M6.5 5.75A1.25 1.25 0 1 0 6.5 8.25A1.25 1.25 0 0 0 6.5 5.75M20 14.5c0-3.04-1.62-4.5-3.78-4.5c-1.74 0-2.52.96-2.96 1.63V9H11v11h2.26v-5.35c0-1.41.27-2.77 2.01-2.77c1.71 0 1.73 1.6 1.73 2.86V20H20v-5.5Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/CryptoMachineGene" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18c-.46-1.17-1.12-1.48-1.12-1.48c-.91-.62.07-.61.07-.61c1 .07 1.53 1.04 1.53 1.04c.9 1.53 2.36 1.09 2.94.83c.09-.66.35-1.1.63-1.35c-2.22-.25-4.55-1.11-4.55-4.95c0-1.09.39-1.98 1.03-2.68c-.1-.25-.45-1.27.1-2.65c0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85 0 1.7.11 2.5.33c1.9-1.29 2.74-1.02 2.74-1.02c.55 1.38.2 2.4.1 2.65c.64.7 1.03 1.59 1.03 2.68c0 3.85-2.34 4.7-4.57 4.95c.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/CryptoMachineG" target="_blank" rel="noreferrer noopener" aria-label="X / Twitter">
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="currentColor" d="M17.53 3H20l-5.5 6.29L21 21h-5.5l-4.3-5.61L5.96 21H4l6-6.86L3 3h5.6l3.9 5.23L17.53 3Zm-1.93 16h1.53L8.53 5H7l8.6 14Z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Clean, simple title */}
            <h1>Eugene McGrath</h1>
          </div>
        </header>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        {/* ABOUT */}
        <section
          className="section about"
          style={{ backgroundImage: `url(${base}img/Vector.png)` }}
        >
           <div className="section-inner space-y-4 text-[1.05rem] leading-7 reveal">
            <h2 className="sr-only">About</h2>
            <p className="text-neutral-200">
              <strong>Blockchain Developer | Smart-Contract Engineer | Web3 Builder</strong>
            </p>
            <p className="text-neutral-300">
              Focused on decentralized systems and real-world utility. I design, deploy, and test
              full-stack dApps using Solidity, Hardhat, Foundry, and React + TypeScript.
            </p>
            <p className="text-neutral-300">
              Clean code, verifiable logic, and reliable results — engineering that speaks for itself.
            </p>
            <ul className="achievements">
              <li>🏆 Dapp University Blockchain Developer Mentorship</li>
              <li>🏆 EatTheBlocks Certified Web3 Developer</li>
            </ul>
            <div className="pt-2">
              <a
                href={`mailto:gene@newworldcryptos.io?subject=Hello%20Eugene&body=Hi%20Eugene,%0D%0A%0D%0A`}
                className="inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium
                           border border-[hsl(var(--brand))] bg-transparent text-white
                           hover:bg-[hsl(var(--brand))] hover:text-black focus:outline-none
                           focus:ring-2 focus:ring-[hsl(var(--brand))]/70"
              >
                Email Me
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects">
          <div className="cards flex-center">
            {/* Proofmint */}
            <div className="card reveal" data-delay="0">
              <img
                loading="lazy"
                decoding="async"
                width={640} 
                height={360}
                src={`${base}img/projects/project_1.png`}
                alt="Proofmint dApp"
              />
              <h3 className="card-title">Proofmint</h3>
              <p className="card-description">
                Full-stack token crowdsale + NFT receipt dApp (Hardhat, Solidity, React).
              </p>
              <div className={`card-buttons ${!proofmint.live ? "single" : ""}`}>
                {proofmint.live && (
                  <SiteButton to={proofmint.live} className="w-[150px] h-[60px] justify-center" />
                )}
                <RepoButton to={proofmint.repo} className="w-[150px] h-[60px] justify-center" />
              </div>
            </div>

            {/* Sakura */}
            <div className="card reveal" data-delay="100">
              <img
                loading="lazy"
                decoding="async"
                width={640} 
                height={360}
                src={`${base}img/projects/project_2.png`}
                alt="Sakura Token"
              />
              <h3 className="card-title">Sakura Token (SKR)</h3>
              <p className="card-description">
                Custom ERC-20 token with delegated transfer tests (Solidity + Hardhat).
              </p>
              <div className={`card-buttons ${!sakura.live ? "single" : ""}`}>
                {sakura.live && (
                  <SiteButton to={sakura.live} className="w-[150px] h-[60px] justify-center" />
                )}
                <RepoButton to={sakura.repo} className="w-[150px] h-[60px] justify-center" />
              </div>
            </div>

            {/* Solana Hello */}
            <div className="card reveal" data-delay="200">
              <img
                loading="lazy"
                decoding="async"
                width={640} 
                height={360}
                src={`${base}img/projects/project_3.png`}
                alt="Solana Hello World"
              />
              <h3 className="card-title">Solana Hello World</h3>
              <p className="card-description">
                Anchor + Rust Hello World smart contract verified on localnet.
              </p>
              <div className={`card-buttons ${!solana.live ? "single" : ""}`}>
                {solana.live && (
                  <SiteButton to={solana.live} className="w-[150px] h-[60px] justify-center" />
                )}
                <RepoButton to={solana.repo} className="w-[150px] h-[60px] justify-center" />
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="section skills pb-16"
          style={{ backgroundImage: `url(${base}img/Vector.png)` }}
        >
          <div className="section-inner reveal" data-delay="100">
            <h2>Tech Stack</h2>

            {/* FRONTEND */}
            <div className="tech-category">
              <h3 className="tech-label">Frontend</h3>
              <div className="skill-cards">
                <div className="skill-card flex-center" data-tooltip="React">
                  <img src={`${base}img/icons/react.svg`} alt="React" />
                </div>
                <div className="skill-card flex-center" data-tooltip="TypeScript">
                  <img src={`${base}img/icons/typescript.svg`} alt="TypeScript" />
                </div>
                <div className="skill-card flex-center" data-tooltip="JavaScript">
                  <img src={`${base}img/icons/js.svg`} alt="JavaScript" />
                </div>
                <div className="skill-card flex-center" data-tooltip="TailwindCSS">
                  <img src={`${base}img/icons/tailwind.svg`} alt="TailwindCSS" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Vite">
                  <img src={`${base}img/icons/vite.svg`} alt="Vite" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Next.js">
                  <img src={`${base}img/icons/nextjs.svg`} alt="Next.js" />
                </div>
              </div>
            </div>

            {/* BLOCKCHAIN / BACKEND */}
            <div className="tech-category">
              <h3 className="tech-label">Blockchain & Backend</h3>
              <div className="skill-cards">
                <div className="skill-card flex-center" data-tooltip="Node.js">
                  <img src={`${base}img/icons/node.svg`} alt="Node.js" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Solidity">
                  <img src={`${base}img/icons/solidity.svg`} alt="Solidity" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Ethereum">
                  <img src={`${base}img/icons/ethereum.svg`} alt="Ethereum" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Hardhat">
                  <img src={`${base}img/icons/hardhat.svg`} alt="Hardhat" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Foundry">
                  <img src={`${base}img/icons/foundry.svg`} alt="Foundry" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Ethers.js">
                  <img src={`${base}img/icons/ethers.svg`} alt="Ethers.js" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Sepolia Testnet">
                  <img src={`${base}img/icons/sepolia.svg`} alt="Sepolia Testnet" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Solana">
                  <img src={`${base}img/icons/solana.svg`} alt="Solana" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Anchor">
                  <img src={`${base}img/icons/anchor.svg`} alt="Anchor" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Rust">
                  <img src={`${base}img/icons/rust.svg`} alt="Rust" />
                </div>
              </div>
            </div>

            {/* TOOLING */}
            <div className="tech-category">
              <h3 className="tech-label">Tooling & DevOps</h3>
              <div className="skill-cards">
                <div className="skill-card flex-center" data-tooltip="Git">
                  <img src={`${base}img/icons/git.svg`} alt="Git" />
                </div>
                <div className="skill-card flex-center" data-tooltip="GitHub Actions">
                  <img src={`${base}img/icons/github-actions.svg`} alt="GitHub Actions" />
                </div>
                <div className="skill-card flex-center" data-tooltip="Linux">
                  <img src={`${base}img/icons/linux.svg`} alt="Linux" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container-nwc py-8 text-neutral-400">
        <Link to="/resume" className="underline">← Back to Home</Link>
      </footer>
    </div>  
  );
}
