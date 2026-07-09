"use client";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import RegisterButton from "./RegisterButton";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
<header className="sticky top-0 z-50 w-full flex justify-center pt-8 transition-all duration-500">      <div
  className={`
    w-[92%]
    max-w-[1450px]
    px-12
    rounded-[28px]
    flex
    items-center
    justify-between
    border
    transition-all
    duration-500

    ${
      scrolled
        ? "h-20 bg-[#0B1020]/70 backdrop-blur-3xl border-white/10 shadow-[0_18px_55px_rgba(0,0,0,.45)]"
        : "h-24 bg-[#0B1020]/20 backdrop-blur-xl border-white/5 shadow-none"
    }
  `}
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
