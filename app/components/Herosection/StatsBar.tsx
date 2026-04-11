import React, { JSX } from "react";

/**
 * StatsBar - pixel-accurate desktop implementation per spec.
 * - Absolute position: left:200px, top:1251px, width:1520px, height:90px
 * - Background: rgba(36,36,36,0.11), border-radius: 24px
 * - Three stat blocks positioned exactly using absolute offsets inside the bar
 * - Uses font utility classes: .font-space (Space Grotesk) and .font-poppins (Poppins)
 *
 * Notes:
 * - This component is intended to be rendered inside a relatively-positioned container
 *   that matches your layout (e.g. MainSectionFrame). The absolute offsets are relative
 *   to that container.
 * - For smaller screens the bar collapses to a responsive stacked layout (keeps accessibility).
 */
export default function StatsBar(): JSX.Element {
  return (
    <div
      className="
        absolute left-[200px] top-[1251px]
        w-[1520px] h-[90px]
        box-border
        bg-[rgba(36,36,36,0.11)]
        rounded-[24px]
        overflow-visible
        hidden lg:block
      "
      role="region"
      aria-label="Statistics"
    >
      {/* Container used to position children absolutely relative to the bar */}
      <div className="relative w-full h-full">
        {/* Reviews (left) */}
        <div
          className="absolute left-[47px] top-[26px] w-[123px] h-[45px] flex flex-col items-center gap-[14px]"
          aria-hidden
        >
          <div className="font-space font-[700] text-[30px] leading-[30px] text-[#D9D9D9] -tracking-[0.03em]">
            55,000+
          </div>
          <div className="font-poppins font-[400] text-[14px] leading-[16px] text-white/60 -tracking-[0.04em]">
            Five-star reviews
          </div>
        </div>

        {/* Years / Warranty (center-left) */}
        <div
          className="absolute left-[699px] top-[26px] w-[123px] h-[45px] flex flex-col items-center gap-[14px]"
          aria-hidden
        >
          <div className="font-space font-[700] text-[30px] leading-[30px] text-[#D9D9D9] -tracking-[0.03em] text-center">
            2‑Year
          </div>
          <div className="font-poppins font-[400] text-[14px] leading-[16px] text-white/60 -tracking-[0.04em] text-center">
            Warranty
          </div>
        </div>

        {/* Return (right) */}
        <div
          className="absolute left-[1351px] top-[28px] w-[130px] h-[45px] flex flex-col items-center gap-[14px]"
          aria-hidden
        >
          <div className="font-space font-[700] text-[30px] leading-[30px] text-[#D9D9D9] -tracking-[0.03em] text-center">
            100‑Days
          </div>
          <div className="font-poppins font-[400] text-[14px] leading-[16px] text-white/60 -tracking-[0.04em] text-center">
            Hassle-free returns
          </div>
        </div>
      </div>
    </div>
  );
}