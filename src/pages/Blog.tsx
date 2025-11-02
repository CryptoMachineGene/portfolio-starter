import { BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <section className="text-center py-16">
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
    </section>
  );
}
