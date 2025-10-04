import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Proofmint from './pages/Proofmint'
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
     { path: 'projects', element: <Projects /> },
     { path: 'about', element: <About /> },
     { path: '*', element: <NotFound /> },
   ],
 },
])
