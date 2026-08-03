"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LaptopMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        rotateX: 3,
        rotateY: -4,
        y: -8,
      }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1800,
      }}
      className="relative mx-auto flex w-full justify-center py-16"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[150px]" />
      </div>

      {/* Laptop */}
      <div
        className="relative"
        style={{
          transform: "rotateX(18deg) rotateY(-28deg) rotateZ(2deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Screen */}
        <div className="relative h-[420px] w-[680px] overflow-hidden rounded-[26px] border border-white/10 bg-[#0B1220] shadow-[0_40px_120px_rgba(0,0,0,.45)]">

          {/* Top Bar */}
          <div className="flex h-10 items-center gap-2 border-b border-white/5 px-5">

            <div className="h-3 w-3 rounded-full bg-red-400" />

            <div className="h-3 w-3 rounded-full bg-yellow-400" />

            <div className="h-3 w-3 rounded-full bg-green-400" />

          </div>

          {/* Screen Image */}
          <div className="relative h-[380px] overflow-hidden">

            <Image
              src="/images/portfolio/shop.jpg"
              alt="Project"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />

            {/* Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />

            {/* Overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />

          </div>
                  </div>

        {/* Hinge */}
        <div
          className="absolute left-1/2 top-full h-3 w-44 -translate-x-1/2 rounded-b-full bg-gradient-to-b from-slate-400 via-slate-600 to-slate-900"
          style={{
            transform: "translateX(-50%) translateZ(-2px)",
          }}
        />

        {/* Base */}
        <div
          className="absolute left-1/2 top-[100%] h-5 w-[760px] -translate-x-1/2 rounded-b-[100px]"
          style={{
            background:
              "linear-gradient(to bottom,#d6dbe3,#9aa4b2,#5d6674,#303846)",
            transform:
              "perspective(1000px) rotateX(75deg) translateY(-2px)",
            transformOrigin: "top",
          }}
        >
          {/* Highlight */}
          <div className="mx-auto mt-[2px] h-[2px] w-52 rounded-full bg-white/60" />
        </div>

        {/* Bottom Shadow */}
        <div
          className="absolute left-1/2 top-[112%] h-10 w-[600px] -translate-x-1/2 rounded-full bg-black/50 blur-3xl"
          style={{
            transform: "rotateX(80deg)",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="absolute bottom-10 left-1/2 -z-10 h-48 w-96 -translate-x-1/2 rounded-full bg-violet-500/15 blur-[120px]" />

    </motion.div>
  );
}