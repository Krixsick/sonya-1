import { motion } from "motion/react";

export function SectionOne() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/background1.png"
        alt="Delicious baked treats"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/*Gradient Overlay for Better Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-4 drop-shadow-2xl"
        >
          Lok's Silly Lil' Treats
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl mb-8 font-light tracking-wide"
        >
          Freshly Baked with Love & Happiness 🍪✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white/20 backdrop-blur-md border-2 border-white text-white rounded-full text-xl font-semibold hover:bg-white/30 cursor-pointer"
          >
            View Menu
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(212, 163, 115, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[var(--ref-primary-50)] text-white rounded-full text-xl font-semibold shadow-2xl hover:bg-[#fbd0a5d9] cursor-pointer"
          >
            Order Now 🛒
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <p className="text-sm mb-2 text-white/80">Scroll to explore</p>
            <svg
              className="w-6 h-10 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
