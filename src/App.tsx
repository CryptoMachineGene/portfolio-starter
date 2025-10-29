import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#0b0c10] text-white p-6">
      <Outlet />
    </main>
  );
}
