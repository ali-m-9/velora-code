import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen flex flex-col gap-[350px]">
  <Hero />
  <Services/>
</main>
    </>
  );
}
