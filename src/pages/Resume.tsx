import { Link } from "react-router-dom";
import "../styles/resume.css";
import { PROJECTS } from "../data/projects";

export default function Resume() {
  // Use Vite base for public assets so it works on GitHub Pages
  const base = import.meta.env.BASE_URL; // e.g., "/portfolio-starter/"
  const get = (key: "proofmint" | "solana-hello" | "sakura") =>
    PROJECTS.find(p => p.key === key)!;

  const proofmint = get("proofmint");
  const sakura = get("sakura");
  const solana = get("solana-hello");

  return (
    <>
      {/* Top breadcrumb (optional) */}
      <div className="container-nwc pt-6">
        <Link to="/" className="text-sm text-gray-600 hover:underline">
          ← Back to Home
        </Link>
      </div>

      <div className="resume full-bleed">
        <header className="header">
          <div className="hero-inner">
            <div className="header-links flex-start">
              <div className="profile-container">
                <img className="profile" src={`${base}img/profile.jpg`} alt="Profile" />
                <img className="ring" src={`${base}img/Ring.svg`} alt="Ring Border" />
              </div>

              <ul className="flex-list list-items-circle">
                <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin" /></a></li>
                <li><a href="https://github.com/CryptoMachineGene"><i className="fab fa-github" /></a></li>
                <li><a href="https://x.com/CryptoMachineG"><i className="fab fa-twitter" /></a></li>
              </ul>
            </div>

            <h1>
              Hi, I’m Eugene McGrath
              <br />
              Blockchain Developer
            </h1>

            <ul className="contact-details flex-list">
              <li>United States</li>
              <hr />
              <li><a href="mailto:gene@newworldcryptos.io">gene@newworldcryptos.io</a></li>
            </ul>
          </div>
        </header>

        <main>
          {/* ABOUT */}
          <section className="section about">
            <div className="section-inner">
              <h2>
                I build and audit decentralized applications focused on financial sovereignty,
                transparency, and privacy — blending blockchain engineering with user-first design.
              </h2>
              <ul className="achievements">
                <li>🏆 Dapp University Blockchain Developer Mentorship</li>
                <li>🏆 EatTheBlocks Certified Web3 Developer</li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="section projects">
            <div className="cards flex-center">
              {/* Proofmint */}
              <div className="card">
                <img src={`${base}img/projects/project_1.png`} alt="Proofmint dApp" />
                <h3 className="card-title">Proofmint</h3>
                <p className="card-description">
                  Full-stack token crowdsale + NFT receipt dApp (Hardhat, Solidity, React).
                </p>
                <div className={`card-buttons ${!proofmint.live ? "single" : ""}`}>
                  {proofmint.live && (
                    <a
                      href={proofmint.live}
                      className="card-button--site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site
                    </a>
                  )}
                  <a
                    href={proofmint.repo}
                    className="card-button--code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Sakura */}
              <div className="card">
                <img src={`${base}img/projects/project_2.png`} alt="Sakura Token" />
                <h3 className="card-title">Sakura Token (SKR)</h3>
                <p className="card-description">
                  Custom ERC-20 token with delegated transfer tests (Solidity + Hardhat).
                </p>
                <div className={`card-buttons ${!sakura.live ? "single" : ""}`}>
                  {sakura.live && (
                    <a
                      href={sakura.live}
                      className="card-button--site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site
                    </a>
                  )}
                  <a
                    href={sakura.repo}
                    className="card-button--code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>

              {/* Solana Hello */}
              <div className="card">
                <img src={`${base}img/projects/project_3.png`} alt="Solana Hello World" />
                <h3 className="card-title">Solana Hello World</h3>
                <p className="card-description">
                  Anchor + Rust Hello World smart contract verified on localnet.
                </p>
                <div className={`card-buttons ${!solana.live ? "single" : ""}`}>
                  {solana.live && (
                    <a
                      href={solana.live}
                      className="card-button--site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Site
                    </a>
                  )}
                  <a
                    href={solana.repo}
                    className="card-button--code"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </section>

        {/* SKILLS */}
        <section className="section skills pb-16">
          <div className="section-inner">
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
    </div>
    </>
  );
}
