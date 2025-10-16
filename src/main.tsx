import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import "./index.css";

import App from "./App";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
import Proofmint from "./pages/Proofmint";
import SolanaHello from "./pages/SolanaHello";
import Sakura from "./pages/Sakura";
import AMM from "./pages/AMM";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Founders from "./pages/Founders";
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
      { path: "solana-hello", element: <SolanaHello /> },
      { path: "sakura", element: <Sakura /> },
      { path: "amm", element: <AMM /> },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "founders", element: <Founders /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
