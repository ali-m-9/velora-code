import { services } from "./servicesData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="relative pt-56 pb-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center mb-20">

          

          <h2 className="text-5xl font-black text-white">
            خدمات تخصصی{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Velora Code
            </span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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