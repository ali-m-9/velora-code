"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AnimatedCard({ children }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      "
    >
      {/* Glow */}
      <motion.div
        className="
        absolute
        inset-0
        opacity-0
        bg-gradient-to-br
        from-cyan-500/15
        via-transparent
        to-violet-500/15
        "
        whileHover={{
          opacity: 1,
        }}
        transition={{ duration: 0.4 }}
      />

      {children}
    </motion.article>
  );
}