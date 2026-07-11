import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* نور سمت چپ */}
      <div
        className="
          absolute
          -left-40
          top-20
          h-96
          w-96
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      {/* نور سمت راست */}
      <div
        className="
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-violet-600/10
          blur-3xl
        "
      />

      {/* محتوا */}
      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-8">

        {/* عنوان */}
        <header
  className="
    relative
    mb-36
    flex
    min-h-[320px]
    flex-col
    items-center
    justify-center
  "
>

  {/* متن بزرگ پشت */}
  <span
    className="
      absolute
      -top10
      select-none
      text-[120px]
      font-black
      uppercase
      tracking-[16px]
      text-white/[0.03]
      pointer-events-none
    "
  >
    SERVICES
  </span>

  {/* عنوان */}
  <h2
  className="
    relative
    z-10
    drop-shadow-[0_0_20px_rgba(255,255,255,.08)]
    text-center
    text-5xl
    font-black
    leading-tight
    text-white
    animate-float-title
  "
>
    خدمات تخصصی{" "}
    <span
  className="
    absolute
    -top-14
    z-0
    select-none
    whitespace-nowrap
    text-[140px]
    font-black
    uppercase
    tracking-[18px]
    text-transparent
    opacity-100
    pointer-events-none
    bg-gradient-to-r
    from-cyan-400/10
    via-white/5
    to-violet-500/10
    bg-clip-text
    blur-[0.4px]
  "
>
  
</span>
  </h2>

  {/* خط زیر عنوان */}
  <div
    className="
      mt-8
      h-[4px]
      w-40
      rounded-full
      bg-gradient-to-r
      from-cyan-400
      via-sky-400
      to-violet-500
    "
  />

</header>

        {/* کارت‌ها */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}