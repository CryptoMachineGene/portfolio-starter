import { Link } from "react-router-dom";
import "../styles/resume.css";

export default function Resume() {
  return (
    <div className="resume">
      <header className="header">
        <div className="hero-inner">
          <div className="header-links flex-start">
            <div className="profile-container">
              <img className="profile" src="/img/profile.jpg" alt="Profile" />
              <img className="ring" src="/img/Ring.svg" alt="Ring Border" />
            </div>

            <ul className="flex-list list-items-circle">
              <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin" /></a></li>
              <li><a href="https://github.com/CryptoMachineGene"><i className="fab fa-github" /></a></li>
              <li><a href="https://twitter.com/CryptoMachineG"><i className="fab fa-twitter" /></a></li>
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
          <div className="section-inner">
            <div className="flex-between">
              <h2>Selected Projects</h2>
              <a href="https://github.com/CryptoMachineGene" className="projects-link flex-between">
                See all works <img src="/img/ArrowUpRight.svg" alt="Arrow" style={{ marginLeft: 8, opacity: 0.7 }} />
              </a>
            </div>

            <div className="cards flex-center">
              <div className="card">
                <img src="/img/projects/project_1.png" alt="Proofmint dApp" />
                <h3 className="card-title">Proofmint</h3>
                <p className="card-description">
                  Full-stack token crowdsale + NFT receipt dApp (Hardhat, Solidity, React).
                </p>
                <div className="card-buttons">
                  <a href="https://cryptomachinegene.github.io/proofmint-project/" className="card-button--site">Site</a>
                  <a href="https://github.com/CryptoMachineGene/proofmint-project" className="card-button--code">Code</a>
                </div>
              </div>

              <div className="card">
                <img src="/img/projects/project_2.png" alt="Sakura Token" />
                <h3 className="card-title">Sakura Token (SKR)</h3>
                <p className="card-description">
                  Custom ERC-20 token with delegated transfer tests (Solidity + Hardhat).
                </p>
                <div className="card-buttons">
                  <a href="#" className="card-button--site">Site</a>
                  <a href="https://github.com/CryptoMachineGene/sakura-contract" className="card-button--code">Code</a>
                </div>
              </div>

              <div className="card">
                <img src="/img/projects/project_3.png" alt="Solana Hello World" />
                <h3 className="card-title">Solana Hello World</h3>
                <p className="card-description">
                  Anchor + Rust Hello World smart contract verified on localnet.
                </p>
                <div className="card-buttons">
                  <a href="#" className="card-button--site">Site</a>
                  <a href="https://github.com/CryptoMachineGene/solana-hello-world" className="card-button--code">Code</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills">
          <div className="section-inner">
            <h2>Tech Stack</h2>
            <div className="skill-cards flex-center">
              <div className="skill-card flex-center"><i className="fab fa-react" /></div>
              <div className="skill-card flex-center"><i className="fab fa-node-js" /></div>
              <div className="skill-card flex-center"><i className="fab fa-ethereum" /></div>
              <div className="skill-card flex-center"><i className="fab fa-js-square" /></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer flex-center">
        <p><small>© {new Date().getFullYear()} Eugene McGrath · Built with React + Vite</small></p>
        <div style={{ marginTop: 16 }}>
          <Link to="/">← Back to Home</Link>
        </div>
      </footer>
    </div>
  );
}
