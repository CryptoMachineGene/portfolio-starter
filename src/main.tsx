import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import "./styles/resume.css";
import "./styles/index.css";
import App from "./App";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Demo from "./pages/Demo";
import Blog from "./pages/Blog";  // ✅ the page you pasted earlier
import NotFound from "./pages/NotFound";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Resume /> },
      { path: "projects", element: <Projects /> },
      { path: "demo", element: <Demo /> },
      { path: "blog", element: <Blog /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

console.log("App version:", __APP_VERSION__);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
