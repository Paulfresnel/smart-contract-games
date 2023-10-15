import { ConnectWallet, darkTheme } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <h1 className="title">
            
            <span className="gradient-text-0">
              <a
                href="https://thirdweb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CodeX DAO Smart Contract Games.
              </a>
            </span>
          </h1>

          <p className="description">
            Get started by connecting your wallet{" "}
            <code className="code">src/index.js</code>, then modify the{" "}
            <code className="code">src/App.js</code> file!
          </p>

          <div className="connect">
          <ConnectWallet
        theme={darkTheme({
          colors: {
            accentText: "#36beff",
            accentButtonBg: "#36beff",
            modalBg: "#131418",
            dropdownBg: "#131418",
            primaryText: "#36beff",
            separatorLine: "#36beff",
          },
        })}
        btnTitle={"Connect Wallet"}
        modalTitle={" Connect Your Wallet"}
        switchToActiveChain={true}
        modalSize={"wide"}
        welcomeScreen={{
          img: {
            src: "https://codex-dao.vercel.app/codexDAO-logo(1).png",
            width: 150,
            height: 150,
          },
          subtitle:
            "Connect your wallet using any options on the left",
          title:
            "Your portal to the Blockchain World",
        }}
        modalTitleIconUrl={
          "https://codex-dao.vercel.app/codexDAO-logo(1).png"
        }
      />
          </div>
        </div>

        <div className="grid">
          <a
            href="https://portal.thirdweb.com/"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/portal-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-1">Portal ➜</h2>
              <p>
                Guides, references, and resources that will help you build with
                thirdweb.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/dashboard"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
            />
            <div className="card-text">
              <h2 className="gradient-text-2">Dashboard ➜</h2>
              <p>
                Deploy, configure, and manage your smart contracts from the
                dashboard.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/templates"
            className="card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/templates-preview.png"
              alt="Placeholder preview of templates"
            />
            <div className="card-text">
              <h2 className="gradient-text-3">Templates ➜</h2>
              <p>
                Discover and clone template projects showcasing thirdweb
                features.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
