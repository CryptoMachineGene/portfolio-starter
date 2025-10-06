// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App'
import Home from './pages/Home'
import Proofmint from './pages/Proofmint'
import SolanaHello from './pages/SolanaHello';
import Sakura from './pages/Sakura';
import Projects from './pages/Projects'
import About from './pages/About'
import NotFound from './pages/NotFound'

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'proofmint', element: <Proofmint /> },
      { path: 'solana-hello', element: <SolanaHello /> },
      { path: 'sakura', element: <Sakura /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
