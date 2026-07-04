"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypingText() {
  return (
    <section className="text-center mt-24">

      <h2 className="text-white text-2xl font-semibold mb-5">
        ما متخصص هستیم در
      </h2>

      <TypeAnimation
        sequence={[
          "طراحی سایت",
          2000,

          "فروشگاه اینترنتی",
          2000,

          "توسعه برنامه ها",
          2000,

          "همکاری و آموزش",
          2000,

          "مشاوره و مشکل زدایی",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        cursor={true}
        className="
          text-6xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
        "
      />

    </section>
  );
}