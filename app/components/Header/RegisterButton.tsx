import Link from "next/link";
import { UserPlus } from "lucide-react";
export default function RegisterButton() {
  return (
    <Link
      href="/register"
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
        bg-gradient-to-r
        from-cyan-500
        via-blue-600
        to-purple-600
        hover:scale-[1.03]
        active:scale-95
      "
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500"></div>

      <div className="absolute left-[-40%] h-[180%] w-10 rotate-[25deg] bg-white/30 blur-md transition-all duration-700 group-hover:left-[130%]"></div>

      <div className="absolute inset-0 rounded-md border border-white/20"></div>

      <span className="relative z-10 flex items-center gap-2 tracking-wide">
  <UserPlus size={18} />
  ثبت نام
</span>
    </Link>
  );
}
