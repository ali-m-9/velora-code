import Logo from "./Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-8">
      <div
        className="
          w-[92%]
          max-w-[1500px]
          h-24
          flex
          items-center
          justify-between
          px-14
          rounded-[30px]
          bg-[#121827]/75
          backdrop-blur-2xl
          shadow-[0_0_45px_rgba(91,76,255,.18)]
          transition-all
          duration-300
        "
      >
        {/* لوگو */}
        <Logo />
        {/* منو */}
        <Menu />
      </div>
    </header>
  );
}