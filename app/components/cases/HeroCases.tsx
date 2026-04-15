import Image from "next/image";
import { JSX } from "react";

export default function ShopHero(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D]">
      {/* background glow */}
      <div className="absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-[#6f3df4]/20 blur-[140px]" />
      <div className="absolute bottom-[-120px] right-[8%] h-[320px] w-[320px] rounded-full bg-[#6f3df4]/10 blur-[140px]" />

      {/* =========================
          MOBILE / TABLET / LG DOWN
          ========================= */}
      <div className="relative mx-auto block min-h-[650px] w-full max-w-[1440px] xl:hidden">
        {/* text block */}
        <div className="absolute left-1/2 top-[86px] flex w-[353px] -translate-x-1/2 flex-col items-center gap-[30px]">
          <div className="flex h-[140px] w-[353px] flex-col items-start gap-2 self-stretch">
            <h1 className="w-[353px] bg-[linear-gradient(93.31deg,#FFFFFF_40.77%,#98979C_83.66%)] bg-clip-text text-center font-[Montserrat] text-[32px] font-bold uppercase leading-[42px] tracking-[0.03em] text-transparent">
              Earplugs for noise sensitivity
            </h1>

            <p className="flex w-[353px] items-center text-center font-[Montserrat] text-[16px] font-medium leading-[24px] text-white/60">
              Earplugs with noise reduction, designed for noise sensitivity and
              all day comfort
            </p>
          </div>

          <button className="h-[48px] w-[236px] rounded-[40px] bg-[#845CF2] font-[Montserrat] text-[16px] font-semibold tracking-[0.02em] text-white">
            Explore All Products
          </button>
        </div>

        {/* image + labels */}
        <div className="absolute left-1/2 top-[334px] h-[269px] w-[352px] -translate-x-1/2">
          <div className="absolute left-1/2 top-0 h-[269px] w-[269px] -translate-x-1/2">
            <Image
              src="/use-cases/earplugs.png"
              alt="Earplugs"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="absolute left-[0px] top-[19px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-['Space_Grotesk'] text-[16px] font-normal leading-[1] tracking-[-0.02em] text-transparent">
            12hrs comfortable wear
          </span>

          <span className="absolute left-[168px] top-[251px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-['Space_Grotesk'] text-[16px] font-normal leading-[1] tracking-[-0.02em] text-transparent">
            25 DB Noise Cancellation
          </span>
        </div>
      </div>

      {/* =========================
          DESKTOP XL+
          ========================= */}
      <div className="mx-auto hidden min-h-[700px] whitespace-nowrap w-full max-w-[1280px] px-10 xl:flex xl:items-center xl:justify-between">
        {/* left content */}
        <div className="relative z-10 max-w-[580px]">
          <h1 className="bg-gradient-to-r from-white via-white to-[#98979C] bg-clip-text text-[58px] font-bold uppercase leading-[1.04] tracking-[0.03em] text-transparent">
            Earplugs for
            <br />
            Noise Sensitivity
          </h1>

          <p className="mt-5 max-w-[390px] text-[18px] mb-8 leading-[30px] text-white/60">
            Earplugs with noise reduction, designed for 
            <br />
            noise sensitivity and all
            day comfort
          </p>

          <button className="mt-16 h-[56px] w-[260px] rounded-[40px] bg-[#845CF2] text-[18px] font-semibold text-white">
            Explore Products
          </button>
        </div>

        {/* right image */}
        <div className="relative h-[500px] w-[600px]">
          <Image
            src="/use-cases/earplugs.png"
            alt="Earplugs"
            fill
            priority
            className="object-contain object-center"
          />

          {/* top callout */}
          <div className="absolute right-[-14%] top-[12%] flex items-center gap-3">
            <div className="w-[140px] border-t border-dashed border-white/35" />
            <span className="whitespace-nowrap bg-gradient-to-r from-white to-[#7D7D7D] bg-clip-text text-[14px] text-transparent">
              12hrs comfortable wear
            </span>
          </div>

          {/* bottom callout */}
          <div className="absolute right-[-16%] top-[42%] flex items-center gap-3">
            <div className="w-[300px] border-t border-dashed border-white/35" />
            <span className="whitespace-nowrap bg-gradient-to-r from-white to-[#7D7D7D] bg-clip-text text-[14px] text-transparent">
              25 DB Noise Cancellation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}