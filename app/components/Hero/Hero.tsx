import TypingText from "./TypingText";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
<section className="max-w-[1500px] mx-auto px-12 pt-28 pb-8">
      <div className="flex items-center justify-between gap-16">

        {/* اسلایدر */}

        <div className="w-[52%]">
          <HeroSlider />
        </div>

        {/* متن */}

        <div className="w-[48%] text-right">

          <TypingText />

          <p
            className="
            mt-8
            text-gray-400
            text-xl
            leading-10
          "
          >
            طراحی وب سایت، فروشگاه اینترنتی، توسعه نرم افزار،
            آموزش برنامه نویسی، مشاوره و پشتیبانی تخصصی.
          </p>

        </div>

      </div>

    </section>
  );
}