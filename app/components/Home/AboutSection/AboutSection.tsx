import { Span } from "next/dist/trace";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(45.78%_100%_at_50%_0%,#111014_0%,#0D0D0D_100%)]">
      <div className="relative mx-auto min-h-[700px] w-full max-w-[1920px] px-6 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-[154px]">
        {/* Glow left */}
        <div className="pointer-events-none absolute left-[8%] top-[26%] h-[180px] w-[220px] rounded-full bg-[rgba(170,106,255,0.37)] blur-[140px] sm:h-[200px] sm:w-[250px] lg:left-[12%] lg:top-[26%] lg:h-[220px] lg:w-[280px] lg:blur-[180px]" />

        {/* Glow right */}
        <div className="pointer-events-none absolute right-[-8%] top-[18%] h-[420px] w-[220px] rotate-[78deg] rounded-full bg-[rgba(170,106,255,0.17)] blur-[140px] sm:h-[520px] sm:w-[250px] lg:right-[4%] lg:top-[18%] lg:h-[848px] lg:w-[353px] lg:blur-[175px]" />

        <div className="relative z-10 grid min-h-[700px] grid-cols-1 items-center gap-12 py-16 md:py-20 lg:min-h-[967px] lg:grid-cols-[minmax(320px,645px)_1fr] lg:gap-10 lg:py-0">
          {/* Image side */}
          <div className="relative mx-auto flex w-full max-w-[645px] justify-center lg:justify-start">
            <div className="relative h-[420px] w-[280px] sm:h-[520px] sm:w-[360px] md:h-[620px] md:w-[430px] lg:h-[967px] lg:w-[645px]">
              

              {/* mask gradient */}
              <div className="absolute inset-0 scale-x-[-1] bg-[linear-gradient(180deg,rgba(217,217,217,0)_46.9%,rgba(115,115,115,0.0)_70%,rgba(115,115,115,0)_93.12%)]" />

              {/* main image */}
              <Image
                src="/HomePage/AboutSection/about-left.png"
                alt="Product model wearing earbud"
                fill
                priority
                className="object-cover"
              />

              {/* bottom fade for the cut-off look */}
              <div className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(13,13,13,0)_0%,#0D0D0D_95%)]" />
            </div>
          </div>

          {/* Content side */}
          <div className="relative z-20 max-w-[856px] text-left">
            <h2 className="bg-[linear-gradient(90deg,#FFFFFF_63.39%,rgba(62,62,62,0.21)_143.55%)] bg-clip-text  font-[600]  text-transparent [font-family:Montserrat,sans-serif] text-[34px] leading-[1.1] tracking-[0.02em] sm:text-[42px] md:text-[52px] lg:text-[64px] lg:leading-[120px]">
              About the product
            </h2>

            <p className="mt-6 max-w-[856px] [font-family:Montserrat,sans-serif] text-[18px] font-medium leading-[1.5] tracking-[0.01em] text-white/80 sm:text-[22px] md:text-[28px] lg:mt-[44px] lg:text-[24px] lg:leading-[54px]">
            <span className="font-semibold text-white">A stylish lifestyle accessory that effortlessly </span>  combines comfort
              with elegance. You can wear them anywhere and at any time, making
              them a versatile addition to your wardrobe.
            </p>

            <button className="mt-8 inline-flex h-[56px] items-center justify-center rounded-full bg-[#845CF2] px-8 [font-family:Poppins,sans-serif] text-[16px] font-semibold tracking-[0.02em] mb-12 text-white transition hover:scale-[1.02] hover:bg-[#7650e8] sm:h-[60px] sm:px-10 sm:text-[18px] lg:mt-[62px] lg:h-[64px] lg:w-[234px] lg:px-0 lg:text-[20px] lg:leading-[30px]">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
