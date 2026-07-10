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
      border border-white/10
      bg-white/[0.03]
      backdrop-blur-xl
      p-8
      transition-all
      duration-500
      hover:-translate-y-3
      hover:border-cyan-400/40
      hover:shadow-[0_0_50px_rgba(59,130,246,.15)]
      "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        transition
        duration-500
        group-hover:opacity-100
        bg-gradient-to-br
        from-cyan-500/10
        via-transparent
        to-violet-500/10
        "
      />

      {/* شماره */}
      <span
        className="
        absolute
        top-6
        left-6
        text-5xl
        font-black
        text-white/5
        select-none
        "
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* آیکون */}
      <div
        className="
        relative
        z-10
        mb-8
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-2xl
        bg-gradient-to-br
        from-cyan-500
        to-violet-600
        text-white
        transition-transform
        duration-500
        group-hover:rotate-6
        group-hover:scale-110
        "
      >
        <Icon size={30} />
      </div>

      {/* عنوان */}
      <h3
        className="
        relative
        z-10
        text-2xl
        font-bold
        text-white
        "
      >
        {title}
      </h3>

      {/* توضیح */}
      <p
        className="
        relative
        z-10
        mt-5
        leading-8
        text-zinc-400
        "
      >
        {description}
      </p>

      {/* لینک */}
      <Link
        href={href}
        className="
        relative
        z-10
        mt-8
        inline-flex
        items-center
        gap-2
        font-semibold
        text-cyan-400
        transition-all
        duration-300
        group-hover:gap-4
        "
      >
        اطلاعات بیشتر
        <ArrowLeft size={18} />
      </Link>
    </article>
  );
}