import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import SiteFooter from "./components/SiteFooter";

export default function App() {
  const { pathname } = useLocation();

  // Normalize pathname to avoid trailing slash mismatches ("/resume/")
  const normalizedPath = useMemo(
    () => pathname.replace(/\/+$/, "") || "/",
    [pathname]
  );

  // Scroll to top on route change (nice for GH Pages + hash router)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [normalizedPath]);

  const isResume = normalizedPath === "/" || normalizedPath === "/resume";

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
  );
}
