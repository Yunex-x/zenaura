import React, { JSX } from "react";

export default function StatsBar(): JSX.Element {
  return (
    <div
      className="
  absolute left-2 right-2 sm:left-3 sm:right-3 md:left-[4%] md:right-[4%] lg:left-[4%] lg:right-[4%] xl:left-[160px] xl:right-[160px]
  bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-[40px] xl:bottom-[60px]
  border border-white/10 bg-white/8 backdrop-blur-xl supports-[backdrop-filter]:bg-white/1
  rounded-[12px] sm:rounded-[16px] md:rounded-[20px] lg:rounded-[24px]
  py-3 sm:py-4 lg:py-0 lg:h-[90px]
  px-3 sm:px-4 md:px-6
  shadow-[0_8px_30px_rgba(0,0,0,0.18)]
  z-30
  flex items-center justify-around
"
      
      role="region"
      aria-label="Statistics"
    >
      {/* Stat 1 */}
      <div className="flex flex-col items-center gap-1 sm:gap-2 text-center min-w-0">
        <div
          className="font-space font-[700] text-[#D9D9D9]  tracking-[0.03em] leading-[1.2]"
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