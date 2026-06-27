import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        delay: 1.8,
      }}
      className="fixed inset-0 bg-[#020617] flex items-center justify-center z-[9999] pointer-events-none"
    >
      <div className="text-center">

        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 0.8,
          }}
          className="text-5xl font-black tracking-wider"
        >
          Aman
          <span className="text-blue-500">.</span>
        </motion.h1>

        <p className="text-slate-400 mt-5 tracking-[5px] uppercase">
          Loading Portfolio
        </p>

        <div className="w-64 h-2 rounded-full bg-slate-800 overflow-hidden mt-8">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.6,
            }}
            className="h-full bg-blue-500"
          />

        </div>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;