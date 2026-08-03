import LaptopMockup from "./LaptopMockup";

export default function FeaturedProject() {
  return (
    <section className="grid items-center gap-16 py-16 lg:grid-cols-2">
      {/* متن سمت چپ */}
      <div>
        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          پروژه منتخب
        </span>

        <h3 className="mt-8 text-5xl font-black leading-tight text-white">
          فروشگاه اینترنتی مدرن
        </h3>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          طراحی و توسعه یک فروشگاه اینترنتی با رابط کاربری مدرن، سرعت بالا و
          تجربه کاربری حرفه‌ای که با Next.js و Tailwind CSS پیاده‌سازی شده است.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Next.js", "React", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-500">
          مشاهده پروژه
        </button>
      </div>

      {/* سمت راست */}
      <div className="flex justify-center">
        <LaptopMockup />
      </div>
    </section>
  );
}