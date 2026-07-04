import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-5">

      <Image
        src="/images/logo-new-3.png"
        alt="Velora Code"
        width={82}
        height={82}
        priority
      />

      <div>

        <h1 className="text-[46px] font-black leading-none">
          Velora
        </h1>

        <p
          className="
            text-[30px]
            font-semibold
            leading-none
            mt-1
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
          "
        >
          Code
        </p>

      </div>

    </div>
  );
}