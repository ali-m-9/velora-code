import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816]">
        <Hero />
      </main>
    </>
  );
}