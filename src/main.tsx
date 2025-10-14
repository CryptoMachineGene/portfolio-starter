import React from 'react'
import ReactDOM from 'react-dom/client'
import { Navigate } from "react-router-dom";
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Proofmint from './pages/Proofmint'
import SolanaHello from './pages/SolanaHello'
import Sakura from './pages/Sakura'
import AMM from "./pages/AMM";
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Resume from './pages/Resume'
import Founders from './pages/Founders'   

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Resume /> },     // default landing page
      { path: 'resume', element: <Resume /> },
      { path: 'home', element: <Home /> },
      { path: 'proofmint', element: <Proofmint /> },
      { path: 'solana-hello', element: <SolanaHello /> },
      { path: 'sakura', element: <Sakura /> },
      { path: 'amm', element: <AMM /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: 'founders', element: <Founders /> }, 
      { path: '*', element: <NotFound /> },
      { path: 'home', element: <Navigate to="/resume" replace /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
