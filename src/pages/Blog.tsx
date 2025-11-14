import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Blog() {
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
    <section className={`text-center py-16 transition-opacity duration-1000 ${fade}`}>
      <div className="flex justify-center mb-6">
        <BookOpen className="text-yellow-400 w-10 h-10" />
      </div>

      <h1 className="text-3xl font-bold text-yellow-400 mb-2">
        Blog Under Construction
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Articles and project insights will appear here soon.
      </p>

      <div className="border border-yellow-400/40 rounded-xl mx-auto max-w-2xl p-12">
        <p className="text-yellow-300/70">
          🛠️ Development in progress — check back soon!
        </p>
      </div>
      <p> </p>
      <p className="text-yellow-500 text-sm opacity-80">
        Redirecting to home shortly…
      </p>
    </section>
  );
}
