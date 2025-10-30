import { motion } from "framer-motion";

const Demo = () => {
  return (
    <main className="min-h-screen bg-black text-yellow-400 flex flex-col items-center justify-center p-8">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🎥 Demo Preview Placeholder
      </motion.h1>

      <motion.div
        className="w-full max-w-2xl aspect-video border border-yellow-700 rounded-2xl flex items-center justify-center text-yellow-600 text-sm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p>Demo video will appear here once ready.</p>
      </motion.div>

      {/* Animated Loading Bar */}
      <div className="relative w-full max-w-3xl h-1 bg-gray-700 overflow-hidden rounded-full mt-8 mx-auto">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-yellow-400/90 blur-[1px] animate-conveyor"></div>
      </div>
    </main>
  );
};

export default Demo;
