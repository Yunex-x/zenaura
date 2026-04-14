import Image from "next/image";
import { JSX } from "react";
import { ChevronRight } from "lucide-react";

export default function ZenQuietSection(): JSX.Element {
  return (
    <section className="w-full bg-[#0D0D0D] py-12 md:py-20">
      <div className="mx-auto w-full max-w-[1200px] px-4 md:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-white/70 md:text-sm">
          <span>Use Cases</span>
          <ChevronRight className="h-4 w-4 text-white" />
          <span className="text-white">Noise Reducing</span>
        </div>

        {/* Title */}
        <h2 className="
          mt-4
          max-w-[340px]
          bg-gradient-to-r from-white to-[#3E3E3E]
          bg-clip-text
          text-[28px]
          font-semibold
          leading-[36px]
          tracking-[-0.02em]
          text-transparent

          sm:max-w-[420px] sm:text-[32px] sm:leading-[42px]

          md:max-w-[520px] md:text-[44px] md:leading-[54px]

          lg:max-w-[700px] lg:text-[56px] lg:leading-[70px]

          xl:max-w-[786px] xl:text-[64px] xl:leading-[84px]
        ">
          Noise-reducing earplugs for sensitive hearing
        </h2>

        {/* Content */}
        <div className="
          mt-8
          flex flex-col gap-8

          md:flex-row md:items-start md:gap-16
        ">
          
          {/* Image */}
          <div className="w-full md:w-[50%] flex justify-center md:justify-start">
            <div className="
              relative
              w-[260px] h-[260px]

              sm:w-[300px] sm:h-[300px]

              md:w-[420px] md:h-[520px]

              lg:w-[520px] lg:h-[700px]

              xl:w-[645px] xl:h-[884px]

              overflow-hidden rounded-2xl
            ">
              <Image
                src="/use-cases/noise-reducing.png"
                alt="Noise reducing earplugs"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="
            w-full
            max-w-[500px]

            md:max-w-none md:w-[50%] md:pt-[60px]
            lg:pt-[80px]
          ">
<p
  className="
  font-montserrat

  text-[15px] leading-[24px]
  text-white/80

  sm:text-[16px] sm:leading-[26px]

  md:text-[18px] md:leading-[30px]

  lg:text-[22px] lg:leading-[34px]

  xl:text-[28px] xl:leading-[42px]
"
>
  <span className="text-white font-medium">
    The world is full of noise—from conversations
  </span>{" "}
  and commutes to traffic, cafés, and parks. For people sensitive to
  sound, this can be difficult to manage.
  <br /><br />
  Noise sensitivity varies. Some find everyday sounds like chewing
  unbearable, while others are only affected by louder noises like
  concerts or sudden shouting.
  <br /><br />
  This sensitivity can make daily life challenging, holding you back
  from fully enjoying experiences.
  <br /><br />
  Earplugs for sensitive ears offer a simple solution, helping reduce
  noise so you can enjoy life more comfortably.
</p>          </div>
        </div>
      </div>
    </section>
  );
}