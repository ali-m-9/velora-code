import ProjectCard from "./ProjectCard";
import { projects } from "./data";

export default function ProjectsGrid() {
  return (
    <section className="mt-32">

      {/* عنوان */}
      <div className="mb-14 text-center">

        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
          نمونه پروژه‌ها
        </span>

        <h2 className="mt-6 text-4xl font-black text-white">
          آخرین پروژه‌های انجام شده
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          مجموعه‌ای از پروژه‌هایی که با تمرکز بر طراحی مدرن، سرعت بالا و تجربه
          کاربری حرفه‌ای توسعه داده شده‌اند.
        </p>

      </div>

      {/* Grid */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
        {projects.map((project) => (

          <ProjectCard
  key={project.id}
  title={project.title}
  category={project.category}
  image={project.image}
  technologies={project.technologies}
  year={project.year}
  status={project.status}
/>

        ))}

      </div>

    </section>
  );
}