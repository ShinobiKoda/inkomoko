import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SlideIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.8 }} // Increased duration for smoother animation
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }} // Increased duration for smoother animation
    >
      {children}
    </motion.div>
  );
}
