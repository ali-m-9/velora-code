import PortfolioHeader from "./PortfolioHeader";
import FeaturedProject from "./FeaturedProject";
import ProjectsGrid from "./ProjectsGrid";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#050816] py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <PortfolioHeader />

        <FeaturedProject />

        <ProjectsGrid />

      </div>
    </section>
  );
}