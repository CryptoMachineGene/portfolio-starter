import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Resume from "./pages/Resume";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <Resume /> }],
  },
]);

// Optional version log (safe to keep)
console.log("App version:", __APP_VERSION__);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
