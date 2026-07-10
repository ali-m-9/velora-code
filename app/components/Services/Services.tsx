import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
  className="
    relative
    overflow-hidden
    py-32
  "
>
    {/* نور آبی */}
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

{/* نور بنفش */}
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
      <div className="relative z-10 mx-auto max-w-7xl px-8">

        {/* عنوان */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-black text-white">
            خدمات تخصصی{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Velora Code
            </span>
          </h2>

          
        </div>

        {/* کارت‌ها */}
        <div className="grid gap-15 md:grid-cols-2 xl:grid-cols-3">
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