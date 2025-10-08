// src/App.tsx
import { Outlet, NavLink, useLocation } from 'react-router-dom'

const Nav = () => (
  <header className="border-b bg-white shadow-sm">
    <nav className="container-nwc flex items-center justify-between py-4">
      <NavLink to="/" end className="text-xl font-bold">
        New World Cryptos® — Portfolio
      </NavLink>

      <ul className="flex items-center gap-6 text-sm">
        <li><NavLink to="resume"   className={({ isActive }) => (isActive ? 'font-semibold' : '')}>Resume</NavLink></li>
        <li><NavLink to="proofmint" className={({ isActive }) => (isActive ? 'font-semibold' : '')}>Proofmint</NavLink></li>
        <li><NavLink to="projects"  className={({ isActive }) => (isActive ? 'font-semibold' : '')}>Projects</NavLink></li>
        <li><NavLink to="about"     className={({ isActive }) => (isActive ? 'font-semibold' : '')}>About</NavLink></li>
      </ul>
    </nav>
  </header>
)

const Footer = () => (
  <footer className="mt-16 border-t bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-400">
    <div className="container-nwc py-6 text-xs text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-2">
      <p>© {new Date().getFullYear()} New World Cryptos® · Built with React + Tailwind</p>
      <p className="opacity-80">Signal over noise. Sovereignty over servitude.</p>
    </div>
  </footer>
)

export default function App() {
  const { pathname } = useLocation()
  const isResume = pathname === '/resume' || pathname === '/' // if Resume is homepage

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      {/* Drop container on resume so hero can go full-bleed */}
      <main className={`${isResume ? '' : 'container-nwc'} flex-1 py-10`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
