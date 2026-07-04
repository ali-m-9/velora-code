"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import slides from "./slides";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setFade(false);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 250);
  };

  const prevSlide = () => {
    setFade(false);

    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
      setFade(true);
    }, 250);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, current]);

  return (
    <section className="w-full flex justify-center">

      <div
        className="
        relative
        w-full
        max-w-[700px]
        h-[600px]
        rounded-[35px]
        overflow-hidden
        border
        border-white/10
        shadow-[0_0_60px_rgba(0,0,0,.35)]
        "
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        <Image
          src={slides[current].image}
          alt={slides[current].title}
          fill
          priority
          className={`
            object-cover
            transition-all
            duration-500
            ${fade ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          `}
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div
          className={`
          absolute
          right-12
          bottom-12
          left-12
          transition-all
          duration-500
          ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h2 className="text-white text-5xl font-black">
            {slides[current].title}
          </h2>

          <p className="text-gray-300 text-xl mt-5 leading-9">
            {slides[current].description}
          </p>
        </div>

        {/* قبلی */}

        <button
          onClick={prevSlide}
          className="
          absolute
          top-1/2
          left-6
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          flex
          items-center
          justify-center
          hover:bg-purple-600
          duration-300
          "
        >
          <HiChevronLeft size={30} className="text-white"/>
        </button>

        {/* بعدی */}

        <button
          onClick={nextSlide}
          className="
          absolute
          top-1/2
          right-6
          -translate-y-1/2
          w-14
          h-14
          rounded-full
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          flex
          items-center
          justify-center
          hover:bg-purple-600
          duration-300
          "
        >
          <HiChevronRight size={30} className="text-white"/>
        </button>

        {/* نقطه‌ها */}

        <div
          className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          flex
          gap-3
          "
        >

          {slides.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`duration-300 rounded-full ${
                current === index
                  ? "w-10 h-3 bg-gradient-to-r from-cyan-400 to-purple-500"
                  : "w-3 h-3 bg-white/40 hover:bg-white"
              }`}
            />

          ))}

        </div>

      </div>

    </section>
  );
}