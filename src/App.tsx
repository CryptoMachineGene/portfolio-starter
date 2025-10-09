import { Outlet, useLocation } from 'react-router-dom'
import SiteFooter from './components/SiteFooter'

export default function App() {
  const { pathname } = useLocation()
  const isResume = pathname === '/' || pathname === '/resume'   // <— include “/”

  return isResume ? (
    <div className="min-h-screen flex flex-col bg-[#0b0c10]">
      <main className="flex-1 bg-[#0b0c10]">
        <Outlet />
      </main>
      <SiteFooter compact bgClass="bg-[#0b0c10]" borderClass="border-t border-gray-800" />
    </div>
  ) : (
    <div className="min-h-screen flex flex-col">
      <main className="container-nwc py-10 flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
