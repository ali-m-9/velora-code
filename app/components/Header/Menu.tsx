"use client";

import {
  HiHome,
  HiOutlineCog6Tooth,
  HiOutlineUser,
  HiOutlinePhone,
} from "react-icons/hi2";

import { FaRegNewspaper } from "react-icons/fa6";

const items = [
  { title: "خانه", icon: HiHome, active: true },
  { title: "آموزش", icon: HiOutlineCog6Tooth },
  { title: "درباره ما", icon: HiOutlineUser },
  { title: "تماس با ما", icon: HiOutlinePhone },
];

export default function Menu() {
  return (
    <nav className="flex items-center gap-8">

      {items.map((item, index) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="flex items-center"
          >

            <button
              className="
            group
            relative
            flex
            items-center
            gap-5
            px-10
            h-20
            rounded-xl
            text-white/90
            transition-all
              duration-300
            hover:text-white
            hover:bg-white/5
"
            >

  <Icon
    size={24}
    className="
    text-cyan-40
    transition-all
    duration-300
    group-hover:text-purple-400
    group-hover:drop-shadow-[0_0_12px_#a855f7]
    "
/>
            <span
className="
text-[17px]
font-semibold
tracking-wide
">
                {item.title}
              </span>

              {item.active && (

                <div
  className="
    absolute
    bottom-3
    left-8
    right-8
    h-[4px]
    rounded-full

    bg-gradient-to-r
    from-cyan-400
    via-sky-500
    to-blue-500

    transition-all
    duration-300

    group-hover:from-purple-400
    group-hover:via-fuchsia-500
    group-hover:to-violet-600
  "
/>

              )}

            </button>

          </div>

        );

      })}

    </nav>
  );
}