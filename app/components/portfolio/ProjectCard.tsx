"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  category: string;
  image: string;
  technologies: string[];
  year: string;
  status: string;
};

export default function ProjectCard({
  title,
  category,
  image,
  technologies,
  year,
  status,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-600/20 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">

        <span className="text-sm font-medium text-violet-400">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-500">
              سال
            </p>

            <p className="font-semibold text-white">
              {year}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">
              وضعیت
            </p>

            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
              {status}
            </span>
          </div>

        </div>

        {/* Button */}
        <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-violet-500/30 bg-violet-600/10 py-3 font-semibold text-violet-300 transition hover:bg-violet-600 hover:text-white">
          مشاهده پروژه
          <span className="transition group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>
    </motion.article>
  );
}