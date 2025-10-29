import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="min-h-screen bg-[#0b0c10] text-white p-6 overflow-y-auto">
      <Outlet />
    </main>
  );
}
