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
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        p-12 min-h-[420px]p-10
        transition-all
        duration-500
        hover:-translate-y-4
        hover:border-cyan-400/40
        hover:shadow-[0_20px_70px_rgba(34,211,238,.25)]
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
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* آیکون */}
      <div
        className="
          mx-auto
          mb-8
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-br
          from-cyan-500
          to-violet-600
          text-white
          shadow-[0_0_25px_rgba(34,211,238,.25)]
          transition-all
          duration-500
          group-hover:scale-125
          group-hover:rotate-12
        "
      >
        <Icon size={50} />
      </div>

      {/* عنوان */}
      <h3
  className="
    mt-3
    text-center
    text-3xl
    font-extrabold
    tracking-wide
    text-white
    transition-colors
    duration-300
    group-hover:text-cyan-300
  "
>
        {title}
      </h3>

      {/* توضیحات */}
      <p className="mt-5 text-center leading-9 text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 text-lg text-zinc-400">
        {description}
      </p>

      {/* لینک */}
      <div className="mt-8 flex justify-center">
        <Link
          href={href}
          className="
            inline-flex
            items-center
            gap-2
            font-semibold
            text-cyan-400 hover:text-white
            transition-all
            duration-300
            group-hover:gap-5 group-hover:translate-x-1
          "
        >
          اطلاعات بیشتر
          <ArrowLeft size={18} />
        </Link>
      </div>
    </article>
  );
}