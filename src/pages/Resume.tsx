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
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/CryptoMachineGene"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub Profile"
                  >
                    <i className="fab fa-github" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/CryptoMachineG"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Twitter Profile"
                  >
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                </li>
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
              <li><a
                  href="mailto:gene@newworldcryptos.io"
                  aria-label="Email Eugene McGrath at gene@newworldcryptos.io"
                >
                  gene@newworldcryptos.io
                </a>
              </li>
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
                <div className="card-buttons">
                  {/* Site with “external link / chain” icon */}
                  {proofmint.live && (
                    <a
                      href={proofmint.live}
                      className="card-button--site"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Open Proofmint live site"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="16"
                        height="16"
                        style={{ marginRight: 8 }}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                        <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z" />
                      </svg>
                      Site
                    </a>
                  )}

                  {/* Code with GitHub mark */}
                  <a
                    href={proofmint.repo}
                    className="card-button--code"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open Proofmint repository on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      style={{ marginRight: 8 }}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.8.06 1.22.83 1.22.83.71 1.22 1.86.87 2.32.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.83-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83A7.66 7.66 0 0 1 8 4.58c.68 0 1.36.09 2 .26 1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.52.57.83 1.29.83 2.17 0 3.09-1.86 3.76-3.64 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.45.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                    </svg>
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
                <div className="card-buttons">
                  {sakura.live && (
                    <a
                      href={sakura.live}
                      className="card-button--site"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Open Sakura Token live site"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="16"
                        height="16"
                        style={{ marginRight: 8 }}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                        <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z" />
                      </svg>
                      Site
                    </a>
                  )}

                  <a
                    href={sakura.repo}
                    className="card-button--code"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open Sakura Token repository on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      style={{ marginRight: 8 }}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.8.06 1.22.83 1.22.83.71 1.22 1.86.87 2.32.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.83-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83A7.66 7.66 0 0 1 8 4.58c.68 0 1.36.09 2 .26 1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.52.57.83 1.29.83 2.17 0 3.09-1.86 3.76-3.64 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.45.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                    </svg>
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
                <div className="card-buttons">
                  {solana.live && (
                    <a
                      href={solana.live}
                      className="card-button--site"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Open Solana Hello World live site"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        width="16"
                        height="16"
                        style={{ marginRight: 8 }}
                        aria-hidden="true"
                        focusable="false"
                      >
                        <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                        <path d="M5 5h7v2H7v10h10v-5h2v7H5V5z" />
                      </svg>
                      Site
                    </a>
                  )}

                  <a
                    href={solana.repo}
                    className="card-button--code"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Open Solana Hello World repository on GitHub"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      style={{ marginRight: 8 }}
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.33c-2.23.49-2.69-1.07-2.69-1.07-.36-.91-.88-1.15-.88-1.15-.72-.49.06-.48.06-.48.8.06 1.22.83 1.22.83.71 1.22 1.86.87 2.32.67.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.83-2.17-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.83A7.66 7.66 0 0 1 8 4.58c.68 0 1.36.09 2 .26 1.53-1.05 2.2-.83 2.2-.83.44 1.1.16 1.92.08 2.12.52.57.83 1.29.83 2.17 0 3.09-1.86 3.76-3.64 3.97.29.25.54.74.54 1.5v2.23c0 .21.15.45.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                    </svg>
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
