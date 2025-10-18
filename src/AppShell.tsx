import Header from "./components/Header";
import Footer from "./components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh flex flex-col bg-black text-white">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
