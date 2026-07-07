import Logo from "./Logo";
import Menu from "./Menu";
import RegisterButton from "./RegisterButton";

export default function Navbar() {
  return (
    <header className="w-full flex justify-center pt-8 z-50">
      <div
        className="
        w-[92%]
        max-w-[1450px]
        h-24
        px-12
        rounded-[28px]
        bg-[#111827]/65
        backdrop-blur-3xl
        flex
        items-center
        justify-between
        shadow-[0_18px_55px_rgba(0,0,0,.45)]
        transition-all
        duration-300
        "
      >
        {/* Logo */}
        <Logo />

        {/* Menu */}
        <div className="flex-1 flex justify-center">
          <Menu />
        </div>

        {/* Register */}
        <RegisterButton />
      </div>
    </header>
  );
}
