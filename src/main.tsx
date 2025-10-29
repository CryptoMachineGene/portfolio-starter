import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import "./styles/resume.css";
import "./styles/index.css";
import App from "./App";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects"; // optional if you’ll re-enable Projects soon

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Resume /> },
      { path: "projects", element: <Projects /> }, // optional now, safe placeholder
      { path: "*", element: <NotFound /> }, // ✅ catch-all for 404s
    ],
  },
]);

console.log("App version:", __APP_VERSION__);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
