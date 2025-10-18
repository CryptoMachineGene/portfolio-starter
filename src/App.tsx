import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Footer from "./components/Footer";
import SiteHeader from "./components/Header"; 

export default function App() {
  const { pathname } = useLocation();

  // Normalize pathname to avoid trailing slash mismatches ("/resume/")
  const normalizedPath = useMemo(
    () => pathname.replace(/\/+$/, "") || "/",
    [pathname]
  );

  // Scroll to top on route change (GH Pages + hash router friendly)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [normalizedPath]);

  const isResume = normalizedPath === "/" || normalizedPath === "/resume";

  // Resume routes: full-bleed background + compact footer
  if (isResume) {
    return (
      <div className="min-h-screen flex flex-col bg-[#0b0c10] text-white">
        <SiteHeader /> 
        <main className="flex-1 bg-[#0b0c10]">
          <Outlet />
        </main>
        <Footer compact bgClass="bg-[#0b0c10]" borderClass="border-t border-gray-800" />
      </div>
    );
  }

  // All other routes: page controls its own layout (no extra container here)
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <SiteHeader /> 
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
