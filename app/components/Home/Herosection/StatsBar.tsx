import React, { JSX } from "react";

export default function StatsBar(): JSX.Element {
  return (
    <div
      className="
        absolute left-3 right-3 sm:left-4 sm:right-4 md:left-[5%] md:right-[5%] lg:left-[5%] lg:right-[5%] xl:left-[200px] xl:right-[200px]
        bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-[40px] xl:bottom-[60px]
        bg-[rgba(36,36,36,0.11)]
        rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px]
        py-3 sm:py-4 lg:py-0 lg:h-[90px]
        px-3 sm:px-4 md:px-6
        z-30
        flex items-center justify-around
      "
      role="region"
      aria-label="Statistics"
    >
      {/* Stat 1 */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 text-center min-w-0">
        <div
          className="font-space font-[700] text-[#D9D9D9] tracking-[0.03em] leading-[1.2]"
          style={{ fontSize: "clamp(14px, 2.5vw, 30px)" }}
        >
          55,000+
        </div>
        <div
          className="font-poppins font-[400] text-white/60 tracking-[0.04em] leading-[1.2]"
          style={{ fontSize: "clamp(9px, 1.2vw, 14px)" }}
        >
          Five-star reviews
        </div>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-[24px] sm:h-[30px] md:h-[36px] lg:h-[45px] bg-white/10 flex-shrink-0" />

      {/* Stat 2 */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 text-center min-w-0">
        <div
          className="font-space font-[700] text-[#D9D9D9] tracking-[0.03em] leading-[1.2]"
          style={{ fontSize: "clamp(14px, 2.5vw, 30px)" }}
        >
          2‑Year
        </div>
        <div
          className="font-poppins font-[400] text-white/60 tracking-[0.04em] leading-[1.2]"
          style={{ fontSize: "clamp(9px, 1.2vw, 14px)" }}
        >
          Warranty
        </div>
      </div>

      {/* Divider */}
      <div className="w-[1px] h-[24px] sm:h-[30px] md:h-[36px] lg:h-[45px] bg-white/10 flex-shrink-0" />

      {/* Stat 3 */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 text-center min-w-0">
        <div
          className="font-space font-[700] text-[#D9D9D9] tracking-[0.03em] leading-[1.2]"
          style={{ fontSize: "clamp(14px, 2.5vw, 30px)" }}
        >
          100‑Days
        </div>
        <div
          className="font-poppins font-[400] text-white/60 tracking-[0.04em] leading-[1.2]"
          style={{ fontSize: "clamp(9px, 1.2vw, 14px)" }}
        >
          Hassle-free returns
        </div>
      </div>
    </div>
  );
}