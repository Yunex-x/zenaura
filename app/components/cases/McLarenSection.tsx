import Image from "next/image";
import { JSX } from "react";

export default function ProductHero(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-[#0D0D0D]">
      {/* =========================
          MOBILE / MD DOWN
          stacked layout like screenshot
          ========================= */}
      <div className="mx-auto flex w-full max-w-[393px] flex-col px-4 pt-5 pb-8 lg:hidden">
        {/* title + desc */}
        <div className="flex flex-col gap-[6px]">
          <h1 className="max-w-[328px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-[Montserrat] text-[32px] font-bold leading-[120%] tracking-[-0.02em] text-transparent">
            McLaren Racing x
            <br />
            Zen Switch 2
          </h1>

          <p className="max-w-[290px] font-[Montserrat] text-[16px] font-medium leading-[140%] text-white/60">
            Experience adjustable noise control with the official earplug of
            McLaren Racing.
          </p>
        </div>

        {/* color + collection */}
        <div className="mt-8 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="font-[Montserrat] text-[16px] font-medium leading-[120%] text-white">
              Color : Black
            </p>

            <div className="flex items-start gap-2">
              <button
                aria-label="Green"
                className="h-[30px] w-[30px] rounded-full bg-[linear-gradient(180deg,#1F3F39_0%,#418173_20%,#6AA79A_35.62%,#2E5F56_50%,#79BDB0_66.14%,#418173_85%,#1F3F39_100%)]"
              />
              <button
                aria-label="Black"
                className="h-[30px] w-[30px] rounded-full border-2 border-[#7E7E7E] bg-[linear-gradient(180deg,#000000_0%,#1A1A1A_24.56%,#3A3A3A_42.85%,#111111_58.01%,#4A4A4A_80.09%,#000000_100%)] shadow-[inset_0px_4px_6px_rgba(0,0,0,0.4)]"
              />
              <button
                aria-label="Gold"
                className="h-[30px] w-[30px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5E582A_0%,#9F964E_13.09%,#C7BE76_28.16%,#F1E7A3_41.34%,#B3AB63_53.58%,#C7BE76_68.17%,#4F4A22_100%)]"
              />
              <button
                aria-label="Silver"
                className="h-[30px] w-[30px] rounded-full bg-[linear-gradient(180deg,#4D4D4D_0%,#8C8C8C_20%,#B3B3B3_35%,#F2F2F2_50%,#9E9E9E_63.95%,#B3B3B3_80%,#3A3A3A_100%)]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="font-[Montserrat] text-[16px] font-medium leading-[120%] text-white">
              McLaren Collection
            </p>

            <button
              aria-label="McLaren Orange"
              className="h-[30px] w-[30px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5A2D00_0%,#A65300_20.77%,#FF8000_36.15%,#FFC266_49.82%,#C46200_63.76%,#FF8000_81.63%,#3D1F00_100%)] shadow-[0px_1px_2px_rgba(13,13,18,0.06)]"
            />
          </div>
        </div>

        {/* image */}
        <div className="relative mx-auto  h-[300px] w-[654px] max-w-full">
          <Image
            src="/use-cases/mclaren.png"
            alt="McLaren Racing x Zen Switch 2"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* price + actions */}
        <div className="mt-8 flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="font-[Poppins] text-[18px] font-medium leading-[120%] text-white">
              Price:
            </span>
            <span className="font-[Poppins] text-[32px] font-bold leading-[140%] tracking-[-0.02em] text-white">
              €40.00
            </span>
          </div>

          <div className="flex flex-wrap gap-[7px]">
            <div className="flex h-[36px] w-[58px] items-center justify-center rounded-[31px] border border-white px-[10px]">
              <div className="flex items-center gap-2">
                <span className="text-[12px] font-semibold text-white">−</span>
                <span className="text-[12px] font-semibold text-white">1</span>
                <span className="text-[12px] font-semibold text-white">+</span>
              </div>
            </div>

            <button className="flex h-[36px] w-[134px] items-center justify-center rounded-[31px] border border-white px-[10px] font-[Inter] text-[13px] font-medium text-white">
              Add to Cart
            </button>

            <button className="flex h-[42px] w-[199px] items-center justify-center rounded-[118px] bg-[#882EFF] px-[10px] font-[Montserrat] text-[16px] font-semibold tracking-[-0.02em] text-white">
              Buy with Shop
            </button>
          </div>

          <button className="w-fit font-[Poppins] text-[14px] font-medium leading-[120%] text-white underline">
            More Payment Options
          </button>
        </div>
      </div>

      {/* =========================
          LG
          same layout, scaled down
          ========================= */}
      <div className="mx-auto hidden w-full max-w-[1180px] grid-cols-[0.9fr_1.05fr_0.75fr] items-center gap-6 px-8 py-14 lg:grid xl:hidden">
        {/* left */}
        <div className="flex flex-col justify-center">
          <h1 className="max-w-[260px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-[Montserrat] text-[40px] font-bold leading-[1.05] tracking-[-0.03em] text-transparent">
            McLaren Racing x
            <br />
            Noise Cancellation
          </h1>

          <p className="mt-6 max-w-[300px] font-[Montserrat] text-[18px] leading-[1.5] text-white/60">
            Experience adjustable noise control with the official earplug of
            McLaren Racing.
          </p>

          <div className="mt-14">
            <p className="mb-6 font-[Montserrat] text-[16px] font-medium text-white">
              Color :
            </p>

            <div className="flex gap-3">
              <div className="h-[28px] w-[28px] rounded-full bg-[linear-gradient(180deg,#1F3F39_0%,#418173_20%,#6AA79A_35.62%,#2E5F56_50%,#79BDB0_66.14%,#418173_85%,#1F3F39_100%)]" />
              <div className="h-[28px] w-[28px] rounded-full border border-[#7E7E7E] bg-[linear-gradient(180deg,#000000_0%,#1A1A1A_24.56%,#3A3A3A_42.85%,#111111_58.01%,#4A4A4A_80.09%,#000000_100%)]" />
              <div className="h-[28px] w-[28px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5E582A_0%,#9F964E_13.09%,#C7BE76_28.16%,#F1E7A3_41.34%,#B3AB63_53.58%,#C7BE76_68.17%,#4F4A22_100%)]" />
              <div className="h-[28px] w-[28px] rounded-full bg-[linear-gradient(180deg,#4D4D4D_0%,#8C8C8C_20%,#B3B3B3_35%,#F2F2F2_50%,#9E9E9E_63.95%,#B3B3B3_80%,#3A3A3A_100%)]" />
            </div>

            <p className="mt-10 mb-6 font-[Montserrat] text-[16px] font-medium text-white">
              McLaren Collection
            </p>

            <div className="h-[28px] w-[28px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5A2D00_0%,#A65300_20.77%,#FF8000_36.15%,#FFC266_49.82%,#C46200_63.76%,#FF8000_81.63%,#3D1F00_100%)]" />
          </div>
        </div>

        {/* center image */}
        <div className="relative mx-auto h-[470px] w-[440px]">
          <Image
            src="/use-cases/mclaren.png"
            alt="McLaren Racing x Noise Cancellation"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* right */}
        <div className="flex flex-col justify-center">
          <div>
            <p className="font-[Poppins] text-[18px] font-medium text-white">
              Price:
            </p>
            <p className="mt-1 font-[Poppins] text-[44px] font-bold tracking-[-0.02em] text-white">
              €40.00
            </p>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex h-[36px] w-[58px] items-center justify-center rounded-[31px] border border-white">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white">
                <span>−</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>

            <button className="flex h-[36px] w-[120px] items-center justify-center rounded-[31px] border border-white font-[Inter] text-[13px] font-medium text-white">
              Add to Cart
            </button>
          </div>

          <button className="mt-5 flex h-[42px] w-[190px] items-center justify-center rounded-[118px] bg-[#882EFF] font-[Montserrat] text-[15px] font-semibold text-white">
            Buy with Shop
          </button>

          <button className="mt-5 w-fit font-[Poppins] text-[13px] font-medium text-white underline">
            More Payment Options
          </button>
        </div>
      </div>

      {/* =========================
          XL+
          same layout, only smaller to fit
          ========================= */}
      <div className="mx-auto hidden w-full max-w-[1320px] grid-cols-[0.95fr_1.1fr_0.8fr] items-center gap-8 px-10 py-16 xl:grid">
        {/* left */}
        <div className="flex flex-col justify-center">
          <h1 className="max-w-[430px] bg-[linear-gradient(104.81deg,#FFFFFF_34.43%,#7D7D7D_94.04%)] bg-clip-text font-[Montserrat] text-[66px] font-bold leading-[1.06] tracking-[-0.03em] text-transparent">
            McLaren Racing x
            <br />
            Noise Cancellation
          </h1>

          <p className="mt-7 max-w-[340px] font-[Montserrat] text-[20px] leading-[1.55] text-white/60">
            Experience adjustable noise control with the official earplug of
            McLaren Racing.
          </p>

          <div className="mt-16">
            <p className="mb-6 font-[Montserrat] text-[18px] font-medium text-white">
              Color :
            </p>

            <div className="flex gap-3">
              <div className="h-[30px] w-[30px] rounded-full bg-[linear-gradient(180deg,#1F3F39_0%,#418173_20%,#6AA79A_35.62%,#2E5F56_50%,#79BDB0_66.14%,#418173_85%,#1F3F39_100%)]" />
              <div className="h-[30px] w-[30px] rounded-full border border-[#7E7E7E] bg-[linear-gradient(180deg,#000000_0%,#1A1A1A_24.56%,#3A3A3A_42.85%,#111111_58.01%,#4A4A4A_80.09%,#000000_100%)]" />
              <div className="h-[30px] w-[30px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5E582A_0%,#9F964E_13.09%,#C7BE76_28.16%,#F1E7A3_41.34%,#B3AB63_53.58%,#C7BE76_68.17%,#4F4A22_100%)]" />
              <div className="h-[30px] w-[30px] rounded-full bg-[linear-gradient(180deg,#4D4D4D_0%,#8C8C8C_20%,#B3B3B3_35%,#F2F2F2_50%,#9E9E9E_63.95%,#B3B3B3_80%,#3A3A3A_100%)]" />
            </div>

            <p className="mt-12 mb-6 font-[Montserrat] text-[18px] font-medium text-white">
              McLaren Collection
            </p>

            <div className="h-[30px] w-[30px] rounded-full border border-[#1D242D] bg-[linear-gradient(180deg,#5A2D00_0%,#A65300_20.77%,#FF8000_36.15%,#FFC266_49.82%,#C46200_63.76%,#FF8000_81.63%,#3D1F00_100%)]" />
          </div>
        </div>

        {/* center image */}
        <div className="relative mx-auto h-[560px] w-[560px]">
          <Image
            src="/use-cases/mclaren.png"
            alt="McLaren Racing x Noise Cancellation"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* right */}
        <div className="flex flex-col justify-center">
          <div>
            <p className="font-[Poppins] text-[20px] font-medium text-white">
              Price:
            </p>
            <p className="mt-1 font-[Poppins] text-[48px] font-bold tracking-[-0.02em] text-white">
              €40.00
            </p>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex h-[38px] w-[64px] items-center justify-center rounded-[31px] border border-white">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white">
                <span>−</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>

            <button className="flex h-[38px] w-[132px] items-center justify-center rounded-[31px] border border-white font-[Inter] text-[13px] font-medium text-white">
              Add to Cart
            </button>
          </div>

          <button className="mt-5 flex h-[46px] w-[210px] items-center justify-center rounded-[118px] bg-[#882EFF] font-[Montserrat] text-[16px] font-semibold text-white">
            Buy with Shop
          </button>

          <button className="mt-5 w-fit font-[Poppins] text-[14px] font-medium text-white underline">
            More Payment Options
          </button>
        </div>
      </div>
    </section>
  );
}