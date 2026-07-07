import Link from "next/link";

export default function StartCollaborationButton() {
  return (
    <Link
      href="/contact"
      className="
        group
        relative
        inline-flex
        items-center
        justify-center
        overflow-hidden
        h-[50px]
        min-w-[100px]
        px-8
        rounded-md
        font-semibold
        text-white
        transition-all
        duration-300
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        hover:bg-white/15
        hover:border-white/30
        hover:scale-[1.03]
        active:scale-95
      "
    >
      {/* افکت نور شیشه‌ای */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      {/* خط نور متحرک */}
      <div className="absolute left-[-40%] h-[150%] w-8 rotate-[25deg] bg-white/30 blur-md transition-all duration-700 group-hover:left-[140%]"></div>

      <span className="relative z-10 tracking-wide">شروع همکاری</span>
    </Link>
  );
}
