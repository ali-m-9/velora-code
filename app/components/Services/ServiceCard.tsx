import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index: number;
};

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  index,
}: ServiceCardProps) {
  return (
    <article
      className="
        group
        flex
        flex-col
        h-full
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-12 
        min-h-[220px] 
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-cyan-400/40
        hover:shadow-[0_25px_60px_rgba(34,211,238,.20)]
      "
    >
        {/* Glow */}
<div
  className="
    absolute
    inset-0
    opacity-0
    transition-all
    duration-500
    bg-gradient-to-br
    from-cyan-500/10
    via-transparent
    to-violet-500/10
    group-hover:opacity-100
  "
/>
     

      {/* آیکون */}
      <div
        className="
          mx-auto
          mb-10
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-gradient-to-br
          from-cyan-500
          to-violet-600
          text-white
          shadow-[0_0_35px_rgba(34,211,238,.35)]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
        "
      >
        <Icon size={42} strokeWidth={2.2} />
      </div>

      {/* عنوان */}
      <h3
  className="
    mt-0
    text-center
    text-3xl
    font-extrabold
    tracking-wide
    text-white
    transition-colors
    duration-300
    group-hover:text-cyan-300
    leading-tight
  "
>
        {title}
      </h3>

      {/* توضیحات */}
      <p className="mt-6 text-center  max-w-[40ch] leading-8 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 text-lg text-zinc-400">
        {description}
      </p>

      {/* لینک */}
      
       {/* شماره */}
      <span
        className="
          absolute
          top-5
          left-6
          text-6xl
          font-black
          text-white/10
          select-none
          pointer-events-none
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>
    </article>
  );
}