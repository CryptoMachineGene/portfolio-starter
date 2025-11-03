import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UnderConstruction() {
  const navigate = useNavigate();
  const [fade, setFade] = useState("opacity-0");

  useEffect(() => {
    // Fade in first
    const fadeIn = setTimeout(() => setFade("opacity-100"), 100);

    // Start fade-out at 9s, then redirect at 10s
    const fadeOut = setTimeout(() => setFade("opacity-0"), 9000);
    const redirect = setTimeout(() => navigate("/"), 10000);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
      clearTimeout(redirect);
    };
  }, [navigate]);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-center bg-black text-center text-yellow-400 px-6 transition-opacity duration-1000 ${fade}`}
    >
      <h1
        className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse"
        style={{
          textShadow: "0 0 15px rgba(255, 255, 0, 0.6)",
        }}
      >
        🚧 Under Construction 🚧
      </h1>
      <p className="text-gray-300 text-lg mb-3">
        This demo is being polished and will be live soon.
      </p>
      <p className="text-yellow-500 text-sm opacity-80">
        Redirecting to home shortly…
      </p>
    </main>
  );
}
