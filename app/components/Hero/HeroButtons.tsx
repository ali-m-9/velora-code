export default function HeroButtons() {
  return (
    <div className="flex gap-5 mt-10">

      <button
        className="
        px-8
        py-4
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-purple-600
        text-white
        font-bold
        hover:scale-105
        duration-300
        "
      >
        شروع همکاری
      </button>

      <button
        className="
        px-8
        py-4
        rounded-xl
        border
        border-white/20
        bg-white/5
        backdrop-blur-xl
        text-white
        font-bold
        hover:bg-white/10
        duration-300
        "
      >
        نمونه کارها
      </button>

    </div>
  );
}