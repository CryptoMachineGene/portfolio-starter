import { Link } from "react-router-dom";
import { HardHat } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] text-center text-gray-200 space-y-6">
      {/* Animated icon */}
      <div className="relative">
        <HardHat
          size={80}
          className="text-brand-yellow-dark animate-breathe"
        />
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-bold text-brand-yellow animate-fadeInSlow">
        🚧 Under Construction 🚧
      </h1>

      {/* Message */}
      <p className="text-gray-400 max-w-md leading-relaxed animate-fadeInSlow">
        This page is currently being built and will be live soon. In the meantime,
        feel free to explore the rest of the site.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-4 inline-block border border-yellow-400 text-yellow-400 px-6 py-2 rounded-xl font-medium hover:bg-yellow-400 hover:text-black transition"
      >
        Return Home
      </Link>
    </section>
  );
}
