import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";

import App from "./App";
import Resume from "./pages/Resume";
import Proofmint from "./pages/Proofmint";
import ProofmintDemo from "./pages/ProofmintDemo";
import SolanaHello from "./pages/SolanaHello";
import Sakura from "./pages/Sakura";
import AMM from "./pages/AMM";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Founders from "./pages/Founders";
import NWCPage from "./pages/NWC";
import Acknowledgments from "./pages/Acknowledgments";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Resume /> },
      { path: "resume", element: <Resume /> },
      { path: "home", element: <Navigate to="/resume" replace /> },
      { path: "proofmint", element: <Proofmint /> },
      { path: "proofmint-demo", element: <ProofmintDemo /> },
      { path: "solana-hello", element: <SolanaHello /> },
      { path: "sakura", element: <Sakura /> },
      { path: "amm", element: <AMM /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "nwc", element: <NWCPage /> },
      { path: "founders", element: <Founders /> },
      { path: "acknowledgments", element: <Acknowledgments /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

// Version log
console.log("App version:", __APP_VERSION__);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
