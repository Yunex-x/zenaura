import React, { JSX } from "react";

export default function StatsBar(): JSX.Element {
  return (
    <div
  className="
    absolute left-1/2 -translate-x-1/2
    bottom-[30px] md:bottom-[40px] xl:bottom-[60px]

    w-[92%] max-w-[1150px]

    flex items-center justify-between

    px-6 md:px-10
    h-[70px] md:h-[82px]

    rounded-[22px]
    border border-white/10

    bg-[#0B0B0B]/40
    backdrop-blur-[22px]

    shadow-[0_20px_60px_rgba(0,0,0,0.5)]

    overflow-hidden
    z-30
  "
>
      {/* subtle top gradient highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.2))]" />

      {/* soft purple glow (right side like Figma) */}
      <div className="pointer-events-none absolute right-[-60px] top-[-40px] w-[220px] h-[160px] bg-[#8E52FF]/20 blur-[60px]" />

      <StatItem value="55,000+" label="Five-star reviews" />
      <Divider />
      <StatItem value="2-Year" label="Warranty" />
      <Divider />
      <StatItem value="100-Days" label="Hassle-free returns" />
    </div>
  );
}

/* ================= ITEMS ================= */

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <span
        className="
          text-[18px] md:text-[22px]
          font-semibold
          text-white
          tracking-[0.02em]
        "
      >
        {value}
      </span>

      <span
        className="
          mt-[3px]
          text-[11px] md:text-[13px]
          text-white/45
          tracking-[0.03em]
        "
      >
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="w-[1px] h-[28px] md:h-[36px] bg-white/10" />
  );
}